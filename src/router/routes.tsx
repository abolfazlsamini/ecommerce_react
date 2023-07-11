import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "../routes/profile";
import NotFound from "../routes/notFound";
import Home from "../routes/home";
import Navbar from "./Navbar";
import ProductView from "../routes/productView";

function NavRoutes() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/:id" element={<ProductView />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    // </BrowserRouter>
  );
}
export default NavRoutes;
