import styled from 'styled-components'

export const Container = styled.div`
    margin: auto;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;

     .posts-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* Cria três colunas de tamanho igual */
        gap: 20px;
        grid-auto-rows: 1fr;
    }
    
    @media(max-width: 1570px) {
       .posts-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr)
       }
    }

    @media(max-width: 740px) {
        .posts-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr)
        }
    }

`

export const MessageHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 19px;

    @media(max-width: 920px) {
        display: none;
    }

    @media(max-width: 430px) {
        font-size: 15px;
        width: 350px;
    }

    @media(max-width: 300px) {
        width: 275px;
    }
`

