import { RouterProvider } from 'react-router-dom';
import './App.css';
import Locker from './Locker/Locker';
import { router } from './router/Root';

function App() {
  return (
    <RouterProvider router={router}>
    
    </RouterProvider>
  );
}

export default App;
