import styled from 'styled-components';

export const Card = styled.div`
  background: #181818;
  margin: 3rem auto;
  width: 90%;
  padding: 2rem;
  transition: background-color 0.5s ease;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #272727;
  }

  img {
    margin-top: 1rem;
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
      text-align: center;
      color: #f68383;
    }
    .episodes-text {
      text-align: center;
      font-weight: bold;
    }
    p {
      margin: 1rem 0rem;
      word-spacing: 0.15rem;
      line-height: 1.3rem;
    }
  }

  @media (max-width: 1200px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
