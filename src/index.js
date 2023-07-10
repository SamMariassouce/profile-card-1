import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import image from './images/fairy.jpeg';

function App() {
  return (
    <div className="card">
      <Hero />
      <div className="data">
        <Title />
        <Description />
        <SkillList />
        <Skill />
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
      <Skill skill="React" emoji="👍" color="#FF033E" />
      <Skill skill="Html + Css" emoji="🤑" color="#E25822" />
      <Skill skill="Javascript" emoji="🏴‍☠️" color="#7CB9E8" />
      <Skill skill="Angular" emoji="👎" color="#32de84" />
      <Skill skill="Jquery" emoji="👎" color="#EE82EE" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
