import styles from './Home.module.css';
import logo from '../../imgs/logo.png';
import ForkAndKnife from '../../imgs/ForkAndKnife.svg'
import { receitasLsit } from '../../util/receitas';
import { CardReceita } from '../../components/CardReceita/CardReceita';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'
import { useNavigate } from 'react-router-dom';


export const Home = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img className={styles.ForkAndKnife} src={ForkAndKnife} alt="forkandknife" />
                <img className={styles.logo} src={logo} alt="logo" />
                <img className={styles.ForkAndKnife} src={ForkAndKnife} alt="forkandknife" />
            </div>
            <h1 className={styles.sliderTitle}>Receitas <span style={{ fontStyle: "italic" }}>do seu jeito</span></h1>
            <div className={styles.carouselContainer}>
                <Swiper
                    className={styles.receitasCarousel}
                    freeMode={true}
                    modules={[FreeMode]}
                    spaceBetween={8}
                    slidesPerView="auto"
                >
                    {receitasLsit.map(r => {
                        return (
                            <SwiperSlide onClick={() => navigate(`/receita/${r.id}`)} className={styles.receitaSlide} key={r.titulo}>
                                <CardReceita receita={r} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

            <h1 className={styles.sliderTitle}>Receitas em alta <span style={{ fontStyle: "italic" }}>na sua região</span></h1>
            <div className={styles.carouselContainer}>
                <Swiper
                    className={styles.receitasCarousel}
                    freeMode={true}
                    modules={[FreeMode]}
                    spaceBetween={8}
                    slidesPerView="auto"
                >
                    {receitasLsit.map(r => {
                        return (
                            <SwiperSlide  className={styles.receitaSlide} key={r.titulo}>
                                <CardReceita onClick={() => navigate(`/receita/${r.id}`)} receita={r} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    );
}