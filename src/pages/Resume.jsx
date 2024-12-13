// import './Resume.css';

export default function Resume() {
  return (
    <div>
      <h1 className='resume-header'>Resume</h1>
      {/* Add resume image later on */}
      {/* <div><img className = 'resumeImage' src="/assets/images/resume-screenshot.png" alt="A professional resume."/></div> */}
      <div>
      <a className='resume' href="/assets/documents/OldResume.pdf" download="OldResume.pdf"
            target="_blank"
            rel="noopener noreferrer">Download Resume PDF</a>
      <p className='resume'>Skills: HTML, CSS, React, JavaScript, Insomnia, Render, Github, MongoDb, Mongoose, Node.js, TS, Express, SQL, Python</p>
      </div>
    </div>
  );
}