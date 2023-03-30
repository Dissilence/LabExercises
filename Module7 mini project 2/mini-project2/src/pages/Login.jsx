import {Outlet} from 'react-router-dom';
import LoginMUI from '../components/LoginMUI';

function Login() {
    return (
        <div className="Loggingin">
            <p>These route paths are all Login related</p>
            <LoginMUI/>
        </div>
    )
}

export default Login