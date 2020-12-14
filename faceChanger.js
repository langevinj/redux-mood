//set store
const store = Redux.createStore(faceReducer);

//subscribe renderFace to face changes
const face = document.getElementById('face');

//grab all the buttons from the page
const buttons = Array.from(document.querySelectorAll(".button"));

//payloads for each mood
const moods = {
    "HAPPY": { face: "(＾▽＾)", bg: "yellow" }, 
    "SAD": { face: "●︿●", bg: "blue"},
    "ANGRY": { face: "(⋋▂⋌)", bg: "scarlet" },
    "CONFUSED": { face: "(◑○◑)", bg: "green"}
}


for (const button of buttons) {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        const payload = moods[e.target.id]
        store.dispatch({ type: e.target.id, payload: payload })
    });
}

function renderFace() {
    face.innerText = store.getState().face;
    face.style.cssText = `background-color: ${store.getState().bg}`;
}

renderFace()
store.subscribe(renderFace)