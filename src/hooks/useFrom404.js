import React, { useEffect } from 'react'

const useFrom404 = (from404) => {
    useEffect(()=>{
        if(from404){
           if( window.location.href.includes('/ar')){
            // alert('en')
           }
        }
    },[])
  
}

export default useFrom404
