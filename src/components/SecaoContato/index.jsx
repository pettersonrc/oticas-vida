import estilos from './SecaoContato.module.css'
import Image from 'next/image'
import Local from '../../../public/local.png'
import Telefone from '../../../public/telefone.png'
import Email from '../../../public/email.png'
import Facebook from '../../../public/fb.png'
import Instagram from '../../../public/ig.png'
import Twitter from '../../../public/tt.png'

export default function SecaoContato() {
    return (
        <div className={estilos.container-secao-contato}>
            <h3>Fale conosco</h3>
            <p>
                Não perca tempo, venha conhecer uma de nossas lojas ou entre 
                em contato através de nossas redes sociais ou da central de atendimento
            </p>

            <div>
                <h3>Contato</h3>
                <div>
                    <Image src={Local}></Image>
                    <span>Nova Iguaçu, RJ</span>
                </div>
                <div>
                    <Image src={Telefone}></Image>
                    <span>(21) 9999-9999</span>
                </div>
                <div>
                    <Image src={Email}></Image>
                    <span>contato@oticavida.com</span>
                </div>
            </div>

            <div>
            <h3>Nossas Redes Sociais</h3>
                <div>
                    <Image src={Facebook}></Image>
                    <span>/OticaVida</span>
                </div>
                <div>
                    <Image src={Instagram}></Image>
                    <span>@oticavidarj</span>
                </div>
                <div>
                    <Image src={Twitter}></Image>
                    <span>@oticavidarj</span>
                </div>
            </div>
        </div>
    )
}