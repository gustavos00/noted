import { Route, Routes } from "react-router-dom";

import { Login } from "./pages/Login";
import { ERoutes } from "./_common/utils/enums/ERoutes";

export default function AppRouter() {
  return (
    <Routes>
      <Route path={ERoutes.Login} element={<Login />} />
    </Routes>
  );
}
