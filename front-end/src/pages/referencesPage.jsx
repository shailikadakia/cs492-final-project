import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ReferencesPage() {
  const [jobPostingData, setJobPostingData] = useState([]);
  const [screeningData, setScreeningData] = useState([]);
  const [interviewData, setInterviewData] = useState([]);
  const [postSelectionData, setPostSelectionData] = useState([]);


  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3000/api/references/jobposting"),
      fetch("http://localhost:3000/api/references/screening"),
      fetch("http://localhost:3000/api/references/interview"),
      fetch("http://localhost:3000/api/references/postselection")
    ])
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then(([jobPostingData, screeningData, interviewData, postSelectionData ]) => {
        setJobPostingData(jobPostingData);
        setScreeningData(screeningData);
        setInterviewData(interviewData);
        setPostSelectionData(postSelectionData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, 
  []);

  return (
    <div>
      <div>
        <h1>Job Posting References</h1>
          {jobPostingData.map((item) => (
            <p key={item.id}>{item.text}</p>
          ))}
        </div>
        <div>
        <h1>Screening References</h1>
          {screeningData.map((item) => (
            <p key={item.id}>{item.text}</p>
          ))}
        </div>
        <div>
        <h1>Interviewing References</h1>
          {interviewData.map((item) => (
            <p key={item.id}>{item.text}</p>
          ))}
        </div>
        <div>
        <h1>Selection and Post-Selection References</h1>
          {postSelectionData.map((item) => (
            <p key={item.id}>{item.text}</p>
          ))}
        </div>
    </div>
  );
}

export default ReferencesPage;