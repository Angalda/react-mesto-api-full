import React from "react";
import iconOk from "../images/iconOk.svg";
import iconError from "../images/iconError.svg";

function infoTooltip(props) {
    return (
        
        <div className={`pop-up pop-up_type_tooltip ${props.isOpen && "pop-up_opened"}`}>
            <div className="pop-up__container pop-up__container-tooltip">
                <button className="pop-up__closed" type="button" onClick={props.onClose}></button>
                {props.isAuthOk ? (
                    <>
                        <img src={`${iconOk}`} className="pop-up__tooltip_img" alt="Подтверждение" />
                        <p className="pop-up__tooltip_text">Вы успешно зарегистрировались!</p>
                    </>
                ) : (
                    <>
                        <img src={`${iconError}`} className="pop-up__tooltip_img" alt="Ошибка" />
                        <p className="pop-up__tooltip_text">Что-то пошло не так. Попробуйте ещё раз!</p>
                    </>
                )}
            </div>
        </div>

        
    )
}

export default infoTooltip;