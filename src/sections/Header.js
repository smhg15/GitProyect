import Headerimg from '../assets/header.jpg'

function Header(){
    return(
        <div className='Header'>
			<img src={Headerimg} alt='header' width='100%' height='500'/>
			<h1>Crypto App</h1>
		</div>

        );
    
    
}

export default Header;