import React, { lazy } from 'react';
import { Outlet, Link } from "react-router-dom";
const Navigation = lazy(() => import('../components/navigation'))
const Footer = lazy(() => import('../components/footer'))

function Root() {
   return (
      < div className=" bg-fixed min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-900 max-w-screen overflow-hidden relative " >
         <Navigation />
         <Outlet />
         <Footer />

      </div>
   )
}

export default Root