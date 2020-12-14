const INITIAL_STATE = { face: "┐(´～｀) ┌", bg: "white" }

function faceReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "HAPPY":
            return { ...state, face: action.payload.face, bg: action.payload.bg };
        case "SAD":
            return { ...state, face: action.payload.face, bg: action.payload.bg };
        case "ANGRY":
            return { ...state, face: action.payload.face, bg: action.payload.bg };
        case "CONFUSED":
            return { ...state, face: action.payload.face, bg: action.payload.bg };
        default:
            return state;
    }
}