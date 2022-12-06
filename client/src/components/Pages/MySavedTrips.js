import React, {useState, useEffect} from 'react';

function MySavedTrips() {
    const [startingPoint, setStartingPoint] = useState('');
    const [destination, setDestination] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        
        if (inputType === 'startingPoint') {
            if (errorMessage) {
                setErrorMessage('')
                }
            setStartingPoint(inputValue);
        } else {
            if (errorMessage) {
                setErrorMessage('')
                }
            setDestination(inputValue);
            }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        if (!startingPoint) {
            setErrorMessage('Where are you flying from?');
            return;
        }

        if (!destination) {
            setErrorMessage('Where are you flying to?');
            return;
        } 
        
        GetIcaoCodes(startingPoint, destination);

    };

    async function GetIcaoCodes(startingPoint, destination) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0bd42419d3mshf7ea2e658b26457p170a0ajsn32d5aab0b5f1',
                'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
            }
        };
        
        // Getting the airport code for current location
        let icaoCurrent = await fetch('https://aerodatabox.p.rapidapi.com/airports/search/term?q='+ startingPoint +'&limit=1', options)
        let icaoCCode = await icaoCurrent.json()
        let IC = icaoCCode.items[0].icao
        // console.log(IC)
    
        // Getting the airport code for destination
        let icaoDestination = await fetch('https://aerodatabox.p.rapidapi.com/airports/search/term?q='+ destination +'&limit=1', options)
        let icaoDCode = await icaoDestination.json()
        let ID = icaoDCode.items[0].icao
        // console.log(ID)

        AirportDistance(IC, ID)

        async function AirportDistance(IC, ID) {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '0bd42419d3mshf7ea2e658b26457p170a0ajsn32d5aab0b5f1',
                    'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
                }
            };
            
            let approxFlightTime = await fetch('https://aerodatabox.p.rapidapi.com/airports/icao/'+ IC +'/distance-time/'+ ID, options)
            let flightTime = await approxFlightTime.json()
            console.log(flightTime.approxFlightTime)
        }

        useEffect(() => {
            GetIcaoCodes() 
        }, [])
    }


    return(
        <div className = 'MySavedTrips'>
            <h1>Switch successful</h1>
            <form className='flight-form'>
                <input
                    className='flight-search-box'
                    name= 'startingPoint'
                    type="text"
                    placeholder="Enter A Country"
                    onChange={handleInputChange}
                    // onBlur={handleTextBoxClick}
                    // onClick = {clearErrorMessage}
                    value={startingPoint} 
                />
                <input
                    className='flight-search-box'
                    name= 'destination'
                    type="text"
                    placeholder="Enter A Country"
                    onChange={handleInputChange}
                    // onBlur={handleTextBoxClick}
                    // onClick = {clearErrorMessage}
                    value={destination} 
                />

                <button type="button" className="flight-submit-button" onClick={handleFormSubmit}>Search</button>
                        {errorMessage && (
                            <div>
                                <p className="visa-error-text">{errorMessage}</p>
                            </div>
                        )}
        </form>
        <div>
            <h2></h2>
        </div>
        </div>
    )
}

export default MySavedTrips;