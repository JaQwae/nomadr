import { useQuery } from '@apollo/client';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {QUERY_COUNTRY} from '../utils/queries';

import Visa from '../components/Pages/Visa';

const Visas = () => {
  const  {data} = useQuery(QUERY_COUNTRY);


  const country = data?.Country || [];
  

  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        <Visa 
          country = {country}
          />
      {}
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
