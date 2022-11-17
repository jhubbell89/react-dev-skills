
function SkillListItem ({skill}) {
    return (
        <li className="SkillListItem">
        {skill.name} - Level {skill.level}
        </li>
    )
}

export default SkillListItem