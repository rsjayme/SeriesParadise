import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { NavStyled } from './styles';

const Nav = ({ setSearchText }) => {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState('');

  function buttonHandler(e) {
    e.preventDefault();
    setSearchText(searchInput);
    setSearchInput('');
    history.push('/search');
  }
  return (
    <NavStyled>
      <div className="img-container">
        <img onClick={() => history.push('/')} src={Logo} alt="logo" />
      </div>

      <form onSubmit={buttonHandler} className="input-container">
        <input
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          value={searchInput}
          type="text"
        />
        <button>Search</button>
      </form>
    </NavStyled>
  );
};

export default Nav;
