import React, { useState, useEffect } from 'react';


// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = ({ match }) => {
  const [dentist, setDentist] = useState(null);
  const dentistId = match.params.id;

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://api.example.com/dentists/${dentistId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch dentist');
        }
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error('Error fetching dentist:', error);
      }
    };

    fetchDentist();
  }, [dentistId]);

  return (
    <>
      <h1>Detail Dentist id {dentistId}</h1>
      {dentist && (
        <div>
          <p>Name: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      )}
    </>
  );
};

export default Detail;