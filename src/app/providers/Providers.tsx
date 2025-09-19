'use client'

//Providers.tsx
import React from 'react';
import NextTopLoader from "nextjs-toploader";
import './Providers.scss'


export const Providers: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <>
            <NextTopLoader/>
            {children}
        </>
    );
};
