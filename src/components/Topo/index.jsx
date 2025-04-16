import Image from 'next/image'
import Logo from "../../../public/logo.png"
import Link from 'next/link'
import estilos from './Topo.module.css'

export default function Topo() {
    return (
        <div className={estilos.container_topo}>
            <div>
                <Image src={Logo} alt='logotipo' className={estilos.oticas_logo}></Image>
                <nav className={estilos.container_links}>
                    <Link href="#" className={estilos.links}>PRODUTOS</Link>
                    <Link href="#" className={estilos.links}>SOBRE</Link>
                    <Link href="#" className={estilos.links}>CONTATO</Link>
                </nav>
            </div>
        </div>
    )
}