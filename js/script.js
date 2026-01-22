document.querySelector(".mini-filter").addEventListener("click", () => {
    document.querySelector(".cummunity-filter-list").classList.toggle("open");
})

document.querySelector(".mini-filter").addEventListener("click", () => {
    document.querySelector(".cummunity-filter").classList.toggle("open1");
})

document.querySelector(".good-wrap").addEventListener("click", () => {
    // document.querySelector(".good-wrap").classList.toggle("good-wrap-hover-color");

    if (document.querySelector("#good-icon").dataset.liked === "false") {
        document.querySelector("#good-icon").dataset.liked = "true"
        document.querySelector("#good-icon").src = "../assets/good-fill.svg"
    } else {
        document.querySelector("#good-icon").dataset.liked = "false"
        document.querySelector("#good-icon").src = "../assets/good.svg"
    }
})

document.querySelector(".write").addEventListener("click", () => {
    document.querySelector(".write-modal").classList.add("modalOpen");
})

document.querySelector(".modal-close-button").addEventListener("click", () => {
    document.querySelector(".write-modal").classList.remove("modalOpen");
})

document.querySelector(".user-good-wrap").addEventListener("click", () => {
    if (document.querySelector("#user-good-icon").dataset.good === "false") {
        document.querySelector("#user-good-icon").dataset.good = "true"
        document.querySelector("#user-good-icon").src = "../assets/good-fill.svg"
    } else {
        document.querySelector("#user-good-icon").dataset.good = "false"
        document.querySelector("#user-good-icon").src = "../assets/good.svg"
    }
})