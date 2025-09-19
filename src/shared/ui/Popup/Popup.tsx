'use client'

import {usePopupStore} from '@/shared/lib/popupStore'
import './Popup.scss'

function Popup() {
    const {currentPopup, closePopup} = usePopupStore()

    const handleBackdropClick = () => {
        if (!currentPopup) return
        closePopup()
    }

    return (
        <div className={`popup-container ${currentPopup ? 'popup-container--active' : ''}`}>
            <div className="current-popup">{currentPopup?.content}</div>
            <div className="popup-container__backdrop" onClick={handleBackdropClick}></div>
        </div>
    )
}

export {Popup}
