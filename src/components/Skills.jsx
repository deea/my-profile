import React from 'react';
import styled from 'styled-components';

const skills = ['Ruby', 'Heroku', 'Teamwork', 'Rails', 'PostgreSQL', 'Collaboration', 'JavaScript ES6', 'GitHub', 'Work Ethic', 'CSS/SCSS', 'git', 'Enthusiasm', 'HTML5', 'DNS', 'Project Management'];

const SkillsSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: top;
`;

const Skill = styled.div`
  width: 33%;
  overflow: hidden;
`;

const Skills = () => (
  <SkillsSection>
    {skills.map((skill) => (
      <Skill key={skill}>
        {skill}
      </Skill>
    ))}
  </SkillsSection>
);

export default Skills;
