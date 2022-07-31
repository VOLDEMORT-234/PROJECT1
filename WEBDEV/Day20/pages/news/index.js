// /news file/something-important
// about navigation

import Link from "next/link";
import React, { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">Nextjs is great</Link>
        </li>
        <li>
          <Link href="">something else</Link>
        </li>
        {/* <li></li> */}
      </ul>
      {/* never change circle to cross */}
    </Fragment>
  );
}

export default NewsPage;
