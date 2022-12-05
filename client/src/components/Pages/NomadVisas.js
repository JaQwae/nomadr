import React, {useState} from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import {QUERY_COUNTRY} from '../../utils/queries';
// import {QUERY_INCOME} from '../../utils/queries';
import { useQuery } from '@apollo/client';
import '../Styles/Visa.css'

const Visas = () => {

  const [countrySearch, setCountrySearch] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setCountrySearch(e.target.value);
  };

  const handleTextBoxClick = (e) => {
    if (!countrySearch) {
      setErrorMessage('Please enter a location')
      return;
    }
  }

  const clearErrorMessage = (e) => {
    setErrorMessage('');
    return
  }

  const handleFormSubmit = (e) => {
    if (!countrySearch) {
      setErrorMessage('Please enter a location')
      return;
    }

    alert('Search will go to next step')
  }




  function DisplayCountryData() {
    const { data, loading, error } = useQuery(QUERY_COUNTRY);

    if (loading) {
      return <h3> One Sec! Fetching Data..</h3>
    };

    if (error) {
      console.log('Could not find' + error)
    };
    
    if (data) {
      console.log(data);
    }
  }

  // function DisplayIncomeData() {
  //   const { data, loading, error } = useQuery(QUERY_INCOME);

  //   if (loading) {
  //     return <h3> One Sec! Fetching Data..</h3>
  //   };

  //   if (error) {
  //     console.log('Could not find' + error)
  //   };

  //   console.log(data);
  // }

  DisplayCountryData();
  // DisplayIncomeData();

  // const  {data} = useQuery(QUERY_COUNTRY);
  // const {datas} = useQuery(QUERY_INCOME);

  // convert to use state
  // const country = data?.Country || [];
  // const income = datas?.Income || []

  // const location = useLocation();
  // const navigate = useNavigate();

  return (
    <div className="w-100 mt-auto bg-secondary p-4 visa-page">
      <h1 className='visa-page-title'>Visa Spot</h1>
      <div >
        <form className='visa-form'>
          <input
            className='visa-search-box'
            type="text"
            placeholder="Enter A Country"
            onChange={handleChange}
            onBlur={handleTextBoxClick}
            onClick = {clearErrorMessage}
            value={countrySearch} 
          />

        <button type="button" className="visa-submit-button" onClick={handleFormSubmit}>Search</button>
                  {errorMessage && (
                      <div>
                          <p className="visa-error-text">{errorMessage}</p>
                      </div>
                  )}
        </form>
      </div>




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
