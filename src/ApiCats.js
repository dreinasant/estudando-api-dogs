import React, { useState } from "react";
import axios from "axios";


export default function API() {
  const [dog, setDog] = useState([]);
  const [aparecerImagem, setAparecerImagens] = useState (false)
  function DogList() {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then((response) => {
      setDog(response.data.message);
      setAparecerImagens(true)
    });
  }

  return (
      <div className="">
      <div className="box">
      <button className="butom"
        onClick={() => {
          DogList();
        }}
      >
        Click here, to make your day even better. &rarr;
      </button>
      </div>
      <div className="box-img">
        <ul>
      <li>{ aparecerImagem && <img className="imagens-dogs" src={dog} alt="fotos-de-doguinhos" /> }</li>
      </ul>
      </div>
    </div>
  );
}
