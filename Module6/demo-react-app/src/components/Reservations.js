//see https://reactjs.org/docs/forms.html for more info
import React from 'react'
import FancyBorder from './Fancyborder'

function Reservation() {

    const [name, setName] = React.useState('')
    const [isGoing, setIsGoing] = React.useState(true)
    const [numGuests, setNumGuests] = React.useState(2)

    const [eventName, setEventName] = React.useState('')

    const today = new Date();
    const formattedToday = today.getFullYear() + '-' + today.toLocaleString("default", { month: "2-digit" }) + '-' + today.getDate()
    const [eventDate, setEventDate] = React.useState(formattedToday)

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`${name} is ${isGoing ? '' : 'not '}attending ${eventName} on ${eventDate} with ${numGuests} guests`)
    }
  
    return (
        
        <form onSubmit={handleSubmit} className="Reservation componentBox">
        <FancyBorder color = "blue">
            <h2>Reservation</h2>
            <label>
                Event Name:
                <input name="eventName" type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
            </label>
            <br/>
            <label>
                Name:
                <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>&nbsp;                
            <label>
                Is going:
                <input name="isGoing" type="checkbox" checked={isGoing} onChange={(e) => setIsGoing(e.target.checked)} />
            </label>
            <br />
            <label>
                Number of guests:
                <input name="numberOfGuests" type="number" value={numGuests} onChange={(e) => setNumGuests(e.target.value)} />
            </label>
            <br />
            <label>
                Event date:
                <input name="eventDate" type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
            </label>            
            <br/>             
            <div><button>Register</button></div>
            </FancyBorder>
        </form>
        
    );

    //try adding an 'event name' field to the form and the alert msg
    //try adding an 'event date' field to the form and the alert msg
}

export default Reservation;