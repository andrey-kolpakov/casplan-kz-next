import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Container.module.scss';

import type { StaticImageData } from 'next/image';

interface Props {
    className?: string;
    classNameOuter?: string;
    children?: React.ReactNode;
    imageURL?: StaticImageData | string;
    fullScreen?: boolean;
    centeredVertical?: boolean;
    centeredHorizontal?: boolean;
    stretchContent?: boolean;
    pd?: boolean;
    pdfalse?: boolean;
    mtnone?: boolean;
    mbnone?: boolean;
}

// Обычный контейнер
export const Container: React.FC<Props> = ({
                                               className,
                                               children,
                                               pd,
                                               pdfalse,
                                               mbnone,
                                           }) => {
    return (
        <div
            className={clsx(
                styles.container,
                className,
                {
                    [styles.containerPd]: pd,
                    [styles.containerPdFalse]: pdfalse,
                    [styles.containerMbFalse]: mbnone,
                }
            )}
        >
            {children}
        </div>
    );
};

// Контейнер с поддержкой background и ref
export const ContainerBackground = forwardRef<HTMLDivElement, Props>(
    (
        {
            className,
            classNameOuter,
            children,
            imageURL,
            fullScreen,
            centeredVertical,
            centeredHorizontal,
            stretchContent,
            pd,
            mtnone,
        },
        ref
    ) => {
        const bg = imageURL
            ? typeof imageURL === 'string'
                ? imageURL
                : imageURL.src || ''
            : '';

        return (
            <div
                className={clsx(
                    styles.containerOuter,
                    classNameOuter,
                    {
                        [styles.containerOuterFullScreen]: fullScreen,
                        [styles.containerOuterCenteredVertical]: centeredVertical,
                        [styles.containerOuterCenteredHorizontal]: centeredHorizontal,
                        [styles.containerOuterStretchContent]: stretchContent,
                        [styles.containerOuterPd]: pd,
                        [styles.containerOuterMarginTop0]: mtnone,
                    }
                )}
                style={bg ? { backgroundImage: `url(${bg})` } : undefined}
            >
                <div className={clsx(styles.container, className)} ref={ref}>
                    {children}
                </div>
            </div>
        );
    }
);

ContainerBackground.displayName = 'ContainerBackground';
