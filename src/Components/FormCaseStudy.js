import React, { useState } from "react";

export default function FormCaseStudy({formData}) {
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [job, setJob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setCost("");
    setJob("");
    formData({title,cost,job})
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeCost = (e) => {
    setCost(e.target.value);
  };
  const handleChangeJob = (e) => {
    setJob(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input value={title} onChange={handleChangeTitle}></input>
        </div>
        <div>
          <label>cost</label>
          <input value={cost} onChange={handleChangeCost}></input>
        </div>
        <div>
          <label>job</label>
          <input value={job} onChange={handleChangeJob}></input>
        </div>
        <div>
        <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
