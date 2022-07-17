import PopupWithForm from "./PopupWithForm.js";
import React from "react";

function DeleteCardPopup(props) {

    function handleSubmit(e) {
        e.preventDefault();
        props.onDelete({ card: props.card });
    }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            name='deleteCard'
            title='Вы уверены?'
            textButton='Да'
        />
    )
}

export default DeleteCardPopup;