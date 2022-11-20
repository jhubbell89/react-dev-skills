import SkillListItem from './SkillListItem';

export default function SkillList({skills}) {
    const skillListItem = skills.map((skill, idx) => (
        <SkillListItem key={idx} skill={skill} />
    ));
    return <ul>{skillListItem}</ul>;
}

