import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Home } from "../Pages/home/Home";
import Header from '../Pages/home/components/Header'
import { EsClassPage } from "../Pages/EsClassPage/EsClassPage";
import { ClassMagicPage } from "../Pages/ClassMagicPage/ClassMagicPage";
import { EsMagicPage } from "../Pages/EsMagicPage/EsMagicPage";
import { MagicsPage } from "../Pages/MagicsPage/MagicsPage";
import { Features } from "../Pages/Features/Features";
 
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/home" />
        <Route element={<EsClassPage />} path="/class/:classIndex" />
        <Route element={<ClassMagicPage />} path="/class/:classIndex/spells" />
        <Route element={<MagicsPage />} path="/spells" /> 
        <Route element={<EsMagicPage />} path="/spells/:spellIndex" />
        <Route element={<Features />} path="/feat" />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  )
}