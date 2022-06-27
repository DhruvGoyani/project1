import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function ListAppointment(props) {
  let history = useHistory();
  let [tabledata , settabledata] = useState([]);

  

  let handledelete = (id) => {
      // console.log(id);
      

    let locldata =   JSON.parse(localStorage.getItem("users" , id))
    
          // console.log(locldata);
 
    let fdata = locldata.filter( (d) =>  d.id !== id)
    console.log(fdata);
  

   let ldata =  localStorage.setItem("users" , JSON.stringify(fdata))
    console.log(ldata);
   
    loadData();

  }

  const loadData =() => {
    let localdata = JSON.parse(localStorage.getItem("users"))

    if(localdata !== null){
      settabledata(localdata);
    }
  }

  const handleedit = (id) => {
    console.log(id);

    history.push("/appointment" )

  }


  useEffect(
    () => {
     loadData()
    }, 
    []
   )

   

    return (
        <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title text-center">
            <h2>Make an Appointment</h2>
            <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
              blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
              Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
          </div>
          <div className='row'>
            <div className='col-6 text-center'>
              <NavLink to={"/Appointment"} className= "navlink scrollto appointment-btn mb-5"><span className="d-none d-md-inline">Booked Appointment</span></NavLink>
            </div>
            <div className='col-6 text-center'>
              <NavLink to={"/Listappointment"} className= "navlink scrollto appointment-btn"><span className="d-none d-md-inline">List Appointment</span></NavLink>
            </div>
          </div>
          <div>
            {
              tabledata.map((d , i) => {
                return(
                  <>
                    <h2>{d.name}</h2>

                    <button onClick={() => handledelete(d.id)}>delete</button>
                    <button onClick={() => handleedit(d.id)}>Edit</button>
                  </>
                )
              })
            }
          </div>
        </div>
      </section>
    );
}

export default ListAppointment;