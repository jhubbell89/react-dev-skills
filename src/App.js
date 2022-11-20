
import {useState} from 'react';
import './App.css';
import SkillList from './SkillList';
import './NewSkillForm.css'

export default function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ])
  const [newSkill, setNewSkill] = useState('')
  function handleSkillChange(evt) {
    const newFormData = { ...newSkill, [evt.target.name]: evt.target.value };
    setNewSkill(newFormData)
   console.log(newFormData)
  }
  
  const handleAddSkill = (event) => {
    event.preventDefault()
    setSkills([newSkill, ...skills])
    setNewSkill({
      name: '',
      level: 3
    })
  }
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <hr />
      <form onSubmit={handleAddSkill} className="NewSkillForm" >
            <label>Skill </label>
            <input
              id='name' 
              name='name'
              
              onChange={handleSkillChange}
              required />
            <label>Level: </label>
            <select 
              name='level' 
              id='level'
              onChange={handleSkillChange}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button type='submit'>ADD SKILL</button>
        </form>
        <h3>{newSkill.name} and {newSkill.level}</h3>
    </div>
  );
}