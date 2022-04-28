import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import PageNotFound from "./pages/Page404";
import PageAbout from "./pages/PageAbout";
import PageDashBord from "./pages/PageDashBord";
import PageHome from "./pages/PageHome";
import PageUser from "./pages/PageUser";
import PageUsers from "./pages/PageUsers";
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/users" element={<PageUsers />} />
        <Route path="/user/:id" element={<PageUser />} />
        <Route path="/usuarios" element={<Navigate to="/users" />} />
        <Route path="/dashboard/*" element={<PageDashBord />}>
          <Route path="welcome" element={<p>Welcome</p>} />
          <Route path="goodbye" element={<p>goodbye</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
