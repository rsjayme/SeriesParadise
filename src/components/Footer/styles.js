import styled from 'styled-components';

export const FooterStyled = styled.div`
  width: 100%;
  height: 10vh;
  background: #181818;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  a {
    transition: color 0.5s ease;
    svg {
      transition: color 0.5s ease;
    }
  }

  a:hover {
    color: #f68383;
    svg {
      color: #fff;
    }
  }

  & > div {
    width: 50%;
    p {
      align-self: center;
    }
    span {
      color: #f68383;
    }
  }

  svg {
    color: #f68383;
    margin-left: 0.3rem;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;

    li {
      margin: 0rem 0.5rem;
    }
  }

  @media (max-width: 900px) {
    & > div {
      width: 100%;
      text-align: center;
    }
  }
`;
