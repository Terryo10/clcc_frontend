import LandingPage from "../pages/landing";
import Login from "../pages/auth/login";
import { OnlyWhenNotLoggedIn } from "../middleware/is_authenticated";
import {PrivateRoute} from "../middleware/private_route";
import Register from "../pages/auth/register"; 
import { Routes, Route } from "react-router-dom";
import {IsAdmin} from "../middleware/is_admin";
import NotFound from "../pages/not_found";
import Donate from "../pages/donations/donate";
import Library from "../pages/library/library";
import ClassRoom from "../pages/classroom/classroom";


function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/donate" element={<Donate />} />
                <Route element={<OnlyWhenNotLoggedIn />}>
                    <Route exact path="/login" name="Login" element={<Login />} />
                    <Route exact path="/register" name="Login" element={<Register />} />
                </Route>
                <Route element={<PrivateRoute />}>
                <Route exact path="/dashboard" name="Login" element={<IsAdmin/> } />
                <Route exact path="/classroom" name="Login" element={<ClassRoom/> } />
                </Route>
                <Route exact path="/library" element={<Library/>}>

                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>

    );
}

export default AppRoutes; 