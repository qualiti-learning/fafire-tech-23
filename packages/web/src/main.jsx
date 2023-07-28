import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import AppRouter from './Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <AppRouter />
  </ChakraProvider>
);
