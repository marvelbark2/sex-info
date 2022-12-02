import { faBuildingColumns, faHospital, faShareNodes } from '@fortawesome/free-solid-svg-icons'

export const utilLinks = [
    {
        title: 'Sites gouvernementaux',
        icon: faBuildingColumns,
        links: [
            {
                label: 'Informer sur le VIH/Sida',
                href: `https://solidarites-sante.gouv.fr/prevention-en-sante/preserver-sa-sante/sante-sexuelle-et-reproductive/article/informer-sur-le-vih-sida-et-les-autres-infections-sexuellement-transmissibles`
            },
            {
                label: 'Prévention en santé',
                href: `https://solidarites-sante.gouv.fr/prevention-en-sante/`
            },
            {
                label: 'Santé sexuelle et reproductive',
                href: `https://solidarites-sante.gouv.fr/prevention-en-sante/preserver-sa-sante/sante-sexuelle-et-reproductive/`
            }
        ]
    },
    {
        title: 'Sites de santé',
        icon: faHospital,
        links: [
            {
                label: 'Sida Info Service',
                href: 'https://www.sida-info-service.org/'
            },
            {
                label: 'Sexualites Info Sante',
                href: 'https://www.sexualites-info-sante.fr/'
            },
            {
                label: 'Hepatites Info Service',
                href: 'https://www.hepatites-info-service.org/'
            },
            {
                label: 'Vih Info Soignants',
                href: 'https://www.vih-info-soignants.fr/'
            },
            {
                label: 'Ligne Azur',
                href: 'https://www.ligneazur.org/'
            }
        ]
    },
    {
        title: 'Réseaux sociaux',
        icon: faShareNodes,
        links: [
            {
                label: '@sida_info_service',
                href: 'https://www.instagram.com/sida_info_service'
            },
            {
                label: '@sexualites_info_sante',
                href: 'hthttps://www.instagram.com/sexualites_info_sante'
            },
            {
                label: '@SidaInfoService',
                href: 'https://www.facebook.com/SidaInfoService'
            }
        ]
    }
]