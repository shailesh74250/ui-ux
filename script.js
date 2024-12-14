const main_menu = document.getElementById("main");
const sub_menu = document.getElementById("sub");

main_menu.addEventListener("toggle", () => {
    sub_menu.style.display = "block";
});