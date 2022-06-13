import React, { useState } from "react";
import axios from "axios";


export default function API() {
  const [dog, setDog] = useState([]);
  function DogList() {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then((response) => {
      setDog(response.data.message);
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
      <img className="imagens-dogs" src={dog} alt="fotos-de-doguinhos" />
      </div>
    </div>
  );
}
