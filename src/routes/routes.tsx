import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Home } from "../Pages/home/Home";
import Header from '../Pages/home/components/Header'
import { EsClassPage } from "../Pages/EsClassPage/EsClassPage";
 
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/home" />
        <Route element={<EsClassPage />} path="/class/:classIndex" />
      </Routes>
    </BrowserRouter>
  )
}