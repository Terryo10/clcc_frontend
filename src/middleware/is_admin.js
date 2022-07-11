// import { Outlet, Navigate } from 'react-router-dom';

export  function isAdmin() {
    const user = localStorage.getItem('user');
    if (user) {
        const userObj = JSON.parse(user);
        if (userObj.type === "admin") {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

export  function isParent() {
    const user = localStorage.getItem('user');
    if (user) {
        const userObj = JSON.parse(user);
        if (userObj.type === "parent") {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export  function isStudent() {
    const user = localStorage.getItem('user');
    if (user) {
        const userObj = JSON.parse(user);
        if (userObj.type === "student") {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export  function isTeacher() {
    const user = localStorage.getItem('user');
    if (user) {
        const userObj = JSON.parse(user);
        if (userObj.type === "teacher") {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}


// export const IsAdmin = ({ children }) => {
//     const authed = localStorage.getItem('token')
//     return authed === null ? <Navigate to="/login" /> : isAdmin ? <Outlet /> : <Navigate to="/dashboard" />;

// }