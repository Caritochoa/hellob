import React from 'react';
import Calendar from 'react-google-calendar-events-list';
import imgcalendar from './assets_d/imgcalendar.jpg';


const Events_g = () => {
    return(  
      <div className = "card text-center">     
      <div classNmae = "overFlow">
      <img src = {imgcalendar} className = "card-img-top" height = "300px" />
      </div>
      <div className= "card-body text-dark">    
            <h4 className = "card-title">check your calendar events</h4>         
         
            <Calendar
                  calendarID="karittochoa@gmail.com"
                  apiKey="AIzaSyCQv0NyIw6brZq0t1pjXT3Ud_jY0rtr5m4">
              
                   {({ loading, events }) =>
                   loading ? <div> Ups! Not loading </div> : <div>{events.map(event  => (
                   <p key = {event.id}>
                   {event.summary}          
                   </p>               
                    ))}
                  </div>}
            </Calendar>
            
    </div> 
    </div> 
    

     )}
export default Events_g