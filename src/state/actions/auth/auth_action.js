

import { loginService } from "../../../services/auth/auth_service";
import { signUpService } from "../../../services/auth/auth_service";

export const login = (credentials, history) => {
  return (dispatch) => {
    dispatch({ type: "AUTHLOADING" });

    if (credentials.password.length < 6) {
      let message = "Your password is too short";
      return dispatch({ type: "ERROR", message });
    }
    try {
      loginService(credentials, history).then(
        (res) => {
          
          if (res.status !== 200 ||  undefined) {
            console.log(res)
            dispatch({ type: "LOGIN_ERROR", res });
          } else if (res.status === 200  && res.data.success === true) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            dispatch({ type: "LOGIN_SUCCESS" });
            dispatch({ type: "WARNING", res });
          } else if(res.status === 200 && res.data.success === false) {
            
            var error = res.data.message;
            dispatch({ type: "LOGIN_ERROR",error: error });
            dispatch({ type: "ERROR", res });
          }
        },
        (error) => {
          console.log("kkkk");
          dispatch({ type: "CODE_ERROR", error });
        }
      );
    } catch (e) {
      dispatch({ type: "CODE_ERROR", e });
      dispatch({ type: "WARNING", e });
    }
  };
};

export const logout = (history) => {
  localStorage.clear();
  history.props.history.push("/login");
};

export const resetAuth =()=>{
  return (dispatch)=>{
    dispatch({type: "RESETAUTH"})
  };
}

export const register = (credentials, history) => {
  return (dispatch) => {
    dispatch({ type: "AUTHLOADING" });
    if (credentials.password.length < 6) {
      let message = "Your password is too short";
      return dispatch({ type: "ERROR", message });
    }
    try {
      signUpService(credentials, history).then(
        (res) => {
          console.log(res);

          if (res.status !== 200) {
            
            dispatch({ type: "WARNING", res });
          } else if (res.data.success !== undefined) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            dispatch({ type: "LOGIN_SUCCESS" });
            dispatch({ type: "WARNING", res });
          } else {
            dispatch({ type: "LOGIN_ERROR", res });
            dispatch({ type: "ERROR", res });
          }
        },
        (error) => {
          console.log("kkkk");
          dispatch({ type: "CODE_ERROR", error });
        }
      );
    } catch (e) {
      dispatch({ type: "CODE_ERROR", e });
      dispatch({ type: "WARNING", e });
    }
  };
};