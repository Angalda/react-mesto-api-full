import React from "react";
import { Link, withRouter } from "react-router-dom";


function Register(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(password, email);
  }
 
  return (
    <section className="auth">
      <h2 className="auth__title">Регистрация</h2>

      <form action="URL" className="auth__form" method="get" onSubmit={handleSubmit}>

        <input
          type="email"
          className="auth__input"
          onChange={handleEmailChange}
          value={email}
          name="email"
          placeholder="Email"
          required
        ></input>

        <input 
        type="password"
        className="auth__input" 
        onChange={handlePasswordChange}
        value={password} 
        name="password" 
        placeholder="Пароль" 
        required></input>

        <button type="submit" className="auth__btn-submit">Зарегистрироваться</button>

      </form>
      <div className="auth__signup">
        <p className="auth__signup-text">Уже зарегистрированы?</p>
        <Link to="sign-in" className="auth__signup-link"> Войти </Link>
      </div>
    </section>
  );
}

export default withRouter(Register);