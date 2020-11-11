const scrollButton = document.querySelector("#scrollButton");


scrollButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});