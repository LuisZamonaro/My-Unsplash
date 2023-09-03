import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;

    h2 {
        margin-top: 15px;
        margin-bottom: 20px;
    }

    h3 {
        margin-bottom: 20px;
    }

    .individualPost {
        border-radius: 15px;
        max-width: 1040px;
        object-fit: cover;
    }

    @media(max-width: 1050px) {
        .individualPost {
            max-width: 800px;
        }
    }

    @media(max-width: 1050px) {
        .individualPost {
            max-width: 700px;
        }
    }

    @media(max-width: 1050px) {
        .individualPost {
            max-width: 510px;
        }
    }

    @media(max-width: 520px) {
        .individualPost {
            width: 350px;
            object-fit: cover;
        }
    }

    @media(max-width: 355px) {
        .individualPost {
            width: 300px;
            object-fit: cover;
        }

        h2 {
            font-size: 19px;
        }
    }

    @media(max-width: 300px) {
        .individualPost {
            width: 270px;
            object-fit: cover;
        }
    }
`