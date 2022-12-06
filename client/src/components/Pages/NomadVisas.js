import React, {useState} from 'react';
import {QUERY_COUNTRY} from '../../utils/queries';
import { useLazyQuery } from '@apollo/client';
import '../Styles/Visa.css'
import { useParams } from 'react-router-dom';
// import {QUERY_INCOME} from '../../utils/queries';
// import { useLocation, useNavigate } from 'react-router-dom';
import Visa from '../../components/Pages/Visa'

const Visas = () => {
  const { countryName} = useParams()
  const [countrySearch, setCountrySearch] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [getCountry, {data, loading, error}] = useLazyQuery(QUERY_COUNTRY, {variables: {countryName: countrySearch }});

  
  const countryData = data?.country || {}
  // console.log(countryData)

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!countrySearch) {
      setErrorMessage('Please enter a location')
      return;
    }

    const countryInfo = await getCountry(countrySearch)
    console.log(countryInfo.data.country[0]);
    // return <Visa country = {countryInfo}/>
    // return (
    //   <div>
    //     <p>{countryInfo.data.country[0]}</p>
    //   </div>
    // )
    return countryInfo;
  }

  // console.log(data);

  return (
    <div className="w-100 mt-auto bg-secondary p-4 visa-page">
      <h1 className='visa-page-title'>Visa Spot</h1>
      <div >
        <form className='visa-form' onSubmit={handleFormSubmit}>
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

      
      <div className = "visa-search-return-container">
        <h4 className = 'visa-search-return-title'> Country Visa Requirements!</h4>
        <div className='visa-search-return'>
          <div className = "Program visa-search-return-element">
          Visa Program:
          </div>
          <div className = "Length visa-search-return-element">
            Length of time:
          </div>
          <div className = "MonthlyIncome visa-search-return-element">
            Monthly Income Requirement:
          </div>
          <div className = "Taxation visa-search-return-element">
            Taxation Information:
          </div>
          <div className = "Fees visa-search-return-element">
            Visa Fee's:
          </div>
          <div className = "Clearance visa-search-return-element">
            Clearance:
          </div>
          <div className = "Insurance visa-search-return-element">
            Health Insurance:
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visas;


   // const DisplayCountryData = (countrySearch) => {
  //   const { data, loading, error } = useQuery(QUERY_COUNTRY, {variables: {countryName: countrySearch }})

  //   if (loading) {
  //     return <h3> One Sec! Fetching Data..</h3>
  //   };

  //   if (error) {
  //     console.log('Could not find' + error)
  //   };
    
  //   if (data) {
  //     console.log(data);
  //   }
  // }
  

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

  // DisplayCountryData();
  // DisplayIncomeData();

  // const  {data} = useQuery(QUERY_COUNTRY);
  // const {datas} = useQuery(QUERY_INCOME);

  // convert to use state
  // const country = data?.Country || [];
  // const income = datas?.Income || []

  // const location = useLocation();
  // const navigate = useNavigate();

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