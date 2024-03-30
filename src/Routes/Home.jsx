import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/dentists');
        const data = await response.json();
        setDentists(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      {dentists.map(dentist => (
  <Link to={`/dentista/${dentist.id}`} key={dentist.id}>
    <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
  </Link>
))}
      </div>
    </main>
  )
}

export default Home