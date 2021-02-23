import { Route, Switch } from 'react-router-dom';
import Main from '../pages/Main';
import SerieDetails from '../pages/SerieDetails';
import Search from '../pages/Search';
import SeasonDetails from '../pages/SeasonDetails';

const Routes = ({ searchText }) => {
  return (
    <Switch>
      <Route path="/search">
        <Search searchText={searchText} />
      </Route>
      <Route path="/" exact component={Main} />
      <Route path="/serie/:id" exact component={SerieDetails} />
      <Route path="/serie/:id/:seasonId" component={SeasonDetails} />
    </Switch>
  );
};

export default Routes;
