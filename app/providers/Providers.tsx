'use client';

import React, {useEffect} from 'react';
import NextTopLoader from 'nextjs-toploader';
import {useDeviceStore, type DeviceType} from '@/shared/lib/deviceStore';

type Props = React.PropsWithChildren<{
    deviceType: DeviceType; // приходит с сервера
}>;

export const Providers: React.FC<Props> = ({children, deviceType}) => {
    const setDeviceType = useDeviceStore((s) => s.setDeviceType);

    useEffect(() => {
        setDeviceType(deviceType);
    }, [deviceType, setDeviceType]);

    return (
        <>
            <NextTopLoader/>
            {children}
        </>
    );
};
