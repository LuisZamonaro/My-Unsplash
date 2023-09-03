import styled from 'styled-components'

export const Container = styled.div`
    padding-inline-start: 4rem;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    

    .notFoundPosts {
        height: 70vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .backToHome {
        color: #00a2ff;
        text-decoration: none;
        font-size: 17px;
    }

    p {
        font-size: 19px;
        margin-bottom: 10px;
    }

    .postList {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 20px;
    }
`

