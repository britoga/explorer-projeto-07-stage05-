export const Modal = {

    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".modal .title span"),
    buttonClose: document.querySelector(".modal button.close"),

    open() {
        Modal.wrapper.classList.add("open")
    },
    close() {
        Modal.wrapper.classList.remove("open");
    }
}


Modal.buttonClose.onclick = () => {
    Modal.close();
}

/* Fechar modal pelo ESC */

window.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
    console.log(event.key) // Verificar teclas que estão sendo digitadas

    if (event.key === "Escape") {
        Modal.close()
    }
}