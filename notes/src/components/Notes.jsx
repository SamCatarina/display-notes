import React from 'react'
import {Note, Title, Text, Delete} from './Notes.style.jsx'
import axios from 'axios'

function Notes(props) {

  function remove(id){
    axios.delete(`http://localhost:3000/delete/${id}`);
    return window.location.reload(false)
  }
  return (
    <Note>
    <Title>
    <h3>
        {props.title}
        <Delete onClick={() => remove(props.id)}>
        X
        </Delete>
    </h3>
    
    </Title>
    <Text>
    <p>
        {props.text}
    </p>
    </Text>
</Note>
  )
}

export default Notes