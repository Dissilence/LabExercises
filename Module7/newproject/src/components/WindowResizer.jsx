import useToggle from "../hooks/useToggle";
import useWindowResize from "../hooks/useWindowResize";
import useOnlineStatus from '../hooks/useOnlineStatus';
import { useContext } from "react";

function WindowResizer() {

    const [isToggled, setIsToggled] = useToggle();
    const windowSize = useWindowResize();
    const isOnline = useOnlineStatus()

    return (
        <div className="WindowResizer componentBox" >
            <button onClick={setIsToggled}>{isToggled ? 'Toggled' : 'Click to Toggle'}</button>
            <div>{windowSize.width <= 768 ? 'Small Screen Detected' : 'Large Screen Detected'}</div>
            <h3>{isOnline? 'ONLINE' : 'OFFLINE'}</h3>
        </div>
    );
}

export default WindowResizer

//follow the guide at https://react.dev/learn/reusing-logic-with-custom-hooks and implement the useOnlineStatus custom hook
//then make use of it here and display the online status in this component