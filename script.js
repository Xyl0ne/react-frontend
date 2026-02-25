function myFunc(y) {

    const btn = document.getElementById("btn2");
    const c = document.createElement("video");
    c.src = y;
    c.autoplay = true;

    c.autoplay = true;
    c.controls = true;
    c.autoplay = true;

    c.style.position = "absolute";
    c.style.left = "50%";
    c.style.top = "50%";
    c.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(c);


}
function myFunc2() {
    const btn = document.getElementById("btn2");
    let left = Math.floor(Math.random() * 80) + 10 + "%";
    let top = Math.floor(Math.random() * 80) + 10 + "%";


    btn.style.position = "absolute";
    btn.style.left = left;
    btn.style.top = top;
    return "Habulin mo ko!";
}
export { myFunc, myFunc2 }