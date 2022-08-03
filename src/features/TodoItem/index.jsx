import '../../asserts/css/todoitem.css'
import { useDispatch } from 'react-redux'
import { removeTodo, updateDone, updateToDoData } from '../todoListSlice'
import ToDoApi from '../../api/todo.js'
import { Button, Modal } from 'antd';
import { useState } from 'react'
import { EditOutlined } from '@ant-design/icons';
import { Input } from 'antd';
export default function TodoItem(props) {
  const { todo } = props
  const { TextArea } = Input;
  const [visible, setVisible] = useState(false);
  const [oldData, setOldData] = useState(todo.text);
  const dispatch = useDispatch()
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(todo.text);

  const showModal = () => {
    setVisible(true);
    ToDoApi.getToDoById(todo.id).then((res) => {
      setOldData(res.data.text)
    })
  };
  const handleOk = () => {
    setConfirmLoading(true);
    let editToupdate = {
      id: todo.id,
      text: modalText,
      done: todo.done
    }

    ToDoApi.updateToDo(todo.id, editToupdate)
      .then((res) => {
        dispatch(updateToDoData(editToupdate))
        setOldData(res.data.text)
        setModalText(res.data.text)
        setVisible(false);
        setConfirmLoading(false);
      })

  };
  const handleCancel = () => {
    setVisible(false);
  };
  const removeItem = () => {
    ToDoApi.deleteToDo(todo.id).then((res) => {
      dispatch(removeTodo(res.data))
    })

  }
  const onChange = (e) => {
    setModalText(e.target.value)
  };
  let isDoneCss = 'todo-inner-text'
  if (todo.done) {
    isDoneCss = isDoneCss + ' todo-inner-text-done'
  }

  const updateDoneText = () => {
    let updataOjb = {
      id: todo.id,
      text: todo.text,
      done: !todo.done
    }
    ToDoApi.updateToDo(updataOjb.id, updataOjb).then(res => {
      if (res.data.done) {
        isDoneCss = isDoneCss + ' todo-inner-text-done'
      }
      dispatch(updateDone(res.data.id))
    })
  }


  return (
    <div className='todoitem'>
      <div className='todo-text' onClick={updateDoneText}>
        <div className={isDoneCss}>
          <li>{todo.text}</li>
        </div>
      </div>
      <div className='item-btn-group'>
        <div>
          <Button shape="circle"
            size={'small'}
            className='antd-delete-btn' type="primary" danger onClick={removeItem}>
            &times;
          </Button>
        </div>
        <div>
          <Button
            className='antd-edit-btn'
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
            size={'small'}
            onClick={showModal} />
        </div>
      </div>
      <Modal
        title="请输入修改TODO内容"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>Old：{oldData}</p>
        <TextArea
          showCount
          maxLength={18}
          style={{
            height: 120,
          }}
          value={modalText}
          onChange={onChange}
        />
      </Modal>
      <div className='clean-float'></div>
    </div>
  )
}
