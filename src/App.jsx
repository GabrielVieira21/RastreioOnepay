import onepay from './assets/onepay.png';
import './App.css';
import API from './api';

function App() {
  return (
    <>
      <div>
        <img src={onepay} className='logo' alt='Vite logo' />
      </div>
      <h1>Rastreamento</h1>
      <API />
      <p className='read-the-docs'>Copyright ©2024 OnePay. Todos os direitos reservados. </p>
    </>
  );
}

export default App;
