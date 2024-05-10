import TechIcon from "../atoms/TechIcon";

const TechStack = ({ collabApps }) => {
  return (
    <ul>
      {collabApps.map((app, index) => (
        <TechIcon
          key={app.id}
          app={app}
          index={index}
          total={collabApps.length}
        />
      ))}
    </ul>
  );
};

export default TechStack;
