import './../assets/css/banner.css'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'
import devices from './../assets/images/devices.png'

export default function Banner()
{
    return(
        <div className="containerBanner px-10 text-white flex items-center justify-center py-10 gap-4">
            
            <div className="flex items-center justify-start flex-col gap-4">
                
                <p className='text-secondary text-[20pt] md:text-md w-full md:text-left'>AGÊNCIA DE SITES PROFISSIONAIS</p>
                <p className="text-[52pt] md:text-[40pt] leading-none">Transforme ideias em sites que geram <span className='text-secondary font-bold'>resultados</span>.</p>
                <p className="text-[20pt] md:text-md">Sites modernos, rápidos e otimizados para conquistar mais clientes e impulsionar o seu negócio.</p>

                <div className='flex flex-col md:flex-row items-center justify-center md:w-[36vw]'>
                    <button className="btn">
                        <svg width={20} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>
                        Quero meu site
                    </button>

                    <button className="btn">
                        <svg width={20} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                        </svg>
                        Ver portfólio
                    </button>
                </div>

            </div>

            <div className="md:flex hidden">
                <img className='w-full' src={devices} alt="Devices" />
            </div>
        </div>
    )
}