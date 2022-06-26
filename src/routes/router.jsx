import LandingPage from "../pages/landing";
const { BrowserRouter, Routes , Route} = require("react-router-dom");

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;