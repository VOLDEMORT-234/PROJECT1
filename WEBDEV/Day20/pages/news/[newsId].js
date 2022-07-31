// special hooks to get dynamic page

import { useRouter } from "next/router";

// /news file/something-important

import React from "react";

function DetailPage() {
  const router = useRouter();
  
  const newsId = router.query.newsId;

  // send a request to backend API
  // to fetch news item with newsId

  return <h1>The News Page</h1>;
}

export default DetailPage;
// [] indicates dynamic page very important concept
