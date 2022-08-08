import Main from "../Components/Main/Main";
import Navbar from "../Components/Navbar/Navbar";
import NoFoundPage from "../Components/NoFoundPage/NoFoundPage";

export const privateRoutes = [
  { path: "/main", component: <Main /> },
  { path: "/*", component: <NoFoundPage /> },
];
export const publicRoutes = [{ path: "/navbar", component: <Navbar /> }];
