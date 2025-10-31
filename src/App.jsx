
import Hero from './components/Hero.jsx'
import Navbar from './components/NavBar.jsx';
import About from './components/about.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>

      <h1 className='text-blue-500'>Hello, World!</h1>
    </div>
  );
};

export default App;
