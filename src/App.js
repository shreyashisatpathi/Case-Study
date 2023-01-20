import React, { useState } from "react";
import CaseStudyList from "./Components/CaseStudyList";
//import data from "./Components/data";

export default function App() {
  const [caseStudy, setCaseStudy] = useState([]);
  const getFormData = (data) => {
    setCaseStudy([...caseStudy, data]);
  };
  
  return (
    <div>
      <h3>How to earn Money</h3>
      <CaseStudyList data={caseStudy} formData={getFormData}  />
    </div>
  );
}
