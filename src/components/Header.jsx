import logo from 'media/mundo.png';

const Header =() =>{
    return(
        <header>
        <ul className="navbar">
            <li>
                <img src={logo} alt="imagen" className="logo" />
            </li>
            <li>
                <button className="button mainbutton">Nuevo post</button>
            </li>
            <li><button className="button secondarybutton">Login</button></li>
            <li>
                <div className="buscar">                 
                    <input placeholder="buscar una raza" />
                    <i className="fas fa-search lupa"></i>
                </div>
                </li>
            <li><button className="button mainbutton">Registro</button></li>
        </ul>
    </header>

    )
}

export default Header;