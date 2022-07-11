// import {Navigate} from "react-router-dom";
import ParentDashoboard from "../pages/parent/dashboard";
import ChurchDashboard from "../pages/church/dashboard";
import TeacherDashboard from "../pages/teacher/dashboard";
import StudentDashboard from "../pages/student/dashboard";

export const IsParent = () => {
    const user = localStorage.getItem('user');
    if (user) {
        const userObj = JSON.parse(user);
        if (userObj.type === 1) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export const IsStudent = () => {
    const user = localStorage.getItem('user');
    if (user) {
        const userObj = JSON.parse(user);
        if (userObj.type === 2) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export const IsTeacher = () => {
    const user = localStorage.getItem('user');
    if (user) {
        const userObj = JSON.parse(user);
        if (userObj.type === 3) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}


export const IsAdmin = ({children}) => {
    return IsParent() ? <ParentDashoboard/> :
        IsTeacher() ? <TeacherDashboard/> :
            IsStudent() ? <StudentDashboard/> :
                <ChurchDashboard/>;//general population
}