import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { SerieStyled } from './styles';
import SeasonCard from '../../components/SeasonCard';

import api from '../../utils/api';
const Serie = () => {
  const { id } = useParams();
  const { season_id } = useParams();
  const [serieInfo, setSerieInfo] = useState(null);
  useEffect(() => {
    api
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_SERIE_API}&language=pt-BR`,
      )
      .then((data) => {
        const dataFiltered = data.data.seasons.filter(
          (season) => season.name !== 'Especiais',
        );
        data.data.seasons = dataFiltered;
        setSerieInfo(data.data);
      });
  }, [id, season_id]);
  return (
    serieInfo && (
      <SerieStyled>
        <h1>{serieInfo.original_name}</h1>

        {serieInfo.seasons.map((season) => (
          <SeasonCard
            key={season.id}
            airDate={season.air_date}
            episodes={season.episode_count}
            title={season.name}
            img={season.poster_path}
            description={season.overview}
            season={season.season_number}
          >
            <h1>{id}</h1>
          </SeasonCard>
        ))}
      </SerieStyled>
    )
  );
};

export default Serie;
