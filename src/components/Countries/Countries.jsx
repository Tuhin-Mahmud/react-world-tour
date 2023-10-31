import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([])
    const [visitCountries, setVisitCountries] = useState([])
    const [visitFlag, setVisitFlag] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    // visitCountries handle
    const handleVisitedCountries = country => {
        const newVisitedCountry = [...visitCountries, country]
        setVisitCountries(newVisitedCountry)
        console.log(country);
    }
    // visitFlag handle 
    const handleVisitFlag = flag => {
        const newVisitFlag = [...visitFlag, flag]
        setVisitFlag(newVisitFlag)
        console.log(flag);
    }


    return (
        <div>
            <h3>countries: {countries.length}</h3>
            <hr />
            <div>
                {/* visited Flags  */}
                <div className="flag-container">
                    {
                        visitFlag.map((flag, func) => <img src={flag}
                            key={func}
                        ></img>)
                    }
                </div>
                <hr />
                {/* visited countries */}
                <ul>
                    <h5>visited countries: {visitCountries.length}</h5>
                    {
                        visitCountries.map(country => <li>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* countries components */}
            <div className="countries-container">
                {
                    countries.map(country => <Country
                        key={country.cca3} country={country}
                        handleVisitFlag={handleVisitFlag}
                        handleVisitedCountries={handleVisitedCountries}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;