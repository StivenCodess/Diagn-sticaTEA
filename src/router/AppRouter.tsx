import { Route, Routes } from "react-router-dom";

import Home from "../sections/Home/Home";
import AboutUs from "../sections/AboutUs/AboutUs";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
    </Routes>
  );
};

export default AppRouter;
