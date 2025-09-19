'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

import {FaRegLightbulb} from 'react-icons/fa6';
import {MdOutlineShield} from 'react-icons/md';
import {LiaBalanceScaleLeftSolid} from 'react-icons/lia';
import {TbRefresh} from 'react-icons/tb';

import {FunctionalAdvantages} from './FunctionalAdvantages';
import {useDeviceStore} from '@/shared/lib/deviceStore';

import styles from './styles/Advantages.module.scss';

export function Advantages() {
    const deviceType = useDeviceStore((s) => s.deviceType);
    const isDesktop = deviceType === 'desktop';

    return (
        <div className={styles.block}>
            <h2 className={styles.title}>Преимущества</h2>

            <div className={styles.container}>
                <div className={styles.regular}>
                    <div className={styles.regularItem}>
                        <h3>Гибкость</h3>
                        <p>Реализация самых сложных задач планирования</p>
                        <TbRefresh className={`${styles.bgIcon} ${styles.left}`}/>
                    </div>

                    <div className={styles.regularItem}>
                        <h3>Безопасность</h3>
                        <p>
                            Надёжность корпоративного уровня позволяет уйти из дорогих и небезопасных
                            облаков, установив сервера внутри компании.
                        </p>
                        <MdOutlineShield className={`${styles.bgIcon} ${styles.right}`}/>
                    </div>

                    <div className={styles.regularItem}>
                        <h3>Модели планирования</h3>
                        <p>Готовые к внедрению за 2 месяца и полностью кастомизированные.</p>
                        <FaRegLightbulb className={`${styles.bgIcon} ${styles.left}`}/>
                    </div>

                    <div className={styles.regularItem}>
                        <h3>Идеальный баланс</h3>
                        <p>
                            Создан, чтобы заменить громоздкие модели в Excel и негибкие традиционные
                            системы
                        </p>
                        <LiaBalanceScaleLeftSolid className={`${styles.bgIcon} ${styles.right}`}/>
                    </div>
                </div>

                <div className={styles.main}>
                    <div className={styles.mainText}>
                        <h2>Конструктор функций</h2>
                        <p>
                            В зависимости от целевого пользователя платформа CasPlan предлагает
                            готовый набор шаблонов и функционала для разных отделов предприятий.
                        </p>

                        <ul className={styles.headerUl}>
                            <li className={styles.headerLi}>
                                <div className={styles.imgPoint}/>
                                надёжность и мощность корпоративного класса
                            </li>
                            <li className={styles.headerLi}>
                                <div className={styles.imgPoint}/>
                                серверная установка или облачный SaaS
                            </li>
                            <li className={styles.headerLi}>
                                <div className={styles.imgPoint}/>
                                гибкость, сопоставимая с Excel
                            </li>
                        </ul>
                    </div>

                    <Image className={styles.image} src={'/images/advantages/screenshot.png'}
                           alt={'Скриншоты из программы'} width={500} height={300} />
                </div>

                {isDesktop ? (
                    <FunctionalAdvantages/>
                ) : (
                    <div className={styles.screenshotsCta}>
                        <Link href="/gallery" className={styles.screenshotsBtn}>
                            <h3>Как это выглядит?</h3>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
