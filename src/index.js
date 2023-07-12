import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import image from './images/fairy.jpeg';

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
];

function App() {
  return (
    <div className="card">
      <Hero />
      <div className="data">
        <Title />
        <Description />
        <SkillList />
        {/* Ò */}
      </div>
    </div>
  );
}

function Hero() {
  return <img src={image} className="avatar" alt="fairy dev" />;
}
function Title() {
  return <h2 className="title">Anita FartingHouse</h2>;
}
function Description() {
  return (
    <p className="data">
      Hi there, My name is Anita fartingHouse. I'm a web developer and a joker @
      thescaryFairy.com. By the way, What happens when a strawberry gets run
      over crossing the street? Traffic jam!{' '}
    </p>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && '🥺'}
        {level === 'intermediate' && '👍'}
        {level === 'advanced' && '💪🏻'}
      </span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
