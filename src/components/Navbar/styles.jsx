import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 4rem;
    margin-top: 15px;

    .myUnsplash {
        font-weight: bold;
        color: black;
        font-size: 22px;
    }

    .devChallenges {
        font-size: 18px;
        color: black;
        margin-right: 20px;
    }

    @media(max-width: 690px) {
      padding-inline: 1rem;
    }

    @media(max-width: 510px) {
      .myUnsplash {
        font-size: 16px;
      }

      .devChallenges {
        font-size: 15px;
      }
    }

    @media(max-width: 430px) {
      padding-inline-start: .5rem;
    }

`
export const RightNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    .btnLogout {
        border: none;
        width: 90px;
        height: 45px;
        border-radius: 18px;
        color: white;
        background-color: #eb3636;
        font-weight: bold;
        cursor: pointer;
        outline: none;
    }

    .btnAdd {
        border: none;
        width: 120px;
        height: 50px;
        border-radius: 15px;
        color: white;
        background-color: #3baa56;
        font-weight: bold;
        cursor: pointer;
        outline: none;
        font-size: 17px;
        
    }

    .btnLogin {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 110px;
      height: 40px;
      background-color: #6638a6;
      border-radius: 20px;
      text-decoration: none;
      color: white;
    }

    .btnRegister {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 110px;
      height: 40px;
      border-radius: 20px;
      text-decoration: none;
      color: white;
      background-color: #fa71c1;
    }

    @media(max-width: 690px) {
      gap: 10px;

      .btnAdd {
        width: 85px;
        height: 35px;
        font-size: 14px;
        margin-left: 5px;
        border-radius: 8px;
      }

      .btnLogout {
        width: 60px;
        height: 35px;
        font-size: 14px;
        border-radius: 8px;
      }
    }

    @media(max-width: 430px) {
      .btnAdd {
        width: 50px;
      }

      .btnLogout {
        width: 45px;
        font-size: 12px;
      }
    }
`

export const LeftNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

    .stylesMenu {
      text-decoration: none;
    }

  .btnSearch {
    border: 1px solid white;
    font-weight: bold;
    color: white;
    background-color: #00a2ff;
    width: 90px;
    height: 42px;
    border-radius: 20px;
    cursor: pointer;
    margin-left: 15px;
  }

  @media(max-width: 910px) {
    .btnSearch {
      display: none;
    }
  }

  @media(max-width: 300px) {
    .stylesMenu {
      display: none;
    }
  }

`;

export const SearchInput = styled.input`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  width: 270px;
  padding-left: 50px; 

  @media(max-width: 800px) {
    width: 150px;
    padding-left: 5px;
  }

  @media(max-width: 690px) {
    padding: 8px;
    width: 200px;
  }

  @media(max-width: 320px) {
    width: 110px;
  }

`;

export const SearchIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 150px;
  transform: translateY(-50%);
  color: #666;
  font-size: 16px;

  .lupa {
    width: 50px;
  }

  @media(max-width: 910px) {
    .lupa {
      display: none;
    }
  }
`;