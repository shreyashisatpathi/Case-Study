import React ,{useState}from "react";
import CaseStudy from "./CaseStudy";
import FormCaseStudy from "./FormCaseStudy";

export default function CaseStudyList({ formData, data }) {
  // const renderedList = data.map((data) => {
  //   return <CaseStudy key={data.id} data={data} />;
  // });
  const [isClicked, setisClicked] = useState(false);
  const handleClick = () => {
    setisClicked(true);
  };
  return (
    <div>
      <button onClick={handleClick}>Add a Case Study</button>
      {isClicked && <FormCaseStudy formData={formData}/>}
      <div>
        {data.map((data) => {
          return <CaseStudy key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
}
