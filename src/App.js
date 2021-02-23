import { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import GlobalStyle from './styles/globalStyles';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

function App() {
  const [searchText, setSearchText] = useState('');
  return (
    <BrowserRouter>
      <div className="App">
        <Nav setSearchText={setSearchText} />
        <Routes searchText={searchText} />
        <Footer />
        <GlobalStyle />
      </div>
    </BrowserRouter>
  );
}

export default App;
