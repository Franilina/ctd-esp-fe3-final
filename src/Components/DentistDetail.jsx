import React from 'react';
import { useParams } from 'react-router-dom';
import DentistDetail from "./DentistDetail";

const DentistDetail = () => {
  const { id } = useParams(); // Obtén el parámetro de la URL

return (
    <div>
    <h2>Detalle del dentista {id}</h2>
      {/* Aquí puedes mostrar los detalles del dentista con el ID específico */}
    </div>
);
};

export default DentistDetail;