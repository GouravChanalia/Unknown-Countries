import React from 'react'
import Country from './country'


const Countries = ({data, value}) => {

    console.log(data);

    if(data.length !== 0 && value !== '' ){
        
        return <div style={{overflow : 'scroll', height : '80%', width:'90%'}}>{data.map( country => {
            return  <Country country={country} key={country.name} />
        })}
        </div>
    }
    else{
        if( value === '' )
        return <h4 style={{ color : 'yellow' }} >So Many Countries You Don't Even Know Exist. Start Typing and Explore</h4>
        else
        return <h3 style={{ color : 'red' }} >Country Not Found!!!</h3>
    }
}

export default React.memo(Countries)