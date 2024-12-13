import React from 'react';
// Make sure to import the correct image file
import myPic from '../asset/myPic.png'; // Replace with the actual path

const AboutMe = () => {
  return (
    <div className="container">
        <h1>About Me</h1>
        <img src={myPic} alt="Brianna Vitan" width="200" height="300" />
        <p>
          Hello! My name is Brianna Vitan, and I have always had a passion for learning and adapting to new challenges. I graduated with a Bachelors degree in Chemistry in 2019, right after the COVID-19 pandemic began. During this transitional period, I pivoted into sales, where I quickly thrived. My ability to connect with people and find innovative solutions allowed me to excel in this field, but my curiosity and love for technology never waned. 
          <br />
          Driven by a lifelong interest in technology and gaming, I made the decision to pursue a career in web development. I recently graduated from Southern Methodist University’s intensive 3-month bootcamp, where I gained comprehensive experience in both front-end and back-end web development. This program has equipped me with the tools and skills necessary to build dynamic, user-friendly websites and applications.
          <br />
          I have always been well-rounded and eager to learn new skills. Whether it was solving complex chemistry problems or developing applications from scratch, my passion for growth and self-improvement has always driven me forward. I’m excited about the future of technology, and I am particularly passionate about how web development continues to shape the way we interact with the digital world.
        </p>
    </div>
  );
};

export default AboutMe;



// import React from 'react'
// import myImage from '';

// const AboutMe = () => {
//   return (
//     <div className="container">
//         <h1>About Me</h1>
//         <img src={myImage} alt="" width="300" height="400" />
//         <p>Hello! My name is Brianna Vitan, and I have always had a passion for learning and adapting to new challenges. I graduated with a Bachelor's degree in Chemistry in 2019, right after the COVID-19 pandemic began. During this transitional period, I pivoted into sales, where I quickly thrived. My ability to connect with people and find innovative solutions allowed me to excel in this field, but my curiosity and love for technology never waned. <span>&#40;</span>UCF<span>&#41;</span>.
//         Driven by a lifelong interest in technology and gaming, I made the decision to pursue a career in web development. I recently graduated from Southern Methodist University’s intensive 3-month bootcamp, where I gained comprehensive experience in both front-end and back-end web development. This program has equipped me with the tools and skills necessary to build dynamic, user-friendly websites and applications.

//         I have always been well-rounded and eager to learn new skills. Whether it was solving complex chemistry problems or developing applications from scratch, my passion for growth and self-improvement has always driven me forward. I’m excited about the future of technology, and I am particularly passionate about how web development continues to shape the way we interact with the digital world.
//         </p>
//     </div>
//   )
// }

// export default AboutMe