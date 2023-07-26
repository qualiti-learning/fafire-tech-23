import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <Navbar />
    <Home />
    <Footer />
  </ChakraProvider>
);
