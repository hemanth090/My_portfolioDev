/**
 * Per-route document metadata. React 19 hoists <title>/<meta> rendered here
 * into <head> and dedupes <title>, so no head-manager library is needed.
 */
export const SITE_URL = 'https://hemanthk.dev'
const OG_IMAGE = `${SITE_URL}/avatar.jpg`

export function Seo({
  title,
  description,
  path,
  type = 'website',
  noindex = false,
}: {
  title: string
  description: string
  /** Route path, used to build the canonical URL. Omit to skip canonical tags. */
  path?: string
  type?: 'website' | 'profile' | 'article'
  noindex?: boolean
}) {
  const url = path ? `${SITE_URL}${path}` : undefined

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex" /> : null}
      {url ? <link rel="canonical" href={url} /> : null}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Naveen Hemanth Kokkonda" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:alt" content="Naveen Hemanth Kokkonda" />
      {url ? <meta property="og:url" content={url} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </>
  )
}
