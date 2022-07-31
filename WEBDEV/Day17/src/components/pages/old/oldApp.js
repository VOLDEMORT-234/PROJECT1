// // import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
// // import { Switch } from "react-router-dom/cjs/react-router-dom.min";
// // import Welcome from "./Welcome";
// // import Products from "./Products";
// // import MainHeader from "./MainHeader";
// // import ProductDetails from "./ProductDetails";

// function App() {
//   return (
//     <div>
//       <header>
//         <MainHeader />
//       </header>
//       <main>
//         {/* routing and many more */}
//         {/* <h2>I AM STARTING </h2> */}
//         {/* we will lose our present state of web so we have to maintain our singal page entity */}
//         {/* switch will take care that single pages must be active in route not multiple */}
//         <Switch>
//           <Route path="/" exact>
//             <Redirect to="/welcome" />
//             {/* Redirect you to /welcome page */}
//             {/* <h1>Hello</h1> */}
//           </Route>
//           <Route path="/welcome">
//             <Welcome />
//           </Route>
//           <Route path="/products" exact>
//             {/* exact is very important */}
//             <Products />
//           </Route>
//           {/* we can do normal product details but we have to load all product same page and different data */}
//           <Route path="/products/:productId">
//             {/* <p>hello</p> */}
//             <ProductDetails />
//           </Route>
//         </Switch>
//       </main>
//     </div>
//   );
// }

// // there url never changes
// // you can access to any website
// // useing multiple page React.js tips
// // What is Routing Very important
// // different pages with different path
// // BOLO SHIYA BAR RAM CHANDRA KI JAI
// // building SPAs
// // packages which does all routing activitys
// // ourdomain.com/product
// // jai shree ram

// export default App;
