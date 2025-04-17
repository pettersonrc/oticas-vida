import estilos from './SecaoSobre.module.css'
import Image from 'next/image'
import Loja from '../../../public/loja.png'
import Atendimento from '../../../public/atendimento.png'

export default function SecaoSobre() {
    return (
        <div className={estilos.container_secao_sobre}>
            <div className={estilos.container_largura}>
                <div className={estilos.container_paragrafo}>
                    <h3>QUEM SOMOS NÓS?</h3>
                    <p>
                        Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou
                        suas atividades focadas no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade
                        e preço baixo.
                    </p>
                    
                </div>
                <div className={estilos.cards}>
                    <div className={estilos.card_conteudo}>
                        <Image src={Loja} className={estilos.imagem_conteudo}></Image>
                    </div>
                    <div className={estilos.card_conteudo}>
                        <h4>NOSSA FILIAIS</h4>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className={estilos.card_conteudo}>
                        <h4>ATENDIMENTO FLEXÍVEL</h4>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    <div className={estilos.card_conteudo}>
                        <Image src={Atendimento} className={estilos.imagem_conteudo}></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}