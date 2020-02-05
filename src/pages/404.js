import React from "react"

import Page from "../templates/Page"
import SEOTags from "../components/SEOTags"

const NotFoundPage = () => (
  <Page>
    <SEOTags title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Page>
)

export default NotFoundPage
