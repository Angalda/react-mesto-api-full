import PopupWithForm from "./PopupWithForm";
import React, { useRef, useEffect } from "react";


function EditAvatarPopup (props) {
    const avatarRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    } 

    useEffect(() => {
        avatarRef.current.value = '';
    }, [props.isOpen]);

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            name={'avatar'}
            title={'Обновить аватар'}
            textButton={'Сохранить'}
        >
            <input ref={avatarRef} type="url" className="pop-up__input pop-up__input_value_avatar-link" id="avatar-link"
                name="link" placeholder="Ссылка на картинку" required />
            <span className="pop-up__span-error pop-up__span-error_visible avatar-link-error"
                id="avatar-link-error"></span>

        </PopupWithForm>
    )
}

export default EditAvatarPopup;