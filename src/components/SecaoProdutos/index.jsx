import estilos from './SecaoProdutos.module.css'
import Image from 'next/image'
import OculosGrau from '../../../public/oculos01.png'
import OculosTransition from '../../../public/oculos02.png'
import OculosSol from '../../../public/oculos03.png'
import OculosInfantil from '../../../public/oculos04.png'

export default function SecaoProdutos() {
    return (
        <div className={estilos.container-secao-produtos}>
            <h3>Nossos produtos</h3>
            <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil</p>
            <p>Todos os nosso preços são acessíveis e contam com a melhor qualidade do mercado</p>

            <div>
                <h4>Óculos de grau</h4>
                <Image src={OculosGrau}></Image>
                <p>R$ 500,00</p>
            </div>

            <div>
                <h4>Óculos transition</h4>
                <Image src={OculosTransition}></Image>
                <p>R$ 750,00</p>
            </div>

            <div>
                <h4>Óculos de sol</h4>
                <Image src={OculosSol}></Image>
                <p>R$ 700,00</p>
            </div>

            <div>
                <h4>Óculos infantil</h4>
                <Image src={OculosInfantil}></Image>
                <p>R$ 500,00</p>
            </div>

            <h3>Todos os nossos produtos incluem:</h3>
            <ul>
                <li>Garantia de 1 ano</li>
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade de pagamento</li>
            </ul>
        </div>
    )
}