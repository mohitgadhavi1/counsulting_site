import { Metadata } from 'next'

export interface SEOConfig {
    title: string
    description: string
    keywords?: string[]
    canonical?: string
    languages?: Record<string, string>
    openGraph?: {
        title?: string
        description?: string
        image?: string
        type?: 'website' | 'article' | 'book' | 'profile'
    }
    twitter?: {
        card?: 'summary' | 'summary_large_image' | 'app' | 'player'
        title?: string
        description?: string
        image?: string
    }
}

export const defaultSEO: SEOConfig = {
    title: 'Zidbit Consulting - Modern Software Development Services',
    description: 'Transform your business with expert software consulting and web development services. We build scalable, high-performance web applications tailored to your needs.',
    keywords: ['software consulting', 'web development', 'digital transformation', 'custom applications', 'software engineering'],
    openGraph: {
        title: 'Zidbit Consulting - Modern Software Development Services',
        description: 'Transform your business with expert software consulting and web development services.',
        type: 'website',
        image: '/og-image.png'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Zidbit Consulting - Modern Software Development Services',
        description: 'Transform your business with expert software consulting and web development services.',
        image: '/twitter-image.png'
    }
}

export function generateMetadata(config: Partial<SEOConfig> = {}): Metadata {
    const seo = { ...defaultSEO, ...config }
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://consulting.zidbit.com'

    return {
        metadataBase: new URL(baseUrl),
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords?.join(', '),
        alternates: {
            canonical: seo.canonical,
            languages: seo.languages,
        },
        openGraph: {
            title: seo.openGraph?.title || seo.title,
            description: seo.openGraph?.description || seo.description,
            type: seo.openGraph?.type || 'website',
            images: seo.openGraph?.image ? [seo.openGraph.image] : undefined,
        },
        twitter: {
            card: (seo.twitter?.card as 'summary' | 'summary_large_image' | 'app' | 'player') || 'summary_large_image',
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