import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  excludeTitleSuffix?: boolean;
  indexPage?: boolean;
}

export default function SEO({
  title,
  description,
  image,
  excludeTitleSuffix = false,
  indexPage = true,
}: SEOProps) {
  const pageTitle = `${title} ${!excludeTitleSuffix ? '| Dev News' : ''}`;

  const pageImage = image
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}`
    : null;
  return (
    <Head>
      <title>{pageTitle}</title>

      {description && <meta name="description" content={description} />}
      {pageImage && <meta name="image" content={pageImage} />}
      {!indexPage && <meta name="robots" content="noindex,nofollow" />}
    </Head>
  );
}
