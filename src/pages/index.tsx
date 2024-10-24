import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./home";
import Login from "./Login/Login";
import { Ofertas } from "./Ofertas/";
import Registro from "./Registro/Registro";
import path from "path";
import { Subastalo } from "./Subastalo";

const routes = [
  { path: "/", Page: Registro }, 
  { path: "/home", Page: Home },
  { path: "/ofertas", Page: Ofertas },
  { path: "/login", Page: Login },
  { path: "/usuario", Page: Login },
  {path: "/subastalo", Page:Subastalo}
];

function Routing() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {routes.map(({ path, Page }) => (
        <Route key={path} path={path} element={<Page />} /> 
      ))}
    </Routes>
  );
}

export { Routing };

