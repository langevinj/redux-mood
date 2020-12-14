window.onload = function() {
    const faceElement = document.getElementById("face");

    const buttons = Array.from(document.querySelectorAll(".button"))

    for(const button of buttons) {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            store.dispatch({ type: e.target.id })
            const currentFace = store.getState().face;
            faceElement.innerText = currentFace;
        })
    }
}