import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  About,
  ForgotPassword,
  Home,
  ListPage,
  ProfilePage,
  SignIn,
  SignUp,
  SinglePage,
} from "./pages/pageIndex";
import { useEffect } from "react";

function App() {
  const Layout = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return (
      <div className=" bg-gradient-to-l from-[#040813] to-[#201f1f] text-white h-full ">
        <Navbar />
        <div className="mt-16  mx-auto p-2">
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
        {
          path: "/profile",
          element: <ProfilePage />,
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
