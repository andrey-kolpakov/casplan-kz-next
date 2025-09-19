//schemas/OrgSchema.tsx
import Script from "next/script";

const ORG_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Кибернетика",
    "legalName": "Товарищество с ограниченной ответственностью \"Кибернетика.com\"",
    "alternateName": ["Кибернетика", "Cybernetica", "CasPlan"],
    "@id": "https://upr-uchet.kz/#org",

    "url": "https://upr-uchet.kz/",
    "logo": "https://upr-uchet.kz/images/logo-mini.svg",

    "image": [
        "https://upr-uchet.kz/og-default.jpg",
    ],

    "description": "Предоставляем полный спектр услуг для цифровой трансформации! От интеграции с оборудованием и датчиков до ERP систем, корпоративных систем планирования, документооборота, мобильных приложений и AI ассистентов.",
    "slogan": "Учим компьютеры помогать людям!",

    "foundingDate": "2017-01-15",
    "founders": [
        {
            "@type": "Person",
            "name": "Литвинов Семён",
            "sameAs": [
                "https://www.linkedin.com/in/semyon-litvinov-79164b251/"
            ]
        },
        {
            "@type": "Person",
            "name": "Лукин Сергей"
        }
    ],
    "foundingLocation": {"@type": "Place", "name": "Алматы, Казахстан"},

    "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Егизбаева, 13/54Б, офис 309",
        "addressLocality": "Алматы",
        "addressRegion": "Алматы",
        "postalCode": "050046",
        "addressCountry": "KZ"
    },

    "contactPoint": [
        {
            "@type": "ContactPoint",
            "telephone": "+7-701-729-05-51",
            "contactType": "customer service",
            "name": "Литвинов Семён",
            "areaServed": ["KZ"],
            "availableLanguage": ["ru"]
        },
        {
            "@type": "ContactPoint",
            "telephone": "+7-705-190-42-29",
            "contactType": "customer service",
            "name": "Лукин Сергей",
            "areaServed": ["KZ"],
            "availableLanguage": ["ru"]
        },
        {
            "@type": "ContactPoint",
            "telephone": "+7-771-800-07-68",
            "contactType": "HR",
            "areaServed": ["KZ"],
            "availableLanguage": ["ru"]
        },
        {
            "@type": "ContactPoint",
            "telephone": "+7-771-800-07-71",
            "contactType": "billing",
            "areaServed": ["KZ"],
            "availableLanguage": ["ru"]
        },
        {
            "@type": "ContactPoint",
            "email": "webinfo@cybernetica.kz",
            "contactType": "customer service",
            "areaServed": ["KZ"],
            "availableLanguage": ["ru"]
        }
    ],

    "sameAs": [
        "https://www.instagram.com/cybernetica.kz",

        "https://www.linkedin.com/company/cybernetica-kz",

        "https://1c.kz/firm1c/partner/franch/143126/",
        "https://1c.kz/firm1c/partner/erp/143126/",

        "https://optimacros.com/partners/cybernetica/",

        "https://2gis.kz/almaty/firm/70000001059510997",
        "https://ba.prg.kz/750000000-almaty/210140025993-too-kibernetika-com/",
        "https://almaty.hh.kz/employer/5356182",
    ],

    "subjectOf": [
        {
            "@type": "NewsArticle",
            "headline": "Продукт \"Кибернетика: Подсистема \"Казначейство\" для \"Бухгалтерия для Казахстана\", ред. 3.0\", компании \"Кибернетика.com\" получил сертификат \"Совместимо!",
            "datePublished": "2023-11-01",
            "url": "https://1c.kz/news/detail/162579/"
        },
    ]
};

export const OrgSchema = () => {
    return (<Script
        id="org-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{__html: JSON.stringify(ORG_SCHEMA)}}
    />)
}