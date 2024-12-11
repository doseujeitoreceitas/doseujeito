import styles from './CardReceita.module.css';


export const CardReceita = ({ receita }) => {

    const img = require(`../../imgs/${receita.imagem}`);

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.imagem} src={img} alt="" />
            </div>
            <div className={styles.titulo}>{receita.titulo}</div>
            <div className={styles.menorPreco}>
                <span>Melhor Preço</span>
                <h2>R$ {receita.menorPreco}</h2>
            </div>
            <div className={styles.maiorPreco}>
                <span>Maior Preço</span>
                <h2>
                    R$ {receita.maiorPreco}
                </h2>
            </div>
        </div>
    );
}