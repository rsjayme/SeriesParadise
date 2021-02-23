import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import EpisodeCard from '../../components/EpisodeCard';
import { Season } from './styles';

import api from '../../utils/api';

const Episodes = () => {
  const { id, seasonId } = useParams();
  const [seasonInfo, setSeasonInfo] = useState(null);
  useEffect(() => {
    api
      .get(
        `https://api.themoviedb.org/3/tv/${id}/season/${seasonId}?api_key=${process.env.REACT_APP_SERIE_API}&language=pt-BR`,
      )
      .then((data) => {
        setSeasonInfo(data.data);
      });
  }, [id, seasonId]);

  return (
    seasonInfo && (
      <Season>
        <h1>{seasonInfo.name}</h1>
        <h4>Episódios</h4>

        {seasonInfo.episodes.map((episode) => (
          <EpisodeCard
            key={episode.id}
            airDate={episode.air_date}
            episodes={episode.episode_count}
            title={episode.name}
            img={seasonInfo.poster_path}
            description={episode.overview}
            season={episode.season_number}
            voteAverage={episode.vote_average}
            episodeNumber={episode.episode_number}
          >
            <h1>{id}</h1>
          </EpisodeCard>
        ))}
      </Season>
    )
  );
};

export default Episodes;
