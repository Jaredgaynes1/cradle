export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cradle Labs",
    "url": "https://usecradle.com",
    "logo": "https://usecradle.com/cradle-logo.svg",
    "description": "Modern data infrastructure for marina operations",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "email": "jared@usecradle.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Cradle",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Real-time business intelligence and data infrastructure for marina operators",
    "operatingSystem": "Web"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostingSchema({
  title,
  description,
  datePublished,
  url
}: {
  title: string;
  description: string;
  datePublished: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "author": {
      "@type": "Organization",
      "name": "Cradle Labs"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cradle Labs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://usecradle.com/cradle-logo.svg"
      }
    },
    "url": url
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
