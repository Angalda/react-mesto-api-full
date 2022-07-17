import PopupWithForm from "./PopupWithForm.js";
import React, { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup(props) {

    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, props.isOpen]);

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            name={'profile'}
            title={'Редактировать профиль'}
            textButton={'Сохранить'}
        >
            <input type="text" value={name || ""} onChange={handleNameChange} className="pop-up__input pop-up__input_value_name" id="profile-name" name="name"
                placeholder="Имя" required minLength="2" maxLength="40"></input>
            <span className="pop-up__span-error pop-up__span-error_visible profile-name-error"
                id="profile-name-error"></span>
            <input type="text" value={description || ""} onChange={handleDescriptionChange} className="pop-up__input pop-up__input_value_description" id="profile-description"
                name="description" placeholder="О себе" required minLength="2"
                maxLength="200"></input>
            <span className="pop-up__span-error pop-up__span-error_visible profile-description-error"
                id="profile-description-error"></span>

        </PopupWithForm>
    )
}

export default EditProfilePopup;
