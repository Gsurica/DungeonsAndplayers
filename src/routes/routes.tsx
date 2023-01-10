import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Home } from "../Pages/home/Home";
import Header from '../Pages/home/components/Header'
import { EsClassPage } from "../Pages/EsClassPage/EsClassPage";
import { ClassMagicPage } from "../Pages/ClassMagicPage/ClassMagicPage";
import { EsMagicPage } from "../Pages/EsMagicPage/EsMagicPage";
import { MagicsPage } from "../Pages/MagicsPage/MagicsPage";
import { Features } from "../Pages/Features/Features";
import { Monsters } from "../Pages/Monsters/Monsters";
import { EsMonsterPage } from "../Pages/EsMonsterPage/EsMonsterPage";
import { EsFeaturesPage } from "../Pages/EsFeaturesPage/EsFeaturesPage";
import { Skills } from "../Pages/Skills/Skills";
import { EsSkillPage } from "../Pages/EsSkillPages/EsSkillPage";
import { Proficiencies } from "../Pages/Proficiencies/Proficiencies";
import { EsProficienciesPage } from "../Pages/EsPorficienciesPage/EsProficienciesPage";
 
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
        <Route element={<EsFeaturesPage />} path="/feat/:featIndex" />
        <Route element={<Monsters />} path="/monsters" />
        <Route element={<EsMonsterPage />} path="/monsters/:monsterIndex" />
        <Route element={<Skills />} path="/skills" />
        <Route element={<EsSkillPage />} path="/skills/:skillIndex" />
        <Route element={<Proficiencies />} path="/proficiencies" />
        <Route element={<EsProficienciesPage />} path="/proficiencies/:proficienciesIndex" />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  )
}