import React from "react";

function ImagePopup(props) {
  return (
    <div className={`pop-up pop-up_type_photo-view ${props.isOpen ? 'pop-up_opened' : ''}`}>
      <div className="pop-up__container-photo-view">
        <button className="pop-up__closed pop-up__closed_photo-view" type="button" onClick={props.closePopup}></button>
        <img src={props.card.link} alt={props.card.name} className="pop-up__photo" />
        <h2 className="pop-up__title-photo-view">{props.card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;