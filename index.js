let dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach(drop => {
    function test() {
        if (drop.lastElementChild.style.display == "none") {
            reset();
            drop.lastElementChild.style.display = "block"
            drop.firstElementChild.firstElementChild.firstElementChild.style.transform = "rotate(180deg)"
        } else {
            reset();
        }
    }
    drop.firstElementChild.firstElementChild.addEventListener("click", function() {
        test();
      });
});

function reset() {
    dropdown.forEach(drop => {
        drop.lastElementChild.style.display = "none"
        drop.firstElementChild.firstElementChild.firstElementChild.style.transform = "rotate(0deg)"
    });
}

