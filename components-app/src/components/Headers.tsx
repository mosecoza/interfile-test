import React, { useState } from 'react'

function Headers({ title, submitQuery }) {
    const [searchString, setSearchString] = useState("");

    function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchString(event.currentTarget.value);
    }

    function clearInput() {
        setSearchString('');
    }
    
    return (
        <div className='flex justify-between px-2 py-1 mx-1 my-2 bg-gray-100 align-items-center rounded-xl'>
            <h2 className="p-0 m-0 text-grey-darkest fw-bolder h2">{title}</h2>
            <form className="mb-2" onSubmit={(e) => submitQuery(e)}>
                <input className="p-0 m-0 mx-1 border rounded" value={searchString} type="text" name="search" id="search" onChange={e => handleSearchInput(e)} />
                <button className="m-0 mx-1 bg-yellow-500 rounded" type="submit">Search</button>
                {searchString.length ?
                    <a onClick={clearInput} className="inline-block p-0 px-2 py-1 m-0 mx-1 text-sm font-bold text-yellow-500 align-baseline hover:text-yellow-800" href="#">
                        clear input
                    </a> :
                    null
                }
            </form>
        </div>
    )
}

export default Headers
