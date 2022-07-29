// import {Navigate} from "react-router-dom";
import ParentDashoboard from "../pages/parent/dashboard";
import ChurchDashboard from "../pages/church/dashboard";
import TeacherDashboard from "../pages/teacher/dashboard";
import StudentDashboard from "../pages/student/dashboard";
import BibleSchoolDashoboard from "../pages/bible_school/dashboard";

export const IsParent = () => {
    const user = localStorage.getItem('user');
    if (user) {
        const userObj = JSON.parse(user);
        if (userObj.type === 'parent') {
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
        if (userObj.type === 'student') {
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
        if (userObj.type === 'teacher') {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export const IsBibleScholar = () => {
    const user = localStorage.getItem('user');
    if (user) {
        const userObj = JSON.parse(user);
        if (userObj.type === 'bibleschorlar') {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}


export const IsAdmin = ({ children }) => {
    return IsParent() ? <ParentDashoboard /> :
        IsTeacher() ? <TeacherDashboard /> :
            IsStudent() ? <StudentDashboard /> : IsBibleScholar() ? <BibleSchoolDashoboard /> :
                <ChurchDashboard />;//general population
}