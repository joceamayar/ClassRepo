import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App(propd) {
  return (
    <div>
      {props.name}
      <Header />
      <Navbar />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;

//jsx - html that has java scrips 