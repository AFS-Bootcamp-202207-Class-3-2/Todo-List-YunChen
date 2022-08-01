import React from 'react'

export default function TodoItem(props) {
    const {event} =props
  return (
    
    <div>
        <input type="disabled" value={event} />
    </div>
  )
}
