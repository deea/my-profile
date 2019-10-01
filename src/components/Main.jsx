import React from 'react';
import styled from 'styled-components';
import {
  Summary, Details, ProjectDetails, Skills,
} from './index';

const projects = [
  {
    url: 'http://www.plantis.co',
    name: 'Plantis',
    text: 'A web application created as a collaborative project and designed to help people easily look after their house plants by reminding them when each one requires watering. In addition, it comprises of a motivational reward system along with a social feature where you can see and follow other people and their plants. Click here for screenshots.',
  },
  {
    url: 'https://plantza-alan1010010.herokuapp.com',
    name: 'Plantza',
    text: 'In a team of four, within a week we launched an AirBnB like web app for renting/letting house plants.',
  },
];

const AppMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const WorkSkills = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 10px;
`;

const Main = () => (
  <AppMain>
    <Summary
      text="Within the past three years working as Account Manager in a number of tech companies, I have developed a strong interest in being directly involved in the technical side of the product. I decided to take the next step and completed an intensive bootcamp to become a Full-Stack Developer."
    />
    <Summary
      text="Having enjoyed it immensely, I am now looking to work as part of a great team to continue my journey, with a keen interest in learning new technologies, programming languages and frameworks."
    />
    <WorkSkills>
      <Details header="Relevant Experience">
        <p>
          <strong>Le Wagon Full-stack Ruby on Rails Bootcamp </strong>
          - 9 week intensive coding bootcamp learning and coding with Ruby on Rails, HTML5, CSS/SCSS, Bootstrap, JavaScript ES6, jQuery, SQL, PostgreSQL, MVC, OOP, git, GitHub and Heroku. During the course I completed the several projects, listed in the Projects section.
        </p>
      </Details>
      <Details header="Projects">
        {projects.map((project) => (
          <ProjectDetails
            key={project.name}
            url={project.url}
            name={project.name}
            text={project.text}
          />
        ))}
      </Details>
      <Details header="Skills">
        <Skills />
      </Details>
    </WorkSkills>
  </AppMain>
);

export default Main;
