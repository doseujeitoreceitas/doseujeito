import { IoIosSearch } from 'react-icons/io';
import styles from './Layout.module.css';
import { FaRegUser } from "react-icons/fa";

import ForkAndKnifeIcon from "../imgs/ForkAndKnife.svg";
import { CiStar } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { RxExit } from 'react-icons/rx';

export const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <SideBar />
            {children}

        </div>
    );

}

const SideBar = () => {
    return (
        <div className={styles.sideBar}>
            <FaRegUser className={styles.sideBarIcons} />
            <IoIosSearch className={styles.sideBarIcons} />
            <img src={ForkAndKnifeIcon} alt="forkandknife" className={styles.sideBarIconImg} />
            <CiStar className={styles.sideBarIcons} />
            <IoCartOutline className={styles.sideBarIcons} />
            <RxExit className={styles.sideBarIcons} />
        </div>
    );
}