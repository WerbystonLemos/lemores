import './../assets/css/footer.css'
import logomarca from '../assets/images/logomarca.png'

export default function Footer()
{
    return(
        <div className="containerFooter">

            <div className="footerItem">
                <img src={logomarca} alt="Lemores" />
                <p>
                    Transforme ideias em sites profissionais que geram resultados e impulsiona negócios.
                </p>
                <div className="footerItemRS">
                    <span>In</span>
                    <span>fb</span>
                    <span>Ln</span>
                    <span>WA</span>
                </div>
            </div>

            <div className="footerItem">
                <h1>Navegação</h1>
                <ul>
                    <li>Início</li>
                    <li>Serviços</li>
                    <li>Empresa</li>
                    <li>Planos</li>
                    <li>Contato</li>
                </ul>
            </div>
            
            <div className="footerItem">
                <h1>Serviços</h1>
                <ul>
                    <li>Sites Institucionais</li>
                    <li>Landing Page</li>
                    <li>Manutenção de Sites</li>
                    <li>Otimização (SEO)</li>
                </ul>
            </div>
            
            <div className="footerItem">
                <h1>Contato</h1>
                <ul>
                    <li>(88) 98888 8888</li>
                    <li>email@email.com</li>
                    <li>Atendimento comercial: Seg-Sex | 8h às 18h</li>
                    <li>Suporte: 24h por dia</li>
                </ul>
            </div>
            
        </div>
    )
}