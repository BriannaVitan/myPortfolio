import React from 'react';
import vehicleProgramBuilder from '../asset/vehicleProgramBuilder.png';
import weatherForecast from '../asset/weatherApp.png'
import githubCandidate from '../asset/githubCandidateSearch.png';
import socialApi from '../asset/socialApi.png';
import jobSearch from '../asset/jobSearchBuddy.png';
import myLibrary from '../asset/myLibrary.png';

// Array of projects to display on the Portfolio page
const projects = [
  {
    name: "vehicleProgramBuilder",
    githubUrl: "https://github.com/BriannaVitan/vehicleProgramBuilder.git",
    deployedUrl: "not deployed",
    image: vehicleProgramBuilder
  },
  {
    name: "weatherForecastDashboard",
    githubUrl: "https://github.com/BriannaVitan/weatherForecastDashboard.git",
    deployedUrl: "https://weather-forecast-pu4w.onrender.com",
    image: weatherForecast
  },
  {
    name: "githubCandidateSearch",
    githubUrl: "https://github.com/BriannaVitan/githubCandidateSearch.git",
    deployedUrl: "https://github-candidate.netlify.app/",
    image: githubCandidate
  },
  {
    name: "socialNetworkAPI",
    githubUrl: "https://github.com/BriannaVitan/socialNetworkAPI.git",
    deployedUrl: "not deployed",
    image: socialApi
  },
  {
    name: "jobSearchBuddy",
    githubUrl: "https://github.com/BriannaVitan/jobSearchBuddy.git",
    deployedUrl: "https://job-search-buddy.onrender.com",
    image: jobSearch
  },
  {
    name: "myLibraryBookie",
    githubUrl: "https://github.com/BriannaVitan/myLibraryBookie.git",
    deployedUrl: "https://bookie2-1.onrender.com",
    image: myLibrary
  }
];

const Project = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">My Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>{" "}
                  |{" "}
                  {project.deployedUrl !== "not deployed" ? (
                    <a
                      href={project.deployedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deployed App
                    </a>
                  ) : (
                    <span>Not Deployed</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;


// import React from 'react';
// import vehicleProgramBuilder from '../asset/8ball-image.png';
// import WeatherForecast from '../asset/kWeatherForecast.png';
// import githubCandidate from '../asset/readmeGenerator.png';
// import socialNetwork from '../asset/image.png';
// import jobSearch from '../asset/towtruck.jpg';
// import myLibrary from '../asset/ComingSoon.jpg';

// // The six projects that should be portrayed on the Portfolio page
// const Project = () => {
//   const projects = [{
//     name: "vehicleProgramBuilder",
//     githubUrl: "https://github.com/BriannaVitan/vehicleProgramBuilder.git",
//     deployedUrl: "not deployed",
//     image: vehicleProgramBuilder
//   }, {
//     name: "weatherForecastDashboard",
//     githubUrl: "https://github.com/BriannaVitan/weatherForecastDashboard.git",
//     deployedUrl: "https://weather-forecast-pu4w.onrender.com",
//     image: WeatherForecast
//   }, {
//     name: "githubCandidateSearch",
//     githubUrl: "https://github.com/BriannaVitan/githubCandidateSearch.git",
//     deployedUrl: "https://github-candidate.netlify.app/",
//     image: githubCandidate
//   }, {
//     name: "socialNetworkAPI",
//     githubUrl: "https://github.com/BriannaVitan/socialNetworkAPI.git",
//     deployedUrl: "not deployed",
//     image: socialNetwork
//   }, {
//     name: "jobSearchBuddy",
//     githubUrl: "https://github.com/BriannaVitan/jobSearchBuddy.git",
//     deployedUrl: "https://job-search-buddy.onrender.com",
//     image: jobSearch
//   }, {
//     name: "myLibraryBookie",
//     githubUrl: "https://github.com/BriannaVitan/myLibraryBookie.git",
//     deployedUrl: "https://bookie2-1.onrender.com",
//     image: myLibrary
//   }
//   ]
  
//   return (
//     <div className="container my-5">
//       <h1 className="text-center mb-4">My Projects</h1>
//       <div className="row">
//         {projects.map((project, index) => (
//           <div key={index} className="col-md-4 mb-4">
//             <div className="card h-100">
//               <img src={project.image} className="card-img-top" alt={project.name} style={{ height: '200px', objectFit: 'cover' }} />
//               <div className="card-body">
//                 <h5 className="card-title">{project.name}</h5>
//                 <p className="card-text">
//                   <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
//                   {project.deployedUrl !== "not deployed" ? (
//                     <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Deployed App</a>
//                   ) : (
//                     <span>Not Deployed</span>
//                   )}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Project;




