import React from "react";
import { Link } from "react-router-dom"; 


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const favCards = JSON.parse(localStorage.getItem('favCards')) || [];
    if (!favCards.some(card => card.id === id)) {
      favCards.push({ id, name, username });
      localStorage.setItem('favCards', JSON.stringify(favCards));
    }
  }

  return (
    <div className="card">
        <Link to={`/dentista/${id}`} className="card-link">
        <h3>{name}</h3>
        <p>@{username}</p>
        <p>ID: {id}</p>
      </Link>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
