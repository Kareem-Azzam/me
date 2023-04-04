import React from 'react'
import { useNavigate } from "react-router-dom";

const NoMatch = () => {
    const navigate = useNavigate();

    return (
        <div className='flex justify-center items-center h-full'>
            <div className="">
                <h1 className='font-bold text-5xl mb-3 text-center '>Die Seite wurde nicht gefunden.</h1>
                <button onClick={() => { navigate("/") }} className="mt-5  border-b">Zurück</button>
            </div>
        </div>
    )
}

export default NoMatch