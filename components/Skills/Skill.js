const Skill = ({skill}) => {
  
    return (
      <li className="skill" key={skill.key}>
        <div className="Skill__container">
          {skill.component}
          {skill.name}
        </div>
      </li>
    );
};

export default Skill;