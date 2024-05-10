import AboutTab from "../atoms/AboutTab";

const AboutTabBar = ({ handleTabChange, tab }) => {
  return (
    <>
      <AboutTab
        selectTab={() => handleTabChange("education")}
        active={tab === "education"}
      >
        Education
      </AboutTab>
      <AboutTab
        selectTab={() => handleTabChange("courses")}
        active={tab === "courses"}
      >
        Courses
      </AboutTab>
      <AboutTab
        selectTab={() => handleTabChange("research")}
        active={tab === "research"}
      >
        Research
      </AboutTab>
      <AboutTab
        selectTab={() => handleTabChange("hobbies")}
        active={tab === "hobbies"}
      >
        Hobbies
      </AboutTab>
    </>
  );
};

export default AboutTabBar;
