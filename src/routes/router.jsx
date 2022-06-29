import LandingPage from "../pages/landing";
import Login from "../pages/auth/login";
import { LoggedInRoute } from "../middleware/is_authenticated";
import Register from "../pages/auth/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function AppRoutes() {
    return (
        <BrowserRouter>
            <div className="page-content-wrapper">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route exact path="/login" name="Login" element={<LoggedInRoute><Login /></LoggedInRoute>} />
                    <Route exact path="/register" name="Login" element={<LoggedInRoute><Register /></LoggedInRoute>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default AppRoutes;