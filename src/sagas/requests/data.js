import axios from 'axios';

export function getRequest(){
    return axios.request({
        method:'get',
        url:'https://jsonplaceholder.typicode.com/todos/1'
    })
}