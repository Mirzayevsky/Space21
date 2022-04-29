import './App.css';
import Pages from "./MainPage/Pages";
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
      <BrowserRouter>
      <Pages/>
      </BrowserRouter>
  );
}
export default App;
