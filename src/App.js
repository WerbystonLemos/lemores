import './App.css';
import Header from './parts/Header'
import Banner from './parts/Banner'
import Calling from './parts/Calling'
import Processing from './parts/Processings';
import Ready from './parts/Ready';

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Banner />
      <Calling />
      <Processing />
      <Ready />
    </div>
  );
}

export default App;
