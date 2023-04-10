
import { createBrowserRouter } from 'react-router-dom';
import Locker from '../Locker/Locker';
import Table from '../Table/Table';

export const router = createBrowserRouter([
    {

        path: '/',
        element: <Locker/>
    },
       
   {
    path: '/admin-locker',
    element: <Table/>
   }
]) 
