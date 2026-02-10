declare global {
    interface Window {
        gtag: (command: string, targetId: string, config?: unknown) => void
    }
}

export const GA_TRACKING_ID = "G-QCX3G9KSPC"

export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && GA_TRACKING_ID) {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
        })
    }
}

export const event = ({
    action,
    category,
    label,
    value,
}: {
    action: string
    category: string
    label?: string
    value?: number
}) => {
    if (typeof window !== 'undefined' && GA_TRACKING_ID) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        })
    }
}

// Common events
export const trackFormSubmission = (formName: string) => {
    event({
        action: 'form_submit',
        category: 'engagement',
        label: formName,
    })
}

export const trackButtonClick = (buttonName: string) => {
    event({
        action: 'click',
        category: 'engagement',
        label: buttonName,
    })
}

export const trackPageView = (pageName: string) => {
    event({
        action: 'page_view',
        category: 'navigation',
        label: pageName,
    })
}