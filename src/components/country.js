import React from 'react'
import Languages from './languages'
import './style.css'

const Country = ({country}) => {

    return  <div>
                <h1>{country.name}</h1>
                <p>{`Capital: ${country.capital}`}</p>
                <p>{`Population: ${country.population}`}</p>
                <h3>Languages</h3>
                <Languages country={country} />
                <img src={country.flag} alt="country_flag" style={{width:'auto', height:'200px', objectFit:'scale-down'}}/>
                <hr/>
            </div>
}

export default React.memo(Country)