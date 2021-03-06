const initState = {
  authResponse: null,
  loading: false,
  error: false,
  isAuthenticated:  localStorage.getItem('token') != null,
};

const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case "AUTHLOADING":
      console.log(action);
      return {
        ...state,
        authResponse: "",
        loading: true,
        error: false,
        shortPassword: false,
        isAuthenticated:  localStorage.getItem('token') != null,
      };
    case "SHORT_PASSWORD":
      console.log(action);
      return {
        ...state,
        authResponse: action.message,
        loading: false,
        error: false,
        shortPassword: true,
        isAuthenticated:  localStorage.getItem('token') != null,
      };
    case "CODE_ERROR":
      console.log(action);
      return {
        ...state,
        authResponse: "seems to be a problem please try again later",
        loading: false,
        error: false,
        isAuthenticated:  localStorage.getItem('token') != null,
      };
    case "LOGIN_SUCCESS":
      console.log(action);
      return {
        ...state,
        authResponse: "log In Successfull",
        loading: false,
        error: false,
        isAuthenticated:  localStorage.getItem('token') != null,
      };
    case "LOGIN_ERROR":
      console.log(action)
      return {
        ...state,
        authResponse: action.error,
        loading: false,
        error: true,
        isAuthenticated:  localStorage.getItem('token') != null,
      };
    case "RESETAUTH":
      return {
        ...state,
        authResponse: "",
        loading: false,
        error: false,
        isAuthenticated:  localStorage.getItem('token') != null,
      };
    default:
      return state;
  }
};

export default AuthReducer;   