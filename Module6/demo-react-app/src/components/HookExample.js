import React from "react"

function HookExample () {

    const [hungry, setHungry] = React.useState(false)
    const [mood, setMood] = React.useState('great')

    const getsHungry = () => {
        setHungry( true );
        setMood('hangry')
    }

    return (
        <div className='componentBox'>
        <h2>State Example</h2>

        <p>Mood: {mood}</p>
        <p>Hungry? {String(hungry)}</p>

        <button onClick={() => getsHungry(true)}>Getting hungry . . .</button>
        </div>
    );
}
export default HookExample