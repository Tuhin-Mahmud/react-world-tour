import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountries, handleVisitFlag }) => {
    // console.log(handleVisitFlag);
    // console.log(handleVisitedCountries);
    const { name, flags, population, area, capital } = country;
    // console.log(country);
    // problem
    // const [visited, setVisited] = useState(false)
    const [visited, setVisited] = useState(false)
    // const handleVisited = () => {
    //     setVisited(!visited)
    // }
    const handleVisited = () => {
        setVisited(!visited)
    }

    // .....
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h4 style={{ color: visited ? 'red' : 'blue' }}>CountryName: {name?.common}</h4>
            <p className={{ color: visited ? '' : '' }}><span>Capital: {capital ? capital[0] : "no capital"}</span></p>
            <img src={flags?.png} alt="" />
            <p style={{ color: visited ? 'green' : 'red' }}>CountryPopulation: {population}</p>
            <p style={{ backgroundColor: visited ? 'blue' : 'gray' }}>CountryAra: {area}</p>
            {/* ....... */}
            <button style={{ color: visited ? 'red' : 'white' }} className={visited ? 'btn-style' : 'non-btn-style'} onClick={() => handleVisitFlag(country.flags.png)}>flag</button>
            <button onClick={() => handleVisitedCountries(country)}>Murk up</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'going'}</button>
            {/* {visited ? 'i have visited this country' : 'i want to visited'} */}
            {visited ? 'i have visited' : 'i want to visited'}
        </div>
    );
};

export default Country;