import { useParams } from 'react-router-dom';
import styles from './Receita.module.css';
import { receitasLsit } from '../../util/receitas';
import { TfiTimer } from 'react-icons/tfi';
import { FaRegCircle, FaStar } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';


export const Receita = () => {
    const params = useParams();
    //Obtem a receita a partir do id no endpoint
    const receita = receitasLsit.filter(r => {
        if (r.id == params.id) {
            return r
        }
    })[0];
    console.log(receita)

    const img = require(`../../imgs/${receita.imagem}`);

    return (
        <div className={styles.container}>

            <div className={styles.horizontalFlex}>

                <div className={styles.receitaContainer}>
                    <div className={styles.imageContainer}>
                        <img src={img} alt="" className={styles.receitaImage} />
                    </div>
                    <div className={styles.descriptionContainer}>

                        <h1>{receita.titulo}</h1>

                        <div id={styles.tempoPreparo}>
                            <TfiTimer />
                            <span>{receita.tempoPreparo}</span>
                        </div>

                        <h2 id={styles.materiais}>Materiais</h2>

                        <div id={styles.materiaisContainer}>
                            <img src={require("../../imgs/Spoon.png")} alt="" />
                            <div id={styles.materiaisList}>
                                {receita.materiais && (receita.materiais).map(m => {
                                    return (
                                        <span><FaRegCircle id={styles.circleMarker} /> {m}</span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Avaliação do Cliente */}
                <div className={styles.avaliacaoContainer}>
                    <div className={styles.tituloAvaliacao}>
                        <div id={styles.avaliacaoFotoContainer}>
                            <img src={require(`../../imgs/${receita.avaliacao && receita.avaliacao.foto}`)} alt="" />
                        </div>
                        <div>
                            <h2>{receita.avaliacao && receita.avaliacao.nome}</h2>
                            <div>
                                {[1, 2, 3, 4, 5].map(s => {
                                    return (
                                        <FaStar id={styles.avaliacaoStar} />
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                    <div id={styles.avaliacaoTexto}>
                        "{receita.avaliacao && receita.avaliacao.descricao}"
                    </div>
                </div>

            </div>

            {/* Cards dos Mercados */}
            <h1 style={{textAlign: "center", fontSize: "22px"}}>Escolha um estabelcimento para comprar sua receita!</h1>
            <div className={styles.horizontalFlex}>
                {receita.mercados && (receita.mercados).map(m => {
                    return (
                        <div className={styles.mercadoCard}>
                            <div id={styles.diferencialMercado}><FaStar/> {m.diferencial}</div>
                            <div id={styles.mercadoHorizontalFlex}>
                                <div id={styles.mercadoImgContainer}>
                                    <img src={m.imagem && require(`../../imgs/${m.imagem}`)} alt="" />
                                </div>
                                <div id={styles.mercadoVerticalFlex}>
                                    <h1 id={styles.mercadoNome}>{m.nome}</h1>
                                    <span id={styles.distanciaMercado}>{m.distancia}</span>
                                    <span>{m.local}</span>
                                    <span>{m.endereco}</span>
                                </div>
                            </div>
                            <div id={styles.mercadoHorizontalFlex}>
                                <span id={styles.precoMercado}>R$ {m.preco}</span>
                                <button id={styles.addToCartButton}><MdAddShoppingCart size={22}/> Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

}