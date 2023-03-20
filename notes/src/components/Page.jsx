import React from 'react'
import { Main,
Content,
NewNote,
GroupNotes, } from './Page.style.jsx'
import Notes from './Notes.jsx';

import { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios'


function Page() {

    const [notesList, useNotesList] = useState([])
    const [att, useAtt] = useState([])

    const {register, handleSubmit, formState:{erros} } = useForm();

    const onSubmit = data => {
        useAtt(data)
        axios.post("http://localhost:3000/post", data)

    }


    useEffect(() => {
        axios.get("http://localhost:3000/get")
        .then((response) => {
            useNotesList(response.data)
            return notesList
            
        })
        .catch((error) => {
            console.error(error)
        })
        
    }, [att])


  return (
    <Main>
        <Content>
            <NewNote>
                <h1>New Note</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea name="title" id="" cols="30" rows="1" className='newTitle' {...register("title")}></textarea>
                    <textarea name="text" id="" cols="30" rows="8" className='newText' {...register("text")}></textarea>
                    <button type='submit'>send</button>
                </form>
                
            </NewNote>

            <GroupNotes>
                {notesList.map((note, key) => {
                    if(key<=5){
                        return <Notes title={note.title} text={note.text} id={note._id}/>
                    }
                    
                   
                })}
                
               
            </GroupNotes>
        </Content>
    </Main>
  )
}

export default Page