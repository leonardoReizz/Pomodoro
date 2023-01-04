import { Route, Routes } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
