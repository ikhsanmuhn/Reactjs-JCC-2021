import Tugas9 from '../Tugas-9/tugas9.js';
import Tugas10 from '../Tugas-10/tugas10.js';
import Tugas11 from '../Tugas-11/tugas11.js';
import Tugas12 from '../Tugas-12/tugas12.js';
import Mahasiswa from '../Tugas-13/mahasiswa.js';
import MahasiswaList2 from './MahasiswaList2.js';
import { MahasiswaProvider } from '../Tugas-13/MahasiswaContext.js';
import MahasiswaForm2 from './MahasiswaForm2.js';
import { ThemeProvider } from './ThemeColor.js';
import Nav from './Nav.js';
import '../assets/css/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom"


function NavTugas9() {
  return <Tugas9 />;
}

function NavTugas10() {
  return <Tugas10 />;
}

function NavTugas11() {
  return <Tugas11 />;
}

function NavTugas12() {
    return <Tugas12 />;
}
function NavTugas13() {
    return <Mahasiswa />;
}
function NavTugas14() {
    return (
        <MahasiswaProvider>
            <MahasiswaList2/>
        </MahasiswaProvider>
    )
    
}
function Form14() {
    return (  
        <MahasiswaProvider>
            <MahasiswaForm2/>
        </MahasiswaProvider>
    )
}

const Routes = () => {
  return (
    <>
      <Router>
          <ThemeProvider>
            <div>
            <Nav />
            <Switch>
                <Route path="/" exact component={NavTugas9}/>
                <Route path="/tugas10" exact component={NavTugas10}/>
                <Route path="/tugas11" exact component={NavTugas11}/>
                <Route path="/tugas12" exact component={NavTugas12}/>
                <Route path="/tugas13" exact component={NavTugas13}/>
                <Route path="/tugas14" exact component={NavTugas14}/>
                <Route path="/tugas14/create" exact component={Form14}/>
                <Route path="/tugas14/:slug" exact component={Form14}/>
            </Switch>  
            </div>
          </ThemeProvider>    
      </Router>
    </>
  );
}

export default Routes;
