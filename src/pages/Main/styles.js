import styled from 'styled-components';

export const MainStyled = styled.div`
  h1 {
    padding: 3rem 0 0rem 0;
    text-align: center;
    color: #f68383;
  }
`;

export const CardContainer = styled.div`
  margin: 1rem auto;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  div {
    flex-basis: 33rem;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;
