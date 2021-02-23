import { Card } from './styles';
import { useHistory } from 'react-router-dom';

const SearchCard = ({ title, description, img, voteAverage, id }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w154/';
  const history = useHistory();
  const clickHandler = () => {
    if (id) history.push(`/serie/${id}`);
  };
  return (
    <Card onClick={clickHandler}>
      <img src={imgUrl + img} alt="serie poster" />
      <div className="info">
        <h2>{title}</h2>
        <p className="vote-text">{voteAverage}/10</p>
        <p>{description}</p>
      </div>
    </Card>
  );
};

export default SearchCard;
