import React from 'react'
import Select from 'react-select'

const options=[
{label:'React', value:'react'},
{label:'Reacts', value:'reacts'},
{label:'JavaScirpt', value:'JavaScirpt'},
{label:'BOOTSTRAP', value:'BOOTSTRAP'},
]

function SelectDropdown({style}){
return <div style={style}>
       <Select options={options}/>
    </div>
}




export default SelectDropdown;