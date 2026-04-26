document.addEventListener("DOMContentLoaded", () => {
    const roof = document.querySelector(".roof");
    let rotate = 0;

    roof.addEventListener("mouseover", () => {
        rotate += 90;
        roof.style.transform = `rotateX(45deg) rotateY(${rotate}deg)`;
    });
});