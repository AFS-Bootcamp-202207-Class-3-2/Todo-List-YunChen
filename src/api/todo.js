import request from '../utils/axios.js'
export default {
    getToDo() {
        return request({
            url: `/api/todo2`,
            method: 'get'
        })
    },addToDo(data) {
        return request({
            url: `/api/todo2`,
            method: 'post',
            data
        })
    },deleteToDo(todoId) {
        return request({
            url: `/api/todo2/${todoId}`,
            method: 'delete'
        })
    },updateToDo(todoId,data) {
        return request({
            url: `/api/todo2/${todoId}`,
            method: 'put',
            data:data
        })
    },getToDoById(todoId) {
        return request({
            url: `/api/todo2/${todoId}`,
            method: 'get',
        })
    }
}
