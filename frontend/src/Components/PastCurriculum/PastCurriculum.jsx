import React, { useState } from 'react';

const PastCurriculum = () => {

  const [selectedCurriculum, setSelectedCurriculum] = useState(null);

  const curriculumData = [
    {
      id: 1,
      courseName: 'ML/AI',
      courseDuration: '125 Hrs',
      curriculumContent: ['Basic ML/AI Concepts', 'Programming Fundamentals', 'Algorithms']
    },
    {
      id: 2,
      courseName: 'Web Development',
      courseDuration: '125 Hrs',
      curriculumContent: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      id: 3,
      courseName: 'Data Structures and Algorithms',
      courseDuration: '125 Hrs',
      curriculumContent: ['Abstract Data Types', 'Arrays', 'Stacks and Queues', 'Trees', 'Graphs', 'Sorting and Searching Algorithms']
    },
    {
      id: 2,
      courseName: 'RPA',
      courseDuration: '600 Hrs',
      curriculumContent: ['business analysts, workflow processes']
    },
    {
      id: 3,
      courseName: 'Cyber Security',
      courseDuration: '250 Hrs',
      curriculumContent: ['cybersecurity fundamentals']
    }
  ];

  const handleDownload = (curriculumId) => {
    const selectedCurriculum = curriculumData.find((curriculum) => curriculum.id === curriculumId);
    const curriculum = JSON.stringify(selectedCurriculum);
    const downloadLink = document.createElement('a');
    const file = new Blob([curriculum], { type: 'application/json' });
    downloadLink.href = URL.createObjectURL(file);
    downloadLink.download = `${selectedCurriculum.courseName}.json`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      {/* Past Clm Form starts here */}
      <div class="clm">
        <div class="content">
          <div class="clmHeader">
            <h2>PAST CURRICULUM</h2>
            {/* <a href="#" class="btn">View more</a> */}
          </div>
          <br /><br />
          <div>
            {curriculumData.map((curriculum) => (
              <div key={curriculum.id}>
                <h3>{curriculum.courseName}</h3>
                <p><strong>Course Duration:</strong> {curriculum.courseDuration}</p>
                <ul>
                  {curriculum.curriculumContent.map((content, index) => (
                    <li key={index}>{content}</li>
                  ))}
                </ul>
                <button onClick={() => setSelectedCurriculum(curriculum.id)}>Download Curriculum</button>
                {selectedCurriculum === curriculum.id && (
                  <div>
                    <p>Click the following button to download the curriculum data:</p>
                    <button onClick={() => handleDownload(curriculum.id)}>Download {curriculum.courseName} Curriculum</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div></div></div>

  );
};

export default PastCurriculum;