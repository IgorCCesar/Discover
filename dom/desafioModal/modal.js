const buttonOpenModal = document.getElementById("openModal");
const modalWrapper = document.querySelector("modal-wrapper");

// funcionalidade para tirar a classe invisible do modal
buttonOpenModal.onclick = function () {
  modalWrapper.classList.remove("invisible");
};
// Saindo do Modal clicando na tecla ESC
document.addEventListener("keydown", function (event) {
  const isEscKey = event.key === "Escape";

  if (isEscKey) {
    modalWrapper.classList.add("invisible");
  }
});
