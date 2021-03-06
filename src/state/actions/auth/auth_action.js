import { loginService } from "../../../services/auth/auth_service";
import { signUpService } from "../../../services/auth/auth_service";
import { customHistory } from "../../../custom_browser_router";



export const login = (credentials, history) => {
  
  return (dispatch) => {

    if (credentials.password.length < 6) {
      let message = "Your password is too short , must be at least 6 characters";
      return dispatch({ type: "SHORT_PASSWORD", message });
    } else {
      dispatch({ type: "AUTHLOADING" });
      try {
        loginService(credentials, history).then(
          (res) => {
            if (res.status !== 200 || undefined) {
              console.log(res)
              dispatch({ type: "LOGIN_ERROR", res });
            } else if (res.status === 200 && res.data.success === true) {
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("user", JSON.stringify(res.data.user));
              dispatch({ type: "LOGIN_SUCCESS" });
              customHistory.push("/dashboard");
            } else if (res.status === 200 && res.data.success === false) {
              var error = res.data.message;
              dispatch({ type: "LOGIN_ERROR", error: error });
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
        window.location.reload();
      }
    };
  }
};

export const logout = (history) => {
  console.log(history);
  localStorage.clear();

};

export const resetAuth = () => {
  return (dispatch) => {
    dispatch({ type: "RESETAUTH" })
  };
}

export const register = (credentials, history) => {
  return (dispatch) => {
    if (credentials.password.length < 6) {
      let message = "Your password is too short";
      return dispatch({ type: "SHORT_PASSWORD", message });
    } else {
      dispatch({ type: "AUTHLOADING" });
      try {
        signUpService(credentials, history).then(
          (res) => {
            if (res.status !== 200 || undefined) {
              dispatch({ type: "LOGIN_ERROR", res });
            } else if (res.status === 200 && res.data.success === true) {
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("user", JSON.stringify(res.data.user));
              dispatch({ type: "LOGIN_SUCCESS" });
              customHistory.push("/dashboard");
            } else if (res.status === 200 && res.data.success === false) {
              var error = res.data.message;
              dispatch({ type: "LOGIN_ERROR", error: error });
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
        window.location.reload();
      }
    };
  }
};