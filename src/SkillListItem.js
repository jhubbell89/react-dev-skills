function SkillListItem ({ skill }) {
    return (
        <li className="SkillListItem">
        {skill.name} - level {skill.level}
        </li>
    )
}

export default SkillListItem