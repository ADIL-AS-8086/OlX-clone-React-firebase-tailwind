import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AuthProvider, { AuthContext } from "./context/AuthContext";


function App() {
  return (
    <Router>
   <AuthProvider>
      {/* ✅ All components that use navigation hooks must be inside Router */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
       </AuthProvider>
    </Router>
  );
}

export default App;
