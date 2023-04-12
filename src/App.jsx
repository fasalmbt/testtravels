import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Plan from './Components/Plan/Plan';
import Search from './Components/Search/Search';
import Value from './Components/Value/Value';
import './index.css';

function App() {

  return (
    <div className="m-auto bg-white">
      <Navbar />
      <Search />
      <Plan />
      <Value />
      <Footer />
    </div>
  )
}

export default App
