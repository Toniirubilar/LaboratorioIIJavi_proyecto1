import '../App.css'
import logo from '../assets/logo_arbol2.jpeg'

function Navbar () {
    return (

        <>
            
            <div className="navbar">
                <div className="logo">
                <img src= {logo} alt="" />
                </div>
                <ul>
                    <li className='nav'><a href="https://www.google.com">Google</a></li>
                    <li className='nav'><a href="https://www.Youtube.com">Youtube</a></li>
                    <li className='nav'><a href="https://www.linkedin.com">Linkedin</a></li>
                </ul>
            </div>
            
        </>

)
}

export default Navbar