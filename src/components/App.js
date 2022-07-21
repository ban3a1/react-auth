import Signup from "../components/Signup";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import ForgotPassword from "../components/ForgotPassword";
import UpdateProfile from "../components/UpdateProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<ProtectedRoute />}>
                <Route path="/" element={<Dashboard />} />
              </Route>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
