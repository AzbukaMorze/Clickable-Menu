function toggleModal() {
    var modal = document.querySelector("#my-modal");
    if (modal.classList.contains("open")) {
        modal.classList.remove("open");
    } else {
        modal.classList.add("open");
    }
}
