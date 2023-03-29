import {Outlet} from 'react-router-dom'
import SocialMediaPost from '../components/SocialMediaPost'

function SocialPage() {
    return (
        <div className="Posts">
            <p>These route paths are all Social Media related</p>
            <Outlet/>
            <SocialMediaPost/>
        </div>
    )
}

export default SocialPage;