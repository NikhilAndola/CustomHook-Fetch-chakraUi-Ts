import { Route, Switch } from 'react-router-dom';
import './App.css';
import Albums from './pages/Albums';
import Photos from './pages/Photos';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Albums}/>
      <Route path='/photos' exact component={Photos}/>
    </Switch>
  );
}

export default App;
