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
}
// const datas = {
//     url: 'https://auth.nomoreparties.co/',
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: {
//         "password": "somepassword",
//         "email": "email@yandex.ru"
//     }
// }

// export const auth = Auth(datas);