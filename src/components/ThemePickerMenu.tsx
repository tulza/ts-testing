import { motion } from "framer-motion";

const ThemePickerMenu = () => {
  return (
    <motion.div
      className="flex cursor-pointer bg-background p-4 pr-6"
      whileHover="hover"
    >
      Themes{" "}
      <motion.div
        className="pl-4"
        variants={{
          hover: {
            rotate: "45deg",
            y: -10,
          },
        }}
      >
        ◢
      </motion.div>
    </motion.div>
  );
};

export default ThemePickerMenu;
