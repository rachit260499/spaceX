import React from 'react'

const Card = ({users}) => {
  
    return (
        <div className="app">
               {
        users.map((e,key) => {
          return(
            <div className="container">
            <div className="card">
              <img src={e.links.mission_patch_small} alt="" />
              <h3>{e.mission_name}#{e.flight_number}</h3>
              <p><span>Launch year:</span>{e.launch_year}</p>
              <p><span>Sucessful launch:</span> {String(e.launch_success)}</p>
              <p><span>Sucessful landing:</span> {String(e.rocket.first_stage.cores[0].land_success)}</p>
              </div>
            
          </div>
          )
        })
      }
        </div>
    )
}

export default Card
