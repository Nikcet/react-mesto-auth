import React from "react";
import { Link } from "react-router-dom";

export default function Login(props) {
    return (
        <div className="login">
            <div className="login__wrapper">
                <h2 className="login__header">Вход</h2>
                <form className="login__form" name="login" onSubmit={props.onSubmit}>
                    <input
                        type="email"
                        id="input-email"
                        className="login__input login__input-email"
                        placeholder="Email"
                        name="email-input"
                        onChange={props.onChange}
                        value={props.email}
                        required
                    />
                    <input
                        type="password"
                        id="input-password"
                        className="login__input login__input-password"
                        placeholder="Пароль"
                        name="password-input"
                        onChange={props.onChange}
                        value={props.password}
                        required
                    />
                    <button type="submit" className="login__button">Войти</button>
                    <p className="login__question">Еще не зарегистрировались? <Link to="/sign-up" className="login__link">Зарегистрироваться</Link></p>
                </form>
            </div>
        </div>
    )
}