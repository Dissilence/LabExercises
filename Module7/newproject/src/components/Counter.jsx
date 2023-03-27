import React, {useState, useEffect, useContext} from 'react'
import { ThemeContext, themes } from '../context/ThemeContext'
import { UserContext } from '../context/UserContext'

function Counter() {

    const [count, setCount] = useState(0)
    const themeContext = useContext(ThemeContext) //use current theme from context
    const {username} = useContext(UserContext) //use current user from context
    const darkMode = themeContext.theme.background === themes.dark.background

    console.log(themeContext)

    useEffect(() => {
        document.title = `You clicked ${count} times`

        return function cleanup() {
            document.title = `My React App`
        }
    }, [count])

    return (
        <div className="Counter componentBox" style={{backgroundColor: themeContext.theme.background, color: themeContext.theme.foreground}}>
            <p>{username ? username : 'You'} clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>Click Me!</button>

            {/* how could we make a reset button to reset the count back to zero? */}
            <button onClick={() => setCount(0)}>Reset Me!</button>
            {/* should probably move this into its own component */}
            <input type="checkbox" 
                value={darkMode} 
                onChange={() => darkMode ? themeContext.setTheme(themes.light) : themeContext.setTheme(themes.dark)}/> Dark Mode?
        </div>
    )
}

export default Counter