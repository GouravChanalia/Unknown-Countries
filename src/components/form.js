import React from 'react'

const Form = ({label, handleChange, value}) => {
    return (
        <>
            <form style={{display:'flex',height:'5%'}}>
                <label style={{flexBasis:'20%',alignSelf:'center'}}>{`${label}: `}</label>
                <input style={{flexBasis:'60%',outline:'none'}} type="text" onChange={handleChange} value={value} placeholder='Type Here...'/>
            </form>
        </>
    )
}


export default React.memo(Form)