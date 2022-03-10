import AboutMe from './components/AboutMe'
import Event from './components/Event'

function App() {
  return (
    <div>
      <AboutMe age={20} city="Sao Paulo"/>
      <Event />
    </div>
  );
}

export default App;