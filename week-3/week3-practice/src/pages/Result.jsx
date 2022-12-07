import React from 'react'
import { useLocation } from 'react-router-dom';
import QueryString from "qs";

export default function Result() {

  const location = useLocation();
  const queryData = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log(queryData);
  

  return (
    <div>Result</div>
  )
}
