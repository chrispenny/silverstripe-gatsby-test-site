import React from 'react';
import classnames from 'classnames';
import { getMenu } from 'silverstripe-gatsby-helpers';
import { Link } from 'gatsby';

const MainNav = () => {
    const menuItems = getMenu(1);
    return (
        <nav className="mainNav">
            <ul>
            {menuItems.map(item => (
                <li key={item.id} className={classnames({
                    current: item.isCurrent,
                    section: item.isSection,
                })}>
                    <Link to={item.link}>
                        {item.SilverStripeSiteTree.menuTitle}
                    </Link>
                </li>
            ))}
            </ul>
        </nav>
    );
};

export default MainNav;