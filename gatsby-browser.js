const React = require("react")
const SiteTreeProvider = require("./src/providers/SiteTreeProvider").default

exports.wrapPageElement = ({ element }) => {
  return <SiteTreeProvider>{element}</SiteTreeProvider>
}