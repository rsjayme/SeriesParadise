import styled from 'styled-components';

export const Card = styled.div`
  background: #181818;
  margin: 3rem auto;
  width: 50%;
  padding: 2rem;
  transition: background-color 0.5s ease;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  cursor: default;
  &:hover {
    background: #272727;
  }

  img {
    align-self: center;
    width: 154px;
    height: 231px;
  }

  .info {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    h3 {
      color: #f68383;
    }
    p {
      margin: 1rem 0rem;
      word-spacing: 0.15rem;
      line-height: 1.3rem;
    }
  }

  @media (max-width: 900px) {
    width: 90%;
    padding: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      margin-top: 1rem;
    }
  }
`;
