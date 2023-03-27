import {Outlet} from 'react-router-dom'

function Posts() {
    return (
        <div className="Posts">
            <p>These route paths are all post related</p>
            <Outlet/>
        </div>
    )
}

export default Posts