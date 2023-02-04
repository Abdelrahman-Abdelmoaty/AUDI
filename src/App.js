import './App.css';
import Header from './components/Header';
import Section_1 from './components/Section_1';
import Section_2 from './components/Section_2';
import Section_3 from './components/Section_3';
import Section_4 from './components/Section_4';
import Section_5 from './components/Section_5';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Section_1 />
      <Section_3 />
      <Section_2 />
      <Section_4 />
      <Section_5 />
      <footer>
        <a target={"_blank"} href='https://www.facebook.com/abdelrhman.abdelmoaty.1/'>
          Abdelrhman Abdelmoaty &#169; 2023  	
        </a>
      </footer>
    </div>
  );
}

export default App;
