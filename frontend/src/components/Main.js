import React, { useContext } from "react";
import Card from "./Card";
import editImg from "../images/edit.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditPofile,
  onNewPlace,
  onView,
  cards,
  onCardLike,
  onCardDelete
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      
      {/* ___________________profile__________________________*/}
      <section className="profile">
        <div className="profile__contain">
          <img src={currentUser.avatar} alt="аватар" className="profile__avatar" />
          <button className="profile__avatar-edit" type="button" onClick={onEditAvatar}>
            <img src={editImg} alt="кнопка редактирования" className="profile__avatar-edit-img" />
          </button>

          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button className="profile__redacted-button" type="button" onClick={onEditPofile}></button>
            </div>

            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>

        <button className="profile__add-button" type="button" onClick={onNewPlace}></button>
      </section>
      {/*___________________photo-cards__________________________*/}
      <section className="photo-cards">
        <ul className="photo-cards__list">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onView={onView}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />)
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;