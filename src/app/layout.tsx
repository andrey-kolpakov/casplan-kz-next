import type {Metadata} from "next";
import {Roboto} from "next/font/google";

import {Providers} from './providers/Providers'
import {Popup} from '@/shared/ui'

import {OrgSchema} from '@/shared/lib/seo'
import {getDeviceType} from '@/shared/lib/getDeviceType'

import "./globals.scss";

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    subsets: ["latin", "cyrillic"],
    variable: "--font-roboto",

    fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Arial'],
    adjustFontFallback: true,
    preload: true
});

export const metadata: Metadata = {
    title: "CasPlan - инновационная технология планирования для роста вашего бизнеса",
    description: "Платформа нового поколения, обеспечивающая комплексную цифровую трансформацию организаций со сложными системами управления",
};

export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const deviceType = await getDeviceType();

    return (
        <html lang="ru">

        <OrgSchema/>

        <body className={roboto.variable}>
        <Providers deviceType={deviceType}>
            <Popup/>

            {children}
        </Providers>
        </body>
        </html>
    );
}
