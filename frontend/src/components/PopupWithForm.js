import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`pop-up pop-up_type_${props.name} ${props.isOpen ? 'pop-up_opened' : ''}`}>
      <div className={`pop-up__container pop-up__container-${props.name}`}>
        <button className="pop-up__closed" type="button" onClick={props.onClose}></button>
        <form action="URL" onSubmit={props.onSubmit} className={`pop-up__form pop-up__form_${props.name}`} method="get" name={props.name} noValidate>
          <h2 className="pop-up__title">{props.title}</h2>
          {props.children}
          <button type="submit" className="pop-up__submit-form">{props.textButton}</button>

        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

