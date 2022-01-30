import React from "react";

export default function Login(props) {
    const [userName, setUserName] = React.useState('');
    const [email, setEmail] = React.useState('');

    return (
        <div className="login">
            <div className="login__wrapper">
                <h2 className="login__header">Вход</h2>
                <form className="login__form" name="login">
                    <input
                        type="email"
                        id="input-email"
                        className="login__input login__input-email"
                        placeholder="Email"
                        name="email-input"
                        required
                    />
                    <input
                        type="password"
                        id="input-password"
                        className="login__input login__input-password"
                        placeholder="Имя пользователя"
                        name="password-input"
                        required
                    />
                    <button type="submit" className="login__button">Войти</button>
                </form>
            </div>
        </div>
    )
}