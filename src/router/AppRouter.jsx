import { useSelector } from "react-redux";
import { getUser } from "../store/selectors";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";

const AppRouter = () => {
  const user = useSelector(getUser);

  return user ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route element={route.component} path={route.path} key={route.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route element={route.component} path={route.path} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
