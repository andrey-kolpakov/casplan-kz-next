import React, { forwardRef } from 'react';
import clsx from 'clsx';

import './Container.scss';

import type { StaticImageData } from 'next/image';

interface Props {
    className?: string;
    classNameOuter?: string;
    children?: React.ReactNode; // Добавляем тип для children
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
export const Container: React.FC<Props> = ({ className, children, pd, pdfalse, mbnone }) => {
    return <div className={clsx(className, 'container', {
        'container--pd': pd,
        'container--pd-false': pdfalse,
        'container--mb-false': mbnone
    })}>{children}</div>;
};

// Контейнер с поддержкой background и ref
export const ContainerBackground = forwardRef<HTMLDivElement, Props>(
    ({ className, classNameOuter, children, imageURL, fullScreen, centeredVertical, centeredHorizontal, stretchContent, pd, mtnone}, ref) => {
        // console.log(imageURL)

        return (
            <div
                // Передаём ref здесь
                className={clsx('container-outer', classNameOuter, {
                    'container-outer--full-screen': fullScreen,
                    'container-outer--centered-vertical': centeredVertical,
                    'container-outer--centered-horizontal': centeredHorizontal,
                    'container-outer--stretch-content': stretchContent,
                    'container-outer--pd': pd,
                    'container-outer--margin-top-0': mtnone
                })}
                style={
                    imageURL
                        ? {
                            backgroundImage: `url(${
                                typeof imageURL === 'string'
                                    ? imageURL
                                    : imageURL?.src || ''
                            })`,
                        }
                        : undefined
                }
            >
                <div className={clsx(className, 'container')} ref={ref}>{children}</div>
            </div>
        );
    }
);

ContainerBackground.displayName = 'ContainerBackground'; // Указываем имя компонента для отладки
