import { useParams } from 'react-router-dom';
import styles from './Receita.module.css';
import { receitasLsit } from '../../util/receitas';
import logo from '../../imgs/logo.png';
import ForkAndKnife from '../../imgs/ForkAndKnife.svg';
import { TfiTimer } from 'react-icons/tfi';
import { FaCheck, FaRegCircle, FaStar } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import { useEffect, useRef, useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';


export const Receita = () => {
    const params = useParams();
    //Obtem a receita a partir do id no endpoint
    const receita = receitasLsit.filter(r => {
        if (r.id == params.id) {
            return r
        }
    })[0];
    console.log(receita)

    const [curMercado, setCurMercado] = useState([]);
    const ingRef = useRef(null);
    const img = require(`../../imgs/${receita.imagem}`);

    useEffect(() => {

        ingRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end"
        })
    }, [curMercado])




    return (
        <div className={styles.container}>
            
            <div className={styles.header}>
                <img className={styles.ForkAndKnife} src={ForkAndKnife} alt="forkandknife" />
                <img className={styles.logo} src={logo} alt="logo" />
                <img className={styles.ForkAndKnife} src={ForkAndKnife} alt="forkandknife" />
            </div>

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
            <h1 style={{ textAlign: "center", fontSize: "22px" }}>Escolha um estabelcimento para comprar sua receita!</h1>
            <div className={styles.horizontalFlex}>
                {receita.mercados && (receita.mercados).map(m => {
                    return (
                        <div onClick={() => {
                            setCurMercado(m);

                        }}
                            className={curMercado.id == m.id ? styles.mercadoCardSelected : styles.mercadoCard}>
                            <div id={styles.diferencialMercado}><FaStar /> {m.diferencial}</div>
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
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Ingredientes da Receita */}
            {(curMercado.id) &&
                <div ref={ingRef} className={styles.ingredientesContainer}>
                    {curMercado.ingredientes &&
                        <>
                            <div id={styles.ingredientTitle}>
                                <img src={require("../../imgs/broccoli.png")} alt="" />
                                <div id={styles.ingredientTitleFlex}>
                                    <h1>Ingredientes</h1>
                                    <h2>Em {curMercado.nome}</h2>
                                </div>
                            </div>
                            <div className={styles.ingredientsContainer}>
                                {curMercado.ingredientes && (curMercado.ingredientes).map(i => {
                                    return (
                                        <div className={styles.ingredientCard}>
                                            <IoCloseCircleOutline onClick={() => window.alert(`Remover ${i.nome} do pedido?`)} id={styles.removeIngredient}/>
                                            <h2>{i.nome}</h2>
                                            <span>(utilizará {i.quantidadeUso})</span>
                                            <div className={styles.ingredientImg}>
                                                <img src={require(`../../imgs/${i.imagem}`)} alt="" />
                                            </div>
                                            <span id={styles.valorIngrediente}>{i.valor}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    }
                    <div id={styles.buyContainer}>
                        <h2>Você vai pagar:</h2>
                        <span>R$ {curMercado.preco}</span>
                        <button onClick={() => window.alert("Startup em desenvolvimento... Em breve você poderá receber sua receita do seu jeito no conforto da sua casa!")} id={styles.buyButton}><FaCheck /> Finalizar Pedido</button>
                    </div>
                </div>

            }
        </div>
    );

}