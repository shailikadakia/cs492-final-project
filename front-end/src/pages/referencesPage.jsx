import { useState, useEffect } from 'react';

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
    <div className="References Page bg-blue-950 min-h-screen text-neutral-100 text-left flex flex-col space-y-8">
      <div>
        <h1 className='text-center font-extrabold text-pink-400'>Job Posting References</h1>
          <div className='flex flex-col space-y-4'>
            {jobPostingData.map((item) => (
              <p key={item.id} className='flex flex-col space-y-4 '>{item.text}</p>
            ))}
          </div>
        </div>
        <div>
        <h1 className='text-center font-extrabold text-pink-400'>Screening References</h1>
          <div className='flex flex-col space-y-4'>
            {screeningData.map((item) => (
              <p key={item.id}>{item.text}</p>
            ))}
          </div>
        </div>
        <div>
        <h1 className='text-center font-extrabold text-pink-400'>Interviewing References</h1>
          <div className='flex flex-col space-y-4'>
            {interviewData.map((item) => (
              <p key={item.id}>{item.text}</p>
            ))}
          </div>
        </div>
        <div>
        <h1 className='text-center font-extrabold text-pink-400'>Selection and Post-Selection References</h1>
          <div className='flex flex-col space-y-4'>
           {postSelectionData.map((item) => (
            <p key={item.id}>{item.text}</p>
          ))} 
          </div>
          
        </div>
    </div>
  );
}

export default ReferencesPage;