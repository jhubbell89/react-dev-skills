
import {useState} from 'react';
import './App.css';
import './NewSkillForm.css'
import './SkillListItem.css'
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';




function App() {
  
  // const skills = [
  //   { name: "HTML", level: 5 },
  //   { name: "CSS", level: 3 },
  //   { name: "JavaScript", level: 4 },
  //   { name: "Python", level: 2 },
  // ];

  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ])

  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <NewSkillForm />
    </div>
  );
}

export default App;
