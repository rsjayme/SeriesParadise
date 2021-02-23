import { useState, useEffect } from 'react';
import api from '../../utils/api';
import SerieCard from '../../components/SerieCard';
import { CardContainer, MainStyled } from './styles';

const Main = () => {
  const [recommended, setRecommended] = useState();

  useEffect(() => {
    api
      .get(
        `/tv/popular?api_key=${process.env.REACT_APP_SERIE_API}&language=pt-BR&page=1`,
      )
      .then((data) => {
        const newArray = data.data.results.slice(0, 12);
        data.data.results = newArray;
        setRecommended(data.data);
      });
  }, []);
  if (recommended) {
    return (
      <MainStyled>
        <h1>Trending</h1>
        <CardContainer>
          {recommended.results.map((data) => (
            <SerieCard
              key={data.id}
              id={data.id}
              title={data.original_name}
              description={data.overview}
              img={data.poster_path}
              voteAverage={data.vote_average}
            />
          ))}
        </CardContainer>
      </MainStyled>
    );
  } else return null;
};

export default Main;
