import NavBar from './NavBar';
import Weather from './Weather';
const defaults = {
  icon: 'FOG',
  color: '#C70039',
  size: 123,
  animate: true
};
function App() {
  return (
    <>
    <NavBar/>
    <Weather/>
    </>
  )
}

export default App
