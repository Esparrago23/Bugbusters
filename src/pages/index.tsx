import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./home";
import Login from "./Login/Login";
import { Ofertas } from "./Ofertas/";
import { Subastalo } from "./Subastalo";
import Perfil from "./Usuario/Perfil";

const routes = [
  { path: "/home", Page: Home }, 
  { path: "/ofertas", Page: Ofertas },
  { path: "/usuario", Page: Perfil },
  {path: "/subastalo", Page:Subastalo},
  { path: "/", Page: Login }
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

