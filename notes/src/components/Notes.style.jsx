import styled from "styled-components"

export const Note = styled.div`
    width: 180px;
    display: flex;
    flex-direction: column;
    justify-content: none;
    align-items: center;


`

export const Title = styled.div`
    display: flex;

    & h3{
        color: white;
        font-size: 25px;
        background-color: #8e4bcc;
        width: 200px;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding-left: 5px;
    }
    
`
export const Delete = styled.button`
margin-right: 5px;
font-size: 20px;
width: 25px;
height: 25px;
font-weight: bolder;
padding-bottom: 10px;
background-color: transparent;
border: none;
color: #e43b3b;
cursor: pointer;
`

export const Text = styled.div`

    & p {
        width: 200px;
        height: 150px;
    background-color: white;
    margin: 0;
    padding-left: 5px;
    padding-top: 5px;
    font-size: 20px;
    }
    

`