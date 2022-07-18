import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card({card, onView, onCardLike, onCardDelete}) {
    const currentUser = useContext(CurrentUserContext);
    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner === currentUser._id;
    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `photo-card__delete ${isOwn ? 'photo-card__delete_visible' : ''}`
    );
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some((i) => i === currentUser._id);
    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `photo-card__like ${isLiked ? 'photo-card__like_active' : ''}`;

    function handleClick() {
        onView(card)
    }

    function handleLikeClick() {
        onCardLike(card)
    }

    function handleDeleteClick() {
        onCardDelete(card)
    }

    return (
        <li className="photo-card" id={card._id} key={card._id} >

            <div className={cardDeleteButtonClassName} onClick={handleDeleteClick}></div>
            <img src={card.link} alt={card.name} className="photo-card__img" onClick={handleClick} />
            <div className="photo-card__bottom">
                <h2 className="photo-card__title">{card.name}</h2>
                <div className="photo-card__like-container">
                    <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
                    <p className="photo-card__like-count">{card.likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;