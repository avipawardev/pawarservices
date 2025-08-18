import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import UserRegistrationModal from "./components/UserRegistrationModal";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <UserRegistrationModal />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
