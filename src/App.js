import React from 'react';
import logo from './logo.svg';
import Button from './Components/Button';
import Details from './Components/Details';
import ProjectDetails from './Components/ProjectDetails';
import './App.css';

const skills = ['Ruby', 'Rails', 'HTML5', 'CSS/SCSS', 'JavaScript ES6', 'PostgreSQL', 'Heroku', 'GitHub', 'git', 'DNS', 'Relationship Management', 'Project Management', 'Collaboration', 'Teamwork', ' Work Ethic', 'Positive Attitude'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-personal">
          <h1>
            Andreea Capalnas
          </h1>
          <h2>
            Junior Full-Stack Developer | London
          </h2>
          <p>Recent graduate of the Le Wagon coding bootcamp lots more text here about what and how
          </p>
          <p>
          Recent graduate of the Le Wagon coding bootcamp lots more text here about what and how
          </p>
        </div>
        <Button />
        <div className="Work-skills">
          <Details header="Relevant Experience">
            <p><strong>Le Wagon Full-stack Ruby on Rails Bootcamp</strong> - 9 week intensive coding bootcamp learning and coding with Ruby on Rails, HTML5, CSS/SCSS, Bootstrap, JavaScript ES6, jQuery, SQL, PostgreSQL, MVC, OOP, git, GitHub and Heroku. During the course I completed the several projects, listed in the Projects section.</p>
          </Details>
          <Details header="Projects">
            <ProjectDetails 
              url="http://www.plantis.co"
              projectName="Plantis"
              text="A web application created as a collaborative project and designed to help people easily look after their house plants by reminding them when each one requires watering. In addition, it comprises of a motivational reward system along with a social feature where you can see and follow other people and their plants."
            />
            <ProjectDetails 
              url="http://www.plantis.co"
              projectName="Plantza"
              text="In a team of four, within a week we launched an AirBnB like web app for renting/letting house plants."
            />
          </Details>
          <Details header="Skills">
            <p>{skills.map((skill, i) => `${skill} ${(i === skills.length - 1) ? '' : ' | '}`)}</p>
          </Details>
        </div>
        <div className="Created-with-react">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Created through learning with React</p>
        </div>
      </header>
    </div>
  );
}

export default App;
