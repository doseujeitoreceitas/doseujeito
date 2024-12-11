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


export const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img className={styles.ForkAndKnife} src={ForkAndKnife} alt="forkandknife" />
                <img className={styles.logo} src={logo} alt="logo" />
                <img className={styles.ForkAndKnife} src={ForkAndKnife} alt="forkandknife" />
            </div>
            <h1 className={styles.sliderTitle}>Receitas <span style={{ fontStyle: "italic" }}>do seu jeito</span></h1>
            <div style={{padding: "1rem 0 1rem 4rem"}}>
                <Swiper
                    className={styles.receitasCarousel}
                    freeMode={true}
                    modules={[FreeMode]}
                    spaceBetween={10}
                    slidesPerView={8}
                >
                    {receitasLsit.map(r => {
                        return (
                            <SwiperSlide key={r.titulo}>
                                <CardReceita receita={r} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    );
}