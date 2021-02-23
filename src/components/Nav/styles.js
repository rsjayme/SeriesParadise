import styled from 'styled-components';

export const NavStyled = styled.nav`
  background: #282828;
  display: flex;
  padding: 1rem 14rem;
  align-items: center;
  justify-content: space-between;

  .img-container {
    img {
      width: 160px;
      height: 62px;
      cursor: pointer;
    }
  }

  form {
    background: #424242;
    border-radius: 10px;
    padding: 0.13rem 0.1rem;
    display: flex;

    align-items: center;
    justify-content: center;
    &:focus {
      border: 2px solid #f68383;
    }
    input {
      background: #424242;
      border: none;
      color: #fff;
      width: 100%;
      font-size: 1.2rem;
      margin-left: 1rem;
      &:focus {
        outline: none;
      }
    }
  }

  button {
    margin-left: 1rem;
    align-self: right;
    color: #282828;
    padding: 0.6rem 1.8rem;
    background: #f68383;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.8s ease;

    &:hover {
      background: #a85b5b;
    }
  }

  ul {
    list-style: none;
    display: flex;
    padding-left: 4rem;
    justify-content: start;
    width: 100%;

    li {
      & + li {
        margin-left: 2rem;
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 1rem 1rem;
    flex-wrap: wrap;
    justify-content: center;
    img {
      margin: 1rem;
      justify-self: start;
      padding-right: 1rem;
    }
    ul {
      display: none;
    }
    form {
      margin: 1rem;
      flex: 0 1 20rem;
    }
  }
`;
