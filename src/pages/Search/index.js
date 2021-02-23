import { useEffect, useState } from 'react';
import SearchCard from '../../components/SearchCard';
import api from '../../utils/api';
import { MainStyled } from './styles';

const Main = ({ searchText }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (searchText) {
      api
        .get(
          `/search/tv?api_key=${process.env.REACT_APP_SERIE_API}&language=en-US&page=1&query=${searchText}&include_adult=false&language=pt-BR`,
        )
        .then((data) => {
          const resultsFilter = data.data.results.filter((dataState) => {
            if (dataState.poster_path && dataState.overview) {
              return dataState;
            } else {
              return null;
            }
          });
          data.data.results = resultsFilter;
          setData(data.data);
        });
    }
  }, [searchText]);

  return (
    data && (
      <MainStyled>
        {data.results.map((data) => (
          <SearchCard
            key={data.id}
            id={data.id}
            title={data.original_name}
            description={data.overview}
            img={data.poster_path}
            voteAverage={data.vote_average}
          />
        ))}
      </MainStyled>
    )
  );
};

export default Main;
