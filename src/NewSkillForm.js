
function NewSkillList() {
    return (
        <form className="NewSkillForm">
            <label>Skill </label>
            <input type="text" id='skill' name='skill'></input>
            <label>Level: </label>
            <select name='level' id='level'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <button type="submit">ADD SKILL</button>
        </form>
    )
}

export default NewSkillList