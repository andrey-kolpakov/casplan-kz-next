'use client';

import { usePopupStore } from '@/shared/lib/popupStore';
import clsx from 'clsx';
import styles from './Popup.module.scss';

export function Popup() {
    const { currentPopup, closePopup } = usePopupStore();

    const handleBackdropClick = () => {
        if (!currentPopup) return;
        closePopup();
    };

    return (
        <div
            className={clsx(
                styles.popupContainer,
                { [styles.popupActive]: currentPopup }
            )}
        >
            <div className={styles.currentPopup}>{currentPopup?.content}</div>
            <div
                className={styles.popupBackdrop}
                onClick={handleBackdropClick}
            />
        </div>
    );
}