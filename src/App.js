import React from 'react'
// eslint-disable-next-line 
import {useState, useEffect} from 'react';
// eslint-disable-next-line 
import axios from 'axios'

import Form from './components/form'

import Countries from './components/countries'

const style = {
  width : '50%',
  margin : '1em auto',
  backgroundImage : 'linear-gradient(to right bottom, darkgrey, tomato)',
  height : '35em',
  padding : '2em'
}


const App = () => {

  const [input, setInput] = useState('')
  // eslint-disable-next-line 
  const [countries, setCountries] = useState([])
  // eslint-disable-next-line 
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {

    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then( ({data}) => {
      setCountries(data)
      console.log(data);
    })

  },[])

  const handleFilter = value => {
    let exp = new RegExp(value,'i')
    setFilteredData(countries.filter( value => exp.test(value.name) || exp.test(value.aplha3Code) || exp.test(value.cioc)))
  }

  const handleChange = ({target}) => {
    setInput(target.value)
    handleFilter(target.value);
  }

  return (
    <div style={style}>
      <h1 style={{textAlign:'center',marginTop:'0'}}>Find The Country</h1>
      <Form label='Type Here' handleChange={handleChange} value={input} />
      <Countries data={filteredData} value={input} />
    </div>
  )

}

export default React.memo(App);
