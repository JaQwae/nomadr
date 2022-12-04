import React, {useState} from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import {QUERY_COUNTRY} from '../../utils/queries';
// import {QUERY_INCOME} from '../../utils/queries';
// import { useQuery } from '@apollo/client';

const Visas = () => {
  // const [country, setCountry] = useState('');

  // const handleInputChange = (e) => {
  //   // Getting the value and name of the input which triggered the change
  //   const { target } = e;
  //   const inputValue = target.value;

  //   setCountry(inputValue)
  // };

  // const  {data} = useQuery(QUERY_COUNTRY);
  // const {datas} = useQuery(QUERY_INCOME);

  // convert to use state
  // const country = data?.Country || [];
  // const income = datas?.Income || []

  // const location = useLocation();
  // const navigate = useNavigate();

  return (
    <div className="w-100 mt-auto bg-secondary p-4">
      <h1>Visas Page</h1>
      {/* <div className="container text-center mb-5">
        country = {country}
        {/* income  = {income} */}
        {/* {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )} */}
      {/* </div> */}
    </div>
  );
};

export default Visas;
