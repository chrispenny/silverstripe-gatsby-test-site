import React from 'react';
import { getBreadcrumbs } from 'silverstripe-gatsby-helpers';
import { Link } from 'gatsby';

const Breadcrumbs = ({ maxDepth, showHidden }) => (
    <div className="breadcrumbs">
    {getBreadcrumbs().map((crumb, i) => (
        <>
            {i > 0 && ` / `}
            <Link key={crumb.uuid} to={crumb.link}>
                {crumb.SilverStripeSiteTree.menuTitle}
            </Link>
        </>
    ))}
    </div>
);

Breadcrumbs.defaultProps = {
    maxDepth: 20,
    showHidden: false
};

export default Breadcrumbs;
