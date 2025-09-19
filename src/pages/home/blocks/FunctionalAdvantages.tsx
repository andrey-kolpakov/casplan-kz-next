'use client';

import React from 'react';

import {IoSpeedometerOutline, IoCloudDoneOutline, IoAppsOutline} from 'react-icons/io5';
import {LiaToolsSolid} from 'react-icons/lia';
import {FaCheck} from 'react-icons/fa6';

import Link from 'next/link';
import styles from './styles/FunctionalAdvantages.module.scss';

export function FunctionalAdvantages() {
    return (

        <div className={styles.container}>
            <div className={styles.item}>
                <IoSpeedometerOutline className={styles.icon}/>
                <h3>Скорость расчетов</h3>
                <p>Перерасчёт моделей осуществляется в реальном времени благодаря технологии in-memory OLAP.</p>
            </div>
            <div className={styles.item}>
                <LiaToolsSolid className={styles.icon}/>
                <h3>BI-инструментарий</h3>
                <p>Система поддержки решений на основе визуального анализа данных и поиска трендов.</p>
            </div>
            <div className={styles.item}>
                <IoCloudDoneOutline className={styles.icon}/>
                <h3>В облаке или on-premise</h3>
                <p>Платформу можно развернуть в облачном сервисе или на собственных серверах заказчика.</p>
            </div>
            <div className={styles.item}>
                <FaCheck className={styles.icon}/>
                <h3>Низкий порог входа</h3>
                <p>Свобода моделирования, большой встроенный функционал и управление бизнес-логикой моделей.</p>
            </div>
            <div className={styles.item}>
                <IoAppsOutline className={styles.icon}/>
                <h3>Интеграции</h3>
                <p>Импорт и экспорт данных вручную или через интеграционные приложения и коннекторы.</p>
            </div>

            <div className={`${styles.item} ${styles.cta}`}>
                <Link href="/gallery" className={styles.ctaLink}>
                    <h3>Как это выглядит?</h3>
                </Link>
            </div>
        </div>

    );
}
