import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CareerPaths from "./components/CareerPaths";
import Timeline from "./components/Timeline";
import ProfileForm from "./components/ProfileForm";
import Footer from "./components/Footer";
import FloatingChatBot from "./components/FloatingChatBot";
import ProtectedRoute from "./components/ProtectedRoute";

import Results from "./pages/Results";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import StudentProfile from "./pages/StudentProfile";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CareerPaths />
      <Timeline />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Protected Routes */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student-profile"
          element={
            <ProtectedRoute>
              <StudentProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/results/:id"
          element={
            <ProtectedRoute>
              <Results />
            </ProtectedRoute>
          }
        />
      </Routes>

      <FloatingChatBot />
    </BrowserRouter>
  );
}

export default App;