import PopupWithForm from "./PopupWithForm.js";
import React, { useState, useEffect } from "react";

function AddPlacePopup(props) {

    const [cardName, setCardName] = useState('');
    const [cardLink, setCardLink] = useState('');

    function handleCardName(e) {
        setCardName(e.target.value);
    }

    function handleCardLink(e) {
        setCardLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name: cardName,
            link: cardLink
        })
    }

    useEffect(() => {
        setCardName('');
        setCardLink('');
    }, [props.isOpen]);

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            name={'cards'}
            title={'Новое место'}
            textButton='Создать'
        >
            <input
                value={cardName}
                onChange={handleCardName}
                type="text"
                className="pop-up__input pop-up__input_value_card-title"
                id="card-title"
                name="card-title"
                placeholder="Название"
                required
                minLength="2"
                maxLength="30">
            </input>

            <span
                className="pop-up__span-error pop-up__span-error_visible card-title-error"
                id="card-title-error">
            </span>

            <input
                value={cardLink}
                onChange={handleCardLink}
                type="url"
                className="pop-up__input pop-up__input_value_card-link"
                id="card-link"
                name="card-link"
                placeholder="Ссылка на картинку"
                required>
            </input>

            <span
                className="pop-up__span-error pop-up__span-error_visible card-link-error"
                id="card-link-error">
            </span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;
