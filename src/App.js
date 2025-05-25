import logo from './logo.svg';
import './App.css';
import Footerss from './Footer/Footerss';
import TopNav from './Navbar/TopNav';
import Aboutus from './Aboutus/Aboutus';

function App() {
  return (
    <div className="App">
     <TopNav/>
     <Aboutus/>
      <Footerss/>
    </div>
  );
}

export default App;
