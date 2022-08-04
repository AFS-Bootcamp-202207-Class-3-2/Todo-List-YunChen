import request from '../utils/axios.js'
export default {
    getToDo() {
        return request({
            url: `/todo/all`,
            method: 'get'
        })
    },addToDo(data) {
        return request({
            url: `/todo/addtodo`,
            method: 'post',
            data
        })
    },deleteToDo(todoId) {
        return request({
            url: `/todo/deletetodo/${todoId}`,
            method: 'delete'
        })
    },updateToDo(todoId,data) {
        return request({
            url: `/todo/updatetodo/${todoId}`,
            method: 'put',
            data:data
        })
    },getToDoById(todoId) {
        return request({
            url: `/todo/todo/one/${todoId}`,
            method: 'get',
        })
    }
}
