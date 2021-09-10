import logo from '../assets/img/logo.png';
import '../assets/css/App.css';

const Tugas9 = () =>{
   return(
    <>
        <div className="container">
        <div className="header">
            <img className="logo" src={logo} />
        </div>
        <div className="judul">
            <h3>THINGS TO DO</h3>
            <span>During Bootcamp In Jabarcodingcamp</span>
        </div> 
        <div className="body">
            <form action="#">
            < Checkbox name='git' value='git' text="Belajar Git & CU" />
            < Checkbox name='html' value='html' text="Belajar HTML & CSS" />
            < Checkbox name='javascript' value='javascript' text="Belajar Javascript" />
            < Checkbox name='reactjs_dasar' value='reactjs_dasar' text="Belajar ReactJS Dasar" />
            < Checkbox name='reactjs_advance' value='reactjs_advance' text="Belajar ReactJS Advance" />
            <input type="submit" value="Send" className="button"/>
            </form>
        </div>
        </div>  
    </>
   ); 
}

export default Tugas9;

const Checkbox = (props) =>{
    return <p><input type='checkbox' name={props.name} value={props.value} />{props.text}</p>
}
  