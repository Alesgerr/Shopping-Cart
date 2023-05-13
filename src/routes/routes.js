// import Cart from "../pages/Cart";
// import Contact from "../pages/Contact";
// import Home from "../pages/Home";
// import HomeLayout from "../pages/HomeLayout";
// import ProductDetail from "../pages/ProductDetail";
// import Profile from "../pages/Profile";
// import Register from "../pages/Login/Register";
// import AuthLayout from "../pages/auth/AuthLayout";
// import Login from "../pages/Login/Login";
// import ForgotPassword from "../pages/Login/ForgotPassword";

// const routes = [
//    {
//       path: '/',
//       element: <HomeLayout />,
//       children: [
//          {
//             index: true,
//             element: <Home />
//          },
//          {
//             path: 'contact',
//             element: <Contact />,
            
//          },
//          {
//             path: 'profil',
//             element: <Profile />,
//             // auth: true
//          },
//          {
//             path: 'cart',
//             element: <Cart />,
//          },
//          {
//             path: 'product/:id',
//             element: <ProductDetail />
//          },
//          {
//             path: 'register',
//             element: <Register />
//          },
//          {
//             path: 'login',
//             element: <Login />
//          },
//          {
//             path: 'forgotpassword',
//             element: <ForgotPassword />
//          },

//       ]
//    },
//    {
//       path: 'auth',
//       element: <AuthLayout />,
//       children: [
//          // {
//          //    path: 'login',
//          //    element: <Login />
//          // }
//       ]
//    },
   
   
// ]

// // const authMap = routes => routes.map(route => {
// //    if(route?.auth){
// //       route.element = <PrivateRoutes>{route.element}</PrivateRoutes>
// //    }
// //    if(route?.children){
// //       route.children = authMap(route.children)
// //    }
// //    return route
// // })

// // export default authMap(routes)
// export default routes