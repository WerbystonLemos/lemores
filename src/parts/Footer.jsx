import logomarca from '../assets/images/logomarcaBCO.png'

export default function Footer()
{
    return(
        <div className="flex items-start justify-between px-5 py-8 flex-col gap-8">

            <div className="flex items-start justify-center flex-col gap-5 py-16">
                <img className='w-48' src={logomarca} alt="Lemores" />
                <p className='text-[18pt] text-white'>
                    Transforme ideias em sites profissionais que geram resultados e impulsiona negócios.
                </p>
                <div className="flex items-center justify-arround text-white w-full gap-5">
                    <span>In</span>
                    <span>fb</span>
                    <span>Ln</span>
                    <span>WA</span>
                </div>
            </div>

            <div className=' flex justify-between items-start gap-8'>
                <div className="flex items-start justify-center flex-col">
                    <h1 className='text-[1.5em] text-white'>Navegação</h1>
                    <ul className='text-white no-underline list-none'>
                        <li className=''>Início</li>
                        <li className=''>Serviços</li>
                        <li className=''>Empresa</li>
                        <li className=''>Planos</li>
                        <li className=''>Contato</li>
                    </ul>
                </div>
                
                <div className="flex items-start justify-center flex-col">
                    <h1 className='text-[1.5em] text-white'>Serviços</h1>
                    <ul className='text-white no-underline list-none'>
                        <li className=''>Sites Institucionais</li>
                        <li className=''>Landing Page</li>
                        <li className=''>Manutenção de Sites</li>
                        <li className=''>Otimização (SEO)</li>
                    </ul>
                </div>
            </div>   
            
            <div className="flex items-center justify-center flex-col">
                <h1 className='text-[1.5em] text-white'>Contato</h1>
                <ul className='text-white no-underline list-none text-center'>
                    <li className=''>(88) 98888 8888</li>
                    <li className=''>email@email.com</li>
                    <li className=''>Atendimento comercial: Seg-Sex | 8h às 18h</li>
                    <li className=''>Suporte: 24h por dia</li>
                </ul>
            </div>

            <div>
                <p className='text-center text-terceary text-sm'>&copy;Todos direitos reservado - Lemores Sistemas 2026</p>
            </div>
            
        </div>
    )
}