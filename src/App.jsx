import './App.css';
import Layout from "./components/pages/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";


function App() {
  // state (état, données)
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      errorElement: <div>Error Page</div>,
      children: [
        { path: "/", element: <About /> },
        { path: "/work", element: <Work /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ])

  // comportements

  // render / affichage
  return <RouterProvider router={router}/>;
}

export default App;
