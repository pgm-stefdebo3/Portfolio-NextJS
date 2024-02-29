import Skill from './Skill';
import { skillsData } from '../../data';

const SkillList = () => {
    return (
        <ul className={`skill__list`}>
          {skillsData.map((skill) => <Skill skill={{...skill, key: `skill_${skill.name}`}} key={`skill_${skill.name}`}/>)}
        </ul>
    );
};

export default SkillList;