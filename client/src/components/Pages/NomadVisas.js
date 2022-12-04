import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {QUERY_COUNTRY} from '../../utils/queries';
import {QUERY_INCOME} from '../../utils/queries';
import { useQuery } from '@apollo/client';


const Visas = () => {
  const  {data} = useQuery(QUERY_COUNTRY);
  const {datas} = useQuery(QUERY_INCOME);

  if (data) {
    console.log(data)
  }
  // convert to use state
  const country = data?.Country || [];
  const income = datas?.Income || []

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        country = {country}
        income  = {income}
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
