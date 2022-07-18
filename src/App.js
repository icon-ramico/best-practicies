import Dynamic from './components/Dynamic';
import Empty from './components/Empty';

function App() {
  const msg = () => console.log('Hello');
  return (
    <>
      <Empty name='Ali' calculatedValue={6 + 4} Component={Dynamic}>
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
