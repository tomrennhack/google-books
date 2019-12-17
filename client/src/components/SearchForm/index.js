import React from 'react';

function SearchForm(props) {

    return (
        <div id='search-form' className='text-center'>
            <input className='form' name='title' placeholder='Search for a book' type='text' onChange={props.handleInputChange}></input>
                <button className='btn btn-secondary' onClick={props.handleFormSubmit} type='submit'>Search</button>
        </div>
    )
}

export default SearchForm