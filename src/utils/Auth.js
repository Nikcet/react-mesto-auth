// class Auth {
//     constructor({ url, headers, body }) {
//         this._url = url;
//         this._headers = headers;
//         this._body = body;
//     }

//     onResponse(res) {
//         return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
//     }
// }

export const URL = 'https://auth.nomoreparties.co';

export const registration = (email, password) => {
    return fetch(
        `${URL}/signup`,
        {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        }
    )
        .then(response => {
            try {
                if (response.status === 200) {
                    return response.json();
                }
            } catch (e) {
                return (e)
            }
        })
        .then(res => { return res })
        .catch(err => { console.log('Что-то не так с регистрацией', err) })
}

export const auth = (email, password) => {
    return fetch(
        `${URL}/signin`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        }
    )
        .then(response => {
            try {
                if (response.status === 200) {
                    return response.json();
                }
            } catch (e) {
                return (e)
            }
        })
        .then(objectWithToken => {
            localStorage.setItem('token', objectWithToken.token);
        })
        .catch(err => { console.log('Что-то не так с авторизацией', err) })
}

export const login = (jwtToken) => {
    return fetch(
        `${URL}/users/me`,
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${jwtToken}`
            }
        }
    )
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
        })
        .then(res => {
            return res;
        })
        .catch(err => { console.log('Не залогинился', err) })
}
