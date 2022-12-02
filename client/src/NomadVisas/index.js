import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import { Country } from '../../server/schema/typeDefs';
// import { Income } from '../../server/schema/typeDefs';
//const Income = require ('../../server/schema/typeDefs');
//const Country = require ('../../server/schema/typeDefs');


const Visas = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
      
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
        </h4>
      </div>
    </div>
  );
};

export default Visas;
