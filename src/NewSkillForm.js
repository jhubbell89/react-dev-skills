import {useState} from 'react';

function NewSkillList() {
    const [skill, setSkill] = useState()
    const [leval, setLevel] = useState()
    return (
        <form className="NewSkillForm">
            <label>Skill </label>
            <input type="text" id='skill' name='skill'></input>
            <label>Level: </label>
            <select name='level' id='level'>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button type="submit">ADD SKILL</button>
        </form>
    )
}

export default NewSkillList