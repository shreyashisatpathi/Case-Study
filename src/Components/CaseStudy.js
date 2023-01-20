import React from "react";

export default function CaseStudy({ data }) {
  return (
    <div>
      <div>
        <h2> {data.title}</h2>
        <h4>{data.cost}</h4>
      </div>
      <div>{data.job}</div>
    </div>
  );
}
