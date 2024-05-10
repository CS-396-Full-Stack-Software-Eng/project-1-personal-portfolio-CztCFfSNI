import { motion } from "framer-motion";

const TechIcon = ({ app, index, total }) => {
  return (
    <motion.img
      key={app.id}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="absolute w-12 h-12"
      style={{
        left: `calc(50% + ${Math.sin((index * 2 * Math.PI) / total) * 150}px)`,
        top: `calc(50% - ${Math.cos((index * 2 * Math.PI) / total) * 150}px)`,
        translateX: "-50%",
        translateY: "-50%",
      }}
      src={app.icon}
      alt={app.title}
      width={app.width}
      height={app.height}
    />
  );
};

export default TechIcon;
