import React, { useState } from 'react'
import Login from "bookmark/Login";

function Headers({ title, submitQuery }) {
    const [searchString, setSearchString] = useState("");

    function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchString(event.currentTarget.value);
    }

    function clearInput() {
        setSearchString('');
    }
    
    return (
        <div className='flex items-center justify-between px-2 py-1 mx-1 my-2 bg-gray-100 rounded-xl'>
            <h6 style={{fontSize:'16px'}} className="p-0 m-0 text-grey-darkest ">{title}</h6>
            <form className="mb-2" onSubmit={(e) => submitQuery(e)}>
                <input className="p-0 m-0 mx-1 border rounded" value={searchString} type="text" name="search" id="search" onChange={e => handleSearchInput(e)} />
                <button className="px-3 py-1 mt-5 text-sm text-white bg-yellow-700 rounded-md ri-fingerprint-line" type="submit">Search</button>
                {searchString.length ?
                    <a onClick={clearInput} className="inline-block p-0 px-2 py-1 m-0 mx-1 text-sm font-bold text-yellow-500 align-baseline hover:text-yellow-800" href="#">
                        clear input
                    </a> :
                    null
                }
            </form>
            <Login/>
        </div>
    )
}

export default Headers
