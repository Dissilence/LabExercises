import { Routes, Route } from "react-router-dom"
import Login from "../components/Login"
import About from "../pages/About"
import Dashboard, {DashboardMessages, DashboardTasks} from "../pages/Dashboard"
import PageNotFound from "../pages/PageNotFound"
import StudentDetails from "../components/StudentDetails"
import Students from "../pages/Students"
import StudentList from "../components/StudentList"
import PostList from '../components/Postlist'
import Posts from '../Pages/Posts'
import PostDetails from '../components/PostDetails'
import LoginMUI from '../components/LoginMUI'
import SocialMediaForm from "../components/SocialMediaForm"
import SocialPage from "../Pages/SocialPage"
import SocialMediaList from "../components/SocialMediaList"
import SocialMediaPost from "../components/SocialMediaPost"

//special component containing all the possible routes for this app
//any props passed into AppRoutes will also be passed onto child components using {...props}
function AppRoutes(props) {

    return (

        // see https://reactrouter.com/en/main/components/routes for more info
        <Routes>
            {/* nested routes can be used for URLs like /home/tasks or where the parent component needs to render the children */}
            <Route exact path='/' element={<Dashboard {...props} />} >
                <Route path="messages" element={<DashboardMessages />} />
                <Route path="tasks" element={<DashboardTasks />} />
            </Route>

            <Route path='/about' element={<About {...props} />} />
            
            <Route path='/login' element={<LoginMUI {...props} />} />

            <Route path='/posts' element={<Posts {...props} />}>
                <Route index element={<PostList />} />
                <Route path=":postid" element={<PostDetails />}/>
            </Route> 

            <Route path='/socialpage' element={<SocialPage/>} />

            <Route path='/students' element={<StudentList {...props} />}>
                <Route index element={<StudentList />} />
                <Route path=":studentid" element={<StudentDetails />}/>
            </Route> 

            
            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />            
        </Routes>
    )
}

//split up the components we have created so far and make different pages for them

export default AppRoutes