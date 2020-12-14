const INITIAL_STATE = { face: "┐(´～｀) ┌" }

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "HAPPY":
            return { ...state, face: "(＾▽＾)"};

        case "SAD":
            return { ...state, face: "●︿●" }

        case "ANGRY":
            return { ...state, face: "(⋋▂⋌)" }
        
        case "CONFUSED":
            return { ...state, face: "(◑○◑)" }
        
        default:
            return state;
    }
}

const store = Redux.createStore(rootReducer);