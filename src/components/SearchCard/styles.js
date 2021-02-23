import styled from 'styled-components';

export const Card = styled.div`
  background: #181818;
  margin: 3rem auto;
  width: 70%;
  padding: 2rem;
  transition: background-color 0.5s ease;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  img {
    width: 154px;
    height: 231px;
  }
  .info {
    width: 80%;
    align-self: flex-start;
    padding-left: 1rem;
    margin: 0 auto;
    h2 {
      margin-bottom: 1rem;
      color: #f68383;
    }
    p {
      word-spacing: 0.15rem;
      line-height: 1.3rem;
    }
    .vote-text {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
  }

  &:hover {
    background: #272727;
  }

  @media (max-width: 900px) {
    img {
      margin-bottom: 1rem;
    }
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
