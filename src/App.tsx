import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  About,
  ForgotPassword,
  Home,
  ListPage,
  SignIn,
  SignUp,
  SinglePage,
} from "./pages/pageIndex";

function App() {
  const Layout = () => {
    return (
      <div className=" bg-gradient-to-l from-[#040813] to-[#201f1f] text-white h-full ">
        <Navbar />
        <div className="my-14 mx-auto p-2">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
      ],
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
