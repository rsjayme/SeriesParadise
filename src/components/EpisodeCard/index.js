import { Card } from './styles';

const SeasonCard = ({
  airDate,
  episodeNumber,
  title,
  img,
  description,
  voteAverage,
}) => {
  let imgUrl = 'https://image.tmdb.org/t/p/w154/';
  let date = new Date(airDate).getFullYear();
  if (!airDate) date = '';
  if (!description) description = 'No description found.';
  if (!img) {
    imgUrl = '';
    img = 'https://via.placeholder.com/154x231?text=No%20Image';
  }

  return (
    <Card>
      <img src={imgUrl + img} alt="" />
      <div className="info">
        <h3>
          {episodeNumber} - {title} ({date})
        </h3>
        <p>{voteAverage}/10</p>
        <p>{description}</p>
      </div>
    </Card>
  );
};

export default SeasonCard;
