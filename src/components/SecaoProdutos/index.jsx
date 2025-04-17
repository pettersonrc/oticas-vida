import estilos from './SecaoProdutos.module.css'
import Image from 'next/image'
import OculosGrau from '../../../public/oculos01.png'
import OculosTransition from '../../../public/oculos02.png'
import OculosSol from '../../../public/oculos03.png'
import OculosInfantil from '../../../public/oculos04.png'

export default function SecaoProdutos() {
    return (
        <div className={estilos.container_secao_produtos}>
            <div className={`${estilos.container_largura} ${estilos.container_paragrafo}`}>
                <h3>Nossos produtos</h3>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil</p>
                <p>Todos os nosso preços são acessíveis e contam com a melhor qualidade do mercado</p>
            </div>

            <div className={`${estilos.container_largura} ${estilos.container_oculos}`}>
                <div className={estilos.card_oculos}>
                    <h4>Óculos de grau</h4>
                    <Image src={OculosGrau} className={estilos.oculos_imagem}></Image>
                    <p>R$ 500,00</p>
                </div>
                <div className={estilos.card_oculos}>
                    <h4>Óculos transition</h4>
                    <Image src={OculosTransition} className={estilos.oculos_imagem}></Image>
                    <p>R$ 750,00</p>
                </div>
                <div className={estilos.card_oculos}>
                    <h4>Óculos de sol</h4>
                    <Image src={OculosSol} className={estilos.oculos_imagem}></Image>
                    <p>R$ 700,00</p>
                </div>
                <div className={estilos.card_oculos}>
                    <h4>Óculos infantil</h4>
                    <Image src={OculosInfantil} className={estilos.oculos_imagem}></Image>
                    <p>R$ 500,00</p>
                </div>
            </div>

            <div className={`${estilos.container_largura} ${estilos.container_paragrafo}`}>
                <h3>Todos os nossos produtos incluem:</h3>
                <ul className={estilos.lista_produtos}>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </div>
    )
}