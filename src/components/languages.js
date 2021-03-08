import React from 'react'


const Languages = ({country}) =>{
    return (
        <ul>
        {
            country.languages.map( value => <li key={value.name}>{value.name}</li> )
        }
        </ul>
    )
}


export default React.memo(Languages)