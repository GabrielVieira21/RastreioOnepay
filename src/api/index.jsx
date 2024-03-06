import axios from 'axios';
import { useState } from 'react';
import caminhao from '../assets/caminhao-cor.png';
import agencia from '../assets/agencia-cor.png';

export default function API() {
  const [dado, setDado] = useState([]);
  const [code, setCode] = useState();

  const handleInputChange = event => {
    setCode(event.target.value);
  };

  const click = () => {
    loadAll();
  };

  const loadAll = async () => {
    const url = `https://api.linketrack.com/track/json?user=gabriel.vieira@1pay.com.br&token=65b1b78d47e741653db8e23f81d6a593d96cda29ccf0295d37658fe711d3b181&codigo=${code}`;

    axios
      .get(url)
      .then(response => {
        setDado(response.data.eventos);
      })
      .catch(error => console.log(error));
    console.log(dado);
  };
  console.log(code);
  return (
    <>
      <div>
        <button onClick={click}>Rastreie aqui!</button> <br />
        <input
          value={code}
          type='text'
          placeholder='Dígite seu codígo'
          onChange={handleInputChange}
        />
      </div>
      <div className='rastreio'>
        {dado.map((item, index) => {
          if (index == 0) {
            return (
              <div key={index}>
                <p>{item.status}</p>
                <p>{item.local}</p>
                <p>
                  {item.data} - {item.hora}
                </p>
                {/* <img src={caminhao}></img> */}
                <span className='divisor'></span>
                <br />
              </div>
            );
          } else if (index == 1) {
            return (
              <div key={index}>
                <p>{item.status}</p>
                <p>{item.local}</p>
                <p>
                  {item.data} - {item.hora}
                </p>
                {/* <img src={agencia}></img> */}
                <span className='divisor'></span>
                <br />
              </div>
            );
          } else {
            return (
              <div key={index}>
                <p>{item.status}</p>
                <p>{item.local}</p>
                <p>
                  {item.data} - {item.hora}
                </p>
                <span className='divisor'></span>
                <br />
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
