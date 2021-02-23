import { useHistory, useParams } from 'react-router-dom';
import { Card } from './styles';

const SeasonCard = ({ airDate, episodes, title, img, description, season }) => {
  let imgUrl = 'https://image.tmdb.org/t/p/w154/';
  const { id } = useParams();
  const history = useHistory();
  let date = new Date(airDate).getFullYear();
  if (!airDate) date = '';
  if (!description) description = 'No description found.';
  if (!img) {
    imgUrl = '';
    img = 'https://via.placeholder.com/154x231?text=No%20Image';
  }

  const handleClick = () => {
    history.push(`/serie/${id}/${season}`);
  };

  return (
    <Card onClick={handleClick}>
      <img src={imgUrl + img} alt="" />
      <div className="info">
        <h3>
          {title} ({date})
        </h3>
        <p className="episodes-text">Episodes: {episodes}</p>
        <p>{description}</p>
      </div>
    </Card>
  );
};

export default SeasonCard;
