import logo from '../assets/images/logomarcaBCO.png'
import './../assets/css/header.css'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function Header()
{
    return(
        <div className="flex items-center justify-between py-4 px-10">
            <div className="w-[180px]">
                <img src={logo} alt="Lemores"/>
            </div>
                
            <div className="headerSection hidden md:flex" id="containerMenu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Pordutos</a></li>
                    <li><a href="#">Portfólio</a></li>
                    <li><a href="#">Planos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>

            <div className="headerSection hidden md:flex">
                <button className="btn">
                    Solicite Orçamento
                    <ChevronRightIcon style={{ width: 24, height: 24 }} />
                </button>
            </div>

            <div className="headerSection md:hidden">
                <button className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </div>
    )
}