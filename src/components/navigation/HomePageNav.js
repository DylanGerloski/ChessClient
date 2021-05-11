import React from "react";

import { Link } from "react-router-dom";
const HomePageNav = () => {
  return (
    <nav className='hpnavbox-container'>
      <ul>
        <li>
          <Link to='/ExploreOpenings'>Explore Openings</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/LinePractice'>Line Practice</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='OpeningRush'>Opening Rush</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HomePageNav;
