import Dynamic from './components/Dynamic';
import Empty from './components/Empty';

function App() {
  const msg = () => console.log('Hello');
  return (
    <>
      <Empty name='' calculatedValue={6 + 4}>
        sent children
      </Empty>
      <br />
      <Dynamic />
      <button onClick={msg}></button>
      <img src='/img.png' alt='Hello' />
    </>
  );
}

export default App;
