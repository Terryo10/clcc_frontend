const initState = {
    show_sidebar: false
};

const SidebarReducer = (state = initState, action) => {
    switch (action.type) {
        case "OPEN_OR_CLOSE_SIDEBAR":
            return{
                ...state,
                show_sidebar:!state.show_sidebar
            }
        default:
            return state;
    }
}

export default SidebarReducer;