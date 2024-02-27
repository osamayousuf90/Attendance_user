import './App.css';
import { RouterProvider } from "react-router-dom"
import { router } from './route/Route';
import { Suspense } from 'react';

function App() {
  return (
    <>
      <Suspense fallback={
        <h1>Loading...</h1>
      }>
        <RouterProvider router={router} />
      </Suspense>
      {/* <ToastContainer
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
      /> */}
    </>
  );
}

export default App;
