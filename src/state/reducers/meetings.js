const initState = {
    loading: false
};

const MeetingsReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_MEETINGS":
            return{
                ...state,
                loading:true
            }
            case "MEETINGS_LOADED":
                return{
                    ...state,
                    loading:false,
                    meetings: action.meetings
                }
        default:
            return state;
    }
}

export default MeetingsReducer;