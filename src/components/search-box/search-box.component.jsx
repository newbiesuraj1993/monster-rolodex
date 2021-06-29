import React from 'react'

import './search-box.styles.css'

//instead of using return for a function call, this is direct way of returning thr jsx component

export const SearchBox = ({placeholder, handleChange}) => (
        <input  className ='search' type='search' placeholder= {placeholder} onChange={handleChange}/>


);