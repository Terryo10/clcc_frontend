import LandingPage from "../pages/landing";
const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
    return (
        <BrowserRouter>
            <div class="page-content-wrapper">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default AppRoutes;