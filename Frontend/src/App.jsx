import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./Layout/Nav.jsx";
import Footer from "./Layout/Footer.jsx";
import FloatingButtons from "./Layout/FloatingButtons.jsx";

import Home from "./pages/Home.jsx";
import InternshipPage from "./pages/Internship.jsx";
import Courses from "./pages/Courses.jsx";
import Contact from "./pages/Contact.jsx";

// Web pages
import StaticWeb from "./pages/web/StaticWeb.jsx";
import DynamicWeb from "./pages/web/DynamicWeb.jsx";
import ResponsiveWeb from "./pages/web/ResponsiveWeb.jsx";
import WordpressWeb from "./pages/web/WordpressWeb.jsx";
import CustomWeb from "./pages/web/CustomWeb.jsx";

// App / Android pages
import JetpackCompose from "./pages/app/JetpackCompose.jsx";
import KotlinDev from "./pages/app/KotlinDev.jsx";
import JavaDev from "./pages/app/JavaDev.jsx";
import FlutterDev from "./pages/app/FlutterDev.jsx";

// Client pages
import ClientProfile from "./client/Profile.jsx";
import ClientCourse from "./client/Course.jsx";
import ClientInternship from "./client/Internship.jsx";
import ClientApplication from "./client/Application.jsx";
import ClientWebsite from "./client/Website.jsx";

// Admin pages 
import AdminUser from "./admin/AdminUsers.jsx";
import AdminRequests from "./admin/AdminRequests.jsx";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />

      <div className="pt-[88px]">
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/internship" element={<InternshipPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />

          {/* Web Development */}
          <Route path="/web/static" element={<StaticWeb />} />
          <Route path="/web/dynamic" element={<DynamicWeb />} />
          <Route path="/web/responsive" element={<ResponsiveWeb />} />
          <Route path="/web/wordpress" element={<WordpressWeb />} />
          <Route path="/web/custom" element={<CustomWeb />} />

          {/* Android Development */}
          <Route path="/android/jetpack" element={<JetpackCompose />} />
          <Route path="/android/kotlin" element={<KotlinDev />} />
          <Route path="/android/java" element={<JavaDev />} />
          <Route path="/android/flutter" element={<FlutterDev />} />

          {/* Client pages */}
          <Route path="/client/profile" element={<ClientProfile />} />
          <Route path="/client/batch" element={<ClientCourse />} />
          <Route path="/client/internship" element={<ClientInternship />} />
          <Route path="/client/application" element={<ClientApplication />} />
          <Route path="/client/website" element={<ClientWebsite />} />

          {/* ADMIN ROUTES */}
          <Route path="/admin/users" element={<AdminUser />} />
          <Route path="/admin/requests" element={<AdminRequests />} />

        </Routes>
      </div>

      <Footer />
      <FloatingButtons />
    </BrowserRouter>
  );
};

export default App;
