function SkillList({ checkmark, skill }) {
  return (
    <span>
      <img src={checkmark} alt="checkmark icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
