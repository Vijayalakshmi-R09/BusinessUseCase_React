import React from 'react'
import {
    Redirect,
    Route,
  } from 'react-router';
  

export default function PrivateRoute({component:Component,a,...rest}) {
    return (
        <div>
            <h1></h1>
            <div>
            <Route render ={
                (r) =>
                {
                    if(!a)
                    {
                        return(
                        <Redirect 
                        to={{pathname :'./user/complaintrequest',state:{from:r.location}}}
                        />
                        );

                    }

                    return <Component {...r}/>

                }
            } />

    
            </div>
        </div>
    )
}
