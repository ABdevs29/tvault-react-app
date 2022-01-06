import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

function VaultPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    let result = "";
    for(var pair of queryParams.entries()) {
        result = result + pair[0]+ ' = '+ pair[1] +"\n";
        console.log(result)
     }

    return (
        <div className='vault-page-container'>
            <h1 className='component-headers'>Vault App Roles</h1>
            <h1 className='component-headers'>{result}</h1>
            {/* <h1 className='component-headers'>{}</h1> */}

        </div>
    )
}

export default VaultPage
