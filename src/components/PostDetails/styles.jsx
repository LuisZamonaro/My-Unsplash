import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 500px; // está 500 pq é do tamanho do image post, mudar sempre que mudar o image post


    .imagePost {
        width: 100%;
        max-width: 500px;
        height: 500px;
        border-radius: 15px;
        object-fit: cover;
    }

    @media(max-width: 1050px) {

        .imagePost {
            max-width: 350px;
            height: 350px;
        }

        width: 100%;
    }

    @media(max-width: 740px) {
        .imagePost {
            max-width: 500px;
            height: 500px;
        }
    }

    @media(max-width: 510px) {
       .imagePost {
        max-width: 350px;
        height: 350px;
       }
    }
    @media(max-width: 430px) {
       .imagePost {
        max-width: 300px;
        height: 300px;
       }
    }

    @media(max-width: 430px) {
        .imagePost {
            max-width: 275px;
            height: 275px;
        }
    }
`

export const PostCotainer = styled.div`
    position: relative;
    
    &:hover {
        opacity: 0.9;

        .postTitle {
            display: block;
        }

        .btnDelete{
            display: block;
        }
    }

    .postTitle {
        position: absolute;
        bottom: 30px;
        margin-left: 10px;
        color: white;
        display: none;
    }

    .btnDelete {
        display: none;
        position: absolute;
        top: 15px;
        left: 10px;
        border: 1px solid #eb3636;
        background: transparent;
        cursor: pointer;
        color: #eb3636;
        font-weight: bold;
        font-size: 15px;
        width: 63px;
        height: 23px;
        border-radius: 38px;
    }

    @media(max-width: 920px) {
            .btnDelete {
                display: block;
            }
    }
`
