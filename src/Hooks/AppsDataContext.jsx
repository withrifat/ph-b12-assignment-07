import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { loadInstalledApps as loadInstalledFromStorage } from '../utils/LocalStorage';
import { toast } from 'react-toastify';

const AppsDataContext = createContext(null);

export const AppsDataProvider = ({ children }) => {
  const [apps, setApps] = useState([]);
  const [appsLoading, setAppsLoading] = useState(true);
  const [appsError, setAppsError] = useState(null);

  const [installedApps, setInstalledApps] = useState(() => loadInstalledFromStorage());

  useEffect(() => {
    let isActive = true;
    const fetchApps = async () => {
      try {
        setAppsLoading(true);
        const res = await fetch('/data.json');
        if (!res.ok) throw new Error('Failed to load apps');
        const data = await res.json();
        if (isActive) setApps(Array.isArray(data) ? data : []);
      } catch (err) {
        if (isActive) setAppsError(err);
      } finally {
        if (isActive) setAppsLoading(false);
      }
    };
    fetchApps();
    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('installedApps', JSON.stringify(installedApps));
    } catch {}
  }, [installedApps]);

  const isInstalled = useCallback((id) => installedApps.some((app) => app.id === id), [installedApps]);

  const installApp = useCallback((app) => {
    setInstalledApps((prev) => {
      if (prev.some((a) => a.id === app.id)) return prev;
      toast.success(`${app.title} installed`, { toastId: `install-${app.id}` });
      return [...prev, app];
    });
  }, []);

  const removeApp = useCallback((id) => {
    setInstalledApps((prev) => {
      const target = prev.find((a) => a.id === id);
      if (target) toast.info(`${target.title} uninstalled`, { toastId: `uninstall-${id}` });
      return prev.filter((app) => app.id !== id);
    });
  }, []);

  const getAppById = useCallback((id) => apps.find((app) => app.id === id), [apps]);

  const value = useMemo(
    () => ({
      apps,
      appsLoading,
      appsError,
      installedApps,
      isInstalled,
      installApp,
      removeApp,
      getAppById,
    }),
    [apps, appsLoading, appsError, installedApps, isInstalled, installApp, removeApp, getAppById]
  );

  return <AppsDataContext.Provider value={value}>{children}</AppsDataContext.Provider>;
};

export const useAppsData = () => {
  const ctx = useContext(AppsDataContext);
  if (!ctx) throw new Error('useAppsData must be used within AppsDataProvider');
  return ctx;
};

export default AppsDataContext;
