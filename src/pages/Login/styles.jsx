import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 70vh;

    h1 {
        color: #ccc;
        margin-bottom: 15px;
    }

    p {
        color: #280659;
        font-size: 19px;
        margin-bottom: 15px;
    }

    a {
        text-decoration: none;
    }

    @media(max-width: 370px) {
        p {
            font-size: 16px;
        }
    }

    @media(max-width: 305px) {
        p {
            font-size: 13px;
        }
    }
`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;

    .typeInput {
        margin-bottom: 10px;
        margin-top: 10px;
        color: #A67EF3;
        font-size: 18px;
    }

    .inputBox {
        width: 250px;
        height: 35px;
        border: 1px solid #A67EF3;
        border-radius: 18px;
        padding-left: 10px;
        color: #7548b8;
    }

    .inputBox::placeholder {
        color: #7548b8;
        box-shadow: none;
        outline: none;
        border-color: transparent;
    }

`

export const TypeInput = styled.div`
        margin-bottom: 10px;
        margin-top: 10px;
        color: #A67EF3;
        font-size: 18px;

        .inputBox {
        width: 250px;
        height: 35px;
        border: 1px solid #A67EF3;
        border-radius: 18px;
        padding-left: 10px;
        color: #7548b8;
    }

    .inputBox::placeholder {
        color: #7548b8;
        box-shadow: none;
        outline: none;
        border-color: transparent;
    }

`

export const AreaBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;

    .btnEnter {
        width: 90px;
        height: 30px;
        border-radius: 15px;
        border: none;
        cursor: pointer;
        background-color: #6638a6;
        color: white;
        letter-spacing: 1px;
        margin-bottom: 15px;
    }
`