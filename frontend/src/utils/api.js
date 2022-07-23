

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;

  }
  
  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
  //Получаем с сервера информацию о пользователе
  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._checkResponse)
  }

  //Загрузка данных для карточек с сервера
  getCardInfo() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._checkResponse)
  }

  //Редактирование профиля на сервере!!!
  postUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about 
      }),
      credentials: 'include',
    })
      .then(this._checkResponse)
  }

  //Добавление данных новой карточки на сервер !!!
  postCardInfo(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      //credentials: 'include',
      body: JSON.stringify({
       link: data.link, 
       name: data.name,
       
    })
    })
      .then(this._checkResponse)
  }

  //Удаление карточки с сервера!!!
  deleteCard(idCard) {
    return fetch(`${this._baseUrl}/cards/${idCard}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._checkResponse)
  }

  //Постановка и снятие лайка на сервере!!!
  addLike(idCard, likes) {
    return fetch(`${this._baseUrl}/cards/${idCard}/likes`, {
      method: 'PUT',
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._checkResponse)
  }

  removeLike(idCard, likes) {
    return fetch(`${this._baseUrl}/cards/${idCard}/likes`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._checkResponse)
  }

  changeStatusLike(id, isLiked) {
    if (isLiked) {
      return this.addLike(id);
    } else {
      return this.removeLike(id);
    }
  }

  changeAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then(this._checkResponse)
  }

}

export const api = new Api({
  baseUrl: `${'https://api.mesto.angalda.nomoredomains.xyz/sign-in' || '//localhost:3001' }`,
  headers: {
    'authorization': `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  },
  credentials: 'include',
});

/* 
export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: '2ee8c513-1056-4e42-b03f-51f9bdfbc616',
    'Content-Type': 'application/json'
  }
})

 baseUrl: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001' }`,

 */
