import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEOTags = ({ metaDescription, lang, meta, pageTitle }) => {
  const data = useStaticQuery(
    graphql`
      {
        silverStripeDataObject(className: { eq: "SilverStripe__SiteConfig__SiteConfig"}) {
          SilverStripeSiteConfig {
            title
          }
        }	
      }
  `);
  const siteTitle = data.silverStripeDataObject.SilverStripeSiteConfig.title;


  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: pageTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEOTags.defaultProps = {
  lang: `en`,
  meta: [],
  metaDescription: ``,
}

SEOTags.propTypes = {
  metaDescription: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  pageTitle: PropTypes.string.isRequired,
}

export default SEOTags
