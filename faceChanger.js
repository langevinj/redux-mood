//set store
const store = Redux.createStore(faceReducer);

//subscribe renderFace to face changes
const face = document.getElementById('face');

//grab all the buttons from the page
const buttons = Array.from(document.querySelectorAll(".button"));

//grab the random mood selector button
const randButton = document.querySelector("#rand");

//payloads for each mood
const moods = {
    "HAPPY": { face: "(＾▽＾)", bg: "yellow" }, 
    "SAD": { face: "●︿●", bg: "blue"},
    "ANGRY": { face: "(⋋▂⋌)", bg: "red" },
   "CONFUSED": { face: "(◑○◑)", bg: "green"}
}

randButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    const randNum = Math.floor(Math.random() * Object.keys(moods).length);
    const mood = Object.keys(moods)[randNum]
    const payload = moods[mood]
    store.dispatch({ type: mood, payload: payload });
});

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