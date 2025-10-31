
import Hero from './components/Hero.jsx'
import Navbar from './components/NavBar.jsx';
import About from './components/about.jsx';
import StackScroll from "./components/stackscroll";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <StackScroll />

      <h1 className='text-blue-500'>Hello, World!</h1>
    </div>
  );
};

export default App;
