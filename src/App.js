import './App.css';
import { RouterProvider } from "react-router-dom"
import { router } from './route/Route';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import Loader from './components/Loader';



function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </>
  );
}

export default App;
