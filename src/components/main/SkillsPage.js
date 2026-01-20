import "./SkillPage.scss";
import SkillsDate from "../../assets/data/Skills.json";

const SkillsPage = () => {
  return (
    <section id="skills">
      <div className="skills-zip">
        <h3>Skills</h3>
        <div className="skills-card">
          <ul>
            {SkillsDate.map((item, idx) => {
              return (
                <li key={idx} className="skills-item">
                  <div className="skill-icon">
                    <img
                      src={require(`../../assets/icons/${item.image}`)}
                      alt={item.category}
                    />
                  </div>
                  <p className="skill-category">{item.category}</p>
                  <ul className="skill-tags">
                    {Object.keys(item)
                      .filter((key) => key.startsWith("sub") && item[key])
                      .map((subKey) => (
                        <li key={subKey}>{item[subKey]}</li>
                      ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
