const initState = {
    authResponse: null,
    loading:false,
    error: false
  };
  
  const AuthReducer = (state = initState, action) => {
    switch (action.type) {
      case "AUTHLOADING":
        console.log(action);
        return {
          ...state,
          authResponse: "password too short",
          loading:true,
          error: false
        };
      case "SHORT_PASSWORD":
        console.log(action);
        return {
          ...state,
          authResponse: "password too short",
          loading:false,
          error: false
        };
      case "CODE_ERROR":
        console.log(action);
        return {
          ...state,
          authResponse: "seems to be a problem please try again later",
          loading:false,
          error: false
        };
      case "LOGIN_SUCCESS":
        console.log(action);
        return {
          ...state,
          authResponse: "log In Successfull",
          loading:false,
          error: false
        };
      case "LOGIN_ERROR":
        console.log(action)
        return {
          ...state,
          authResponse: action.error,
          loading:false,
          error: true
        };
        case "RESETAUTH":
    
        return {
          ...state,
          authResponse: "",
          loading:false,
          error: false
        };
      default:
        return state;
    }
  };
  
  export default AuthReducer;