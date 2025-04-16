import estilos from './SecaoSobre.module.css'
import Image from 'next/image'
import Loja from '../../../public/loja.png'
import Atendimento from '../../../public/atendimento.png'

export default function SecaoSobre() {
    return (
        <div className={estilos.container-secao-sobre}>
            <h3>QUEM SOMOS NÓS?</h3>
            <p>
                Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou 
                suas atividades focadas no atendimento ao público de renda mais baixa, 
                sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade 
                e preço baixo.
            </p>

            <div>
                <Image src={Loja}></Image>
            </div>  

            <div>
                <h4>NOSSA FILIAIS</h4>
                <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
            </div>

            <div>
                <h4>ATENDIMENTO FLEXÍVEL</h4>
                <p>Nossa equipe possui é treinada para te atender</p>
            </div>

            <div>
                <Image src={Atendimento}></Image>
            </div>
        </div>
    )
}