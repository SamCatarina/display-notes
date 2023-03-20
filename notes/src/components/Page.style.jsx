import styled from 'styled-components'

export const Main = styled.div`
    margin: 0;
    
    width: 100vw;
    height: 100vh;
    background-color: #6161b6;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const Content = styled.div`
    
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

`
export const NewNote = styled.div`
    height: 40%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & h1{
        color: white;
        font-size: 30px;
    }

    & form {
        display: flex;
        flex-direction: column;
        justify-content: none;
        align-items: center;

        & .newTitle{
            color: white;
        font-size: 25px;
        background-color: #7a2fc0;
        width: 200px;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding-left: 5px;
        }
        & .newText {
            width: 200px;
        height: 150px;
    background-color: white;
    margin: 0;
    padding-left: 5px;
    padding-top: 5px;
    font-size: 20px;
        }
        & button {
            width: 90px;
            height: 30px;
            border-radius: 50px;
            background-color: #64d864;
            margin-top: 10px;
            font-size: 20px;
            color: white;
            border: none;
        }
    }

`

export const GroupNotes = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 55%;
    flex-wrap: wrap;

`
