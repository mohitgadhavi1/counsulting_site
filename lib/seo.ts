import { Metadata } from 'next'

export interface SEOConfig {
    title: string
    description: string
    keywords?: string[]
    canonical?: string
    openGraph?: {
        title?: string
        description?: string
        image?: string
        type?: string
    }
    twitter?: {
        card?: string
        title?: string
        description?: string
        image?: string
    }
}

export const defaultSEO: SEOConfig = {
    title: 'Zidbit Consulting - Expert Business Solutions',
    description: 'Transform your business with expert consulting services. We provide strategic guidance, digital transformation, and growth solutions.',
    keywords: ['consulting', 'business solutions', 'digital transformation', 'strategy', 'growth'],
    openGraph: {
        title: 'Zidbit Consulting - Expert Business Solutions',
        description: 'Transform your business with expert consulting services. We provide strategic guidance, digital transformation, and growth solutions.',
        type: 'website',
        image: '/og-image.png'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Zidbit Consulting - Expert Business Solutions',
        description: 'Transform your business with expert consulting services.',
        image: '/twitter-image.png'
    }
}

export function generateMetadata(config: Partial<SEOConfig> = {}): Metadata {
    const seo = { ...defaultSEO, ...config }

    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords?.join(', '),
        canonical: seo.canonical,
        openGraph: {
            title: seo.openGraph?.title || seo.title,
            description: seo.openGraph?.description || seo.description,
            type: seo.openGraph?.type as any,
            images: seo.openGraph?.image ? [seo.openGraph.image] : undefined,
        },
        twitter: {
            card: seo.twitter?.card as any,
            title: seo.twitter?.title || seo.title,
            description: seo.twitter?.description || seo.description,
            images: seo.twitter?.image ? [seo.twitter.image] : undefined,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    }
}