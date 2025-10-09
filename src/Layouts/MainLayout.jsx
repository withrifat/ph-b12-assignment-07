import { Outlet, useNavigation } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import Loader from '../Components/Loader/Loader';
import { useEffect, useRef, useState } from 'react';

const MainLayout = () => {
  const navigation = useNavigation();
  const [showLoader, setShowLoader] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const isLoading = navigation.state === 'loading';
    if (isLoading) {
      setShowLoader(true);
    } else {
      // ensure loader shows at least 3000ms to avoid flicker
      timerRef.current = setTimeout(() => setShowLoader(false), 3000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [navigation.state]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1">
        {showLoader ? <Loader /> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
