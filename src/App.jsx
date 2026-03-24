import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import {Home} from "./pages/Home";
import {Conocenos} from "./pages/Conocenos";
import {Proyectos} from "./pages/Proyectos";
import {Contactos} from "./pages/Contactos";

export const App = () => {


     return (
          <>
               <BrowserRouter >
                    <Routes>
                         <Route path="/" element={<Main />}>
                              <Route path="/" element={<Home/>} />
                              <Route path="conocenos" element={<Conocenos/>} />
                              <Route path="proyectos" element={<Proyectos/>} />
                              <Route path="contactos" element={<Contactos/>} />
                         </Route>
                    </Routes>
               </BrowserRouter>

          </>
     )


}