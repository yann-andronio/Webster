import { Fragment } from 'react';
import s from "./App.module.css";
import Home from './Pages/Home/Home';


function App() {
  return (
    <Fragment>
      <div className={`${s.Home}`}>
        <Home />
      </div>
    
    </Fragment>
  );
}

export default App;
