import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./home";
import Login from "./Login/Login";
import { Ofertas } from "./Ofertas/";
import Registro from "./Registro/Registro";

const routes = [
  { path: "/home", Page: Home },
  { path: "/ofertas", Page: Ofertas }, // Cambiar 'page' a 'Page'
  { path: "/login", Page: Login },     // Cambiar 'page' a 'Page'
  { path: "/", Page: Registro } // Cambiar 'page' a 'Page'
];

function Routing() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {routes.map(({ path, Page }) => (
        <Route key={path} path={path} element={<Page />} /> // Cambiar <Routes /> a <Page />
      ))}
    </Routes>
  );
}

export { Routing };

