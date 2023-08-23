/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import * as S from "./styles/common";
import ProjectDashboard from "./pages/ProjectDashboard/ProjectDashboard";
import MainLayout from "./components/MainLayout/MainLayout";
import { RecoilRoot } from "recoil";
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Account from "./pages/Account/Account";

function App() {
  return (
    <>
    <Global styles={S.GSCommon}/>
    <RecoilRoot>
      <MainLayout>
        <Router>
          <Routes>
            <Route path="/project" element={<ProjectDashboard />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Router>
      </MainLayout>
    </RecoilRoot>
    </>
  );
}

export default App;
