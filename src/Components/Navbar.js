import React from 'react'

function Navbar(){
    return(
    <header className="main-header">
        <div className='container-logo'>
        <img src="logo192.png" className='img-header'/>
        </div>
        <h1>Valkyrie Clothes</h1>
        <ul className='navbar'>
            <li><button>Inicio</button></li>
            <li><button>Productos</button></li>
            <li><button>Nosotros</button></li>
            <li><button>Contacto</button></li>
        </ul>
    </header>
    )
}


export default Navbar