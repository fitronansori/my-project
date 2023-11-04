import {
  Home,
  Login,
  SignUp,
  Services,
  Doctors,
  DoctorDetails,
  Contact,
} from "../pages";

import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/services" element={<Services />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
