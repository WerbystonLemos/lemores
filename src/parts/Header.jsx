import logo from '../assets/images/logomarca.png'
import './../assets/css/header.css'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function Header()
{
    return(
        <div className="headerContainer">
            <div className="headerSection">
                <img src={logo} alt="Lemores" width={60}/>
            </div>
                
            <div className="headerSection" id="containerMenu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Pordutos</a></li>
                    <li><a href="#">Portfólio</a></li>
                    <li><a href="#">Planos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>

            <div className="headerSection">
                <button className="btn">
                    Solicite Orçamento
                    <ChevronRightIcon style={{ width: 24, height: 24 }} />
                </button>
            </div>
        </div>
    )
}