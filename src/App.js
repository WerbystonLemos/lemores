import './App.css';
import Header from './parts/Header'
import Banner from './parts/Banner'
import Calling from './parts/Calling'
import Processing from './parts/Processings';

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Banner />
      <Calling />
      <Processing />
    </div>
  );
}

export default App;
