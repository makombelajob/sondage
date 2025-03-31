function slides(){
    function forward(event) {
        const active = event.target.parentElement.querySelector(".active");
        if (!active) return;

        active.classList.remove("active");
        const next = active.nextElementSibling ? active.nextElementSibling : active.parentElement.firstElementChild;
        next.classList.add("active");
    }

    function backward(event) {
        const active = event.target.parentElement.querySelector(".active");
        if (!active) return;

        active.classList.remove("active");
        const prev = active.previousElementSibling ? active.previousElementSibling : active.parentElement.lastElementChild;
        prev.classList.add("active");
    }
    return { forward, backward };
}
export default slides();