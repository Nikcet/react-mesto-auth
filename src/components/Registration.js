import React from "react";
import { Link } from 'react-router-dom';

export default function Registration(props) {
    return (
        <div className="login">
            <div className="login__wrapper">
                <h2 className="login__header">Регистрация</h2>
                <form
                    className="login__form"
                    name="login"
                    onSubmit={props.onSubmit}
                >
                    <input
                        type="email"
                        id="input-email"
                        className="login__input login__input-email"
                        placeholder="Email"
                        name="email-input"
                        required
                        onChange={props.onChange}
                        value={props.email}
                    />
                    <input
                        type="password"
                        id="input-password"
                        className="login__input login__input-password"
                        placeholder="Пароль"
                        name="password-input"
                        required
                        onChange={props.onChange}
                        value={props.password}
                    />
                    <button
                        type="submit"
                        className="login__button"
                    >Зарегистрироваться</button>
                    <p className="login__question">Уже зарегистрированы? <Link to="/sign-in" className="login__link">Войти</Link></p>
                </form>
            </div>
        </div>
    )
}