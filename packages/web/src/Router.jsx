import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Container } from '@chakra-ui/react';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Container maxW='6xl'>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path='/'>
          <Route element={<Home />} index />
          <Route element={<Contact />} path='/contact' />
          <Route element={<Dashboard />} path='/dashboard' />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
