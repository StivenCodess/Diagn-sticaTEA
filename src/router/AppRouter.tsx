import { Route, Routes } from "react-router-dom";

import { Home, AboutUs, Professionals } from "../sections";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/professionals" element={<Professionals />} />
    </Routes>
  );
};

export default AppRouter;
