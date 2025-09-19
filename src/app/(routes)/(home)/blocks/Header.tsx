import React from 'react';
import LogoMini from '@/shared/assets/images/logo-mini.svg';
import styles from './styles/Header.module.scss';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <div className={styles.headerHeader}>
                    <h1 className={styles.title}>
                        <LogoMini /> CasPlan
                    </h1>
                    <h3 className={styles.subtitle}>
                        Современный продукт, обеспечивающий интегрированный подход к планированию. <br /><br />
                        Уникальные решения критически важных бизнес-функций: бюджетирование, коммерческое планирование,
                        оптимизация производства, управление цепочками поставок, планирование рабочей силы, аналитика и прогнозирование.
                    </h3>
                </div>

                <ul className={styles.headerUl}>
                    <li className={styles.headerLi}>
                        <div className={styles.imgPoint} />
                        надёжность и мощность корпоративного класса
                    </li>
                    <li className={styles.headerLi}>
                        <div className={styles.imgPoint} />
                        серверная установка или облачный SaaS
                    </li>
                    <li className={styles.headerLi}>
                        <div className={styles.imgPoint} />
                        гибкость, сопоставимая с Excel
                    </li>
                </ul>

                <div className={styles.buttonList}>
                    {/* кнопки будут тут */}
                </div>
            </div>

            <div className={styles.headerImg} aria-hidden="true" />
        </header>
    );
};
