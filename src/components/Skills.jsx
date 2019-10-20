import React from 'react';
import styled from 'styled-components';

const skills = ['Ruby', 'Rails', 'JavaScript ES6', 'HTML5', 'CSS/SCSS', 'Heroku', 'PostgreSQL', 'GitHub', 'git', 'DNS', 'Teamwork', 'Collaboration', 'Work Ethic', 'Enthusiasm', 'Project Management'];

const SkillsSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: top;
`;

const Skill = styled.div`
  width: 50%;
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
