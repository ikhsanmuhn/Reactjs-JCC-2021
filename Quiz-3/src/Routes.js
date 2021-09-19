import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom"
import About from "./About/About.js";
import Home from "./Home/Home.js";
import MobileList from "./Mobile/MobileList.js";
import MobileForm from "./Mobile/MobileForm.js";
import Nav from "./Nav"
import { MobileProvider } from "./Context/MobileContext.js";
import MobileSearch from "./Mobile/MobileSearch.js";


function HomeRoutes() {
    return <Home />;
}

function AboutRoutes(){
    return <About/>
}
function MobileListRoutes(){
    return(
        <MobileProvider>
            <MobileList/>
        </MobileProvider>
    ) 
}
function MobileFormRoutes(){
    return (
        <MobileProvider>
            <MobileForm/>
        </MobileProvider>
    )
}
function SearchRoutes(){
    return (
        <MobileProvider>
            <MobileSearch/>
        </MobileProvider>
    )
}

const Routes = () =>{
    return(
        <>
           <Router>
                <Nav />
                <Switch>
                    <Route path="/" exact component={HomeRoutes}/>
                    <Route path="/mobile-list" exact component={MobileListRoutes}/>
                    <Route path="/mobile-form" exact component={MobileFormRoutes}/>
                    <Route path="/mobile-form/edit/:id" exact component={MobileFormRoutes}/>
                    <Route path="/about" exact component={AboutRoutes}/>
                    <Route path="/search/:valueOfSearch" exact component={SearchRoutes}/>
                </Switch>  
          </Router>
        </>
    )
}

export default Routes