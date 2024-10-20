import { Route, Routes } from "react-router-dom";

import { Home, AboutUs, Professionals, Contact } from "../sections";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/professionals" element={<Professionals />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
