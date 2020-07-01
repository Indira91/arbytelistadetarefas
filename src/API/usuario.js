import axios from 'axios';

export function cadastrar(nome, email) {
    return axios.post('https://arbyte-todo-list-api.herokuapp.com/users',
        {
            fullName: nome,
            email: email
        }
    )
}

export function logar(email) {
    return axios.post('https://arbyte-todo-list-api.herokuapp.com/users/login',
        {
            email: email,

        }
    )
}

export function nomes(nome, email) {
    return axios.post('https://arbyte-todo-list-api.herokuapp.com/users/login',
        {
            email: email,
            fullName: nome

        }
    )
}