// import swal from 'sweetalert';

document.addEventListener("DOMContentLoaded", function() {

    const formulario = document.getElementById("NewListItems");
    const listToDo = document.getElementById("elementList");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const newElementValue = formulario.inputElementNew.value;
        const newElementList = document.createElement("li");
        // const editButton = document.createElement("button");
        // const deleteButton = document.createElement("button");

        newElementList.textContent = newElementValue;
        // editButton.textContent = "Editar";
        // deleteButton.textContent = "Eliminar";

        // newElementList.appendChild(editButton);
        // newElementList.appendChild(deleteButton);
        listToDo.appendChild(newElementList);
        formulario.reset();

        // editButton.addEventListener("click", function() {
        //     const updatedValue = prompt("Modifica la tarea:", newElementList.textContent);
        //     if (updatedValue !== null) {
        //         newElementList.textContent = updatedValue;
        //     }
        // });

        // deleteButton.addEventListener("click", function() {
        //     listToDo.removeChild(newElementList);
        // });

        newElementList.addEventListener("click", function() {
            newElementList.classList.toggle("tachado");
        });
    });
});