import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import logo from '../images/ss-logo.png';
import MainNav from '../components/mainNav';

import "../scss/app.scss"

const Page = ({ children }) => {
  const data = useStaticQuery(graphql`
	{
		silverStripeDataObject(className: { eq: "SilverStripe__SiteConfig__SiteConfig"}) {
			SilverStripeSiteConfig {
				title
			}
		  }
		  	
	}
  `);
  const { title } = data.silverStripeDataObject.SilverStripeSiteConfig;

  return (
    <div className="wrap">
		<div className="topBar">
			<div className="logo">
				<Link to="/">
					<img src={logo} alt="Silverstripe CMS"/>
					<h1>{title}</h1>
				</Link>
			</div>
			<MainNav />
		</div>

    	<main>{children}</main>
        <footer>
			<div>
          	© {new Date().getFullYear()}. 
			  Built with <a href="https://www.gatsbyjs.org">Gatsby</a> and
			  {` `} 
			  <a href="https://www.silverstripe.org">Silverstripe CMS"</a>
		  	</div>
        </footer>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
