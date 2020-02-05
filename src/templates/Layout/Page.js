import React from "react"
import { graphql } from "gatsby"
import { getChildren, isLevel, getMenu } from "silverstripe-gatsby-helpers"
import Layout from "../Page"
import SEOTags from "../../components/SEOTags"
import Breadcrumbs from "../../components/Breadcrumbs"
import { Link } from "gatsby"
import classnames from 'classnames';

const Page = ({ data: { silverStripeDataObject }}) => {
	const { title, content } = silverStripeDataObject.SilverStripeSiteTree;
	const children = getChildren();
	const isLevel2 = isLevel(2);
	const hasSubnav = isLevel(2) || !!children.length;
	const navItems = isLevel2 ? getMenu(2) : children;
	
	return (
	  <Layout>
	    <SEOTags pageTitle={title} />

		<div className={`content ${hasSubnav ? 'hasSidebar' : ''}`}>
			<div className="main">
				{isLevel2 && 
					<Breadcrumbs />
				}
	    		<h1>{title}</h1>
	    		<div dangerouslySetInnerHTML={{__html: content}} />
			</div>
			{hasSubnav &&
				<div className="sidebar">
					<h2>In this section</h2>
					<ul>
					{navItems.map(child => (
						<li key={child.id} className={classnames({
							current: child.isCurrent,
						})}>
							<Link to={child.link}>{child.SilverStripeSiteTree.title}</Link>
						</li>
					))}
					</ul>
				</div>
			}
		</div>
	  </Layout>
  	);
};

export default Page

export const pageQuery = graphql`
	query ($link: String!) {
		silverStripeDataObject(link: { eq: $link }) {
			SilverStripeSiteTree {
				title
				content
			}
		}

	}
`;