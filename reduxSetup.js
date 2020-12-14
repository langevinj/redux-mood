const INITIAL_STATE = { face: "┐(´～｀) ┌", bg: "white" }

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "HAPPY":
            return { ...state, face: payload.face, bg: payload.bg};
        case "SAD":
            return { ...state, face: payload.face, bg: payload.bg };
        case "ANGRY":
            return { ...state, face: payload.face, bg: payload.bg };
        case "CONFUSED":
            return { ...state, face: payload.face, bg: payload.bg };
        default:
            return state;
    }
}