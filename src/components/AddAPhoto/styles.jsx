import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 100;
    background-color: white;
    width: 700px;
    height: 435px;
    margin: auto;
    border-radius: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    @media(max-width: 1024px) {
        max-width: 500px;
        height: 380px;
    }   

    @media(max-width: 510px) {
        max-width: 300px;
        height: 360px;
    }   
    
    @media(max-width: 300px) {
        max-width: 250px;
        height: 360px;
    }   

    h2 {
        margin-top: 20px;
        font-weight: 500;
        font-size: 24px;
        line-height: 32.69px;
    }


`

export const InputAreas = styled.div`
    display: flex;
    flex-direction: column;
`

export const LabelArea = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    .inputFunction {
        font-weight: 500;
        font-size: 18px;
        line-height: 19.07px;
        margin-left: 10px;
        margin-bottom: 5px;
    }

    input {
        width: 552.33px;
        height: 55px;
        border-radius: 12px;
        border: 0.015rem solid;
    }

    input::placeholder {
    height: 19px;
    padding: 5px;
    font-weight: 500;
    font-size: 14px;
    line-height: 19.07px;
}

@media(max-width: 1024px) {
        input {
            width: 350px;
            height: 38px;
        }

    }

    @media(max-width: 510px) {
        input {
            width: 250px;
            height: 33px;
        }
    }

    @media(max-width: 300px) {
        input {
            width: 150px;
            height: 28px;
        }

        input::placeholder {
            font-size: 11px;
        }
    }

`

export const RegisterArea = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;

    .btnRegister {
        font-weight: bold;
        border-radius: 20px;
        width: 105px;
        height: 55px;
        background-color: #3baa56;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
    }

    @media(max-width: 1024px) {
       .btnRegister {
            width: 70px;
            height: 35px;
            font-size: 16px;
       }
    }
`

export const BtnCancel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 20px;
    width: 105px;
    height: 55px;
    background-color: #eb3636;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;

    @media(max-width: 1024px) {
        width: 70px;
        height: 40px;
        font-size: 16px;
    }

`

export const Shadow = styled.div`
    margin: auto;
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    opacity: .7;
    width: 100%;
    height: 100vh;
`