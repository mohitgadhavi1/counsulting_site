import Script from "next/script";

interface OrganizationSchemaProps {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  contactPoint?: {
    telephone?: string;
    contactType: string;
    email?: string;
  };
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
}

export function OrganizationSchema({
  name,
  url,
  logo,
  description,
  contactPoint,
  address,
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    contactPoint: contactPoint
      ? {
        "@type": "ContactPoint",
        ...contactPoint,
      }
      : undefined,
    address: address
      ? {
        "@type": "PostalAddress",
        ...address,
      }
      : undefined,
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed?: string;
  serviceType?: string;
}

export function ServiceSchema({
  name,
  description,
  provider,
  areaServed,
  serviceType,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      ...provider,
    },
    areaServed,
    serviceType,
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

interface WebsiteSchemaProps {
  name: string;
  url: string;
  description?: string;
  potentialAction?: {
    target: string;
    queryInput: string;
  };
}

export function WebsiteSchema({
  name,
  url,
  description,
  potentialAction,
}: WebsiteSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    potentialAction: potentialAction
      ? {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: potentialAction.target,
        },
        "query-input": potentialAction.queryInput,
      }
      : undefined,
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
