import estilos from './SecaoCapa.module.css'

export default function SecaoCapa() {
    return (
        <div className={estilos.container_secao_capa}>
            <div className={estilos.container_titulo}>
                <p>Preços baixos em</p>
                <h1>Óculos de Grau e de Sol</h1>
                <p>Você só encontra aqui</p>
            </div>
        </div>
    )
}