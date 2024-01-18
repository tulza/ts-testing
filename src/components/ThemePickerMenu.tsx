import { themes } from "@/data/themes";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import useTheme from "./hooks/useTheme";

const ThemePickerMenu = () => {
  const [isToggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <div
        className="flex cursor-pointer bg-background p-4 pr-6"
        onClick={() => setToggle(!isToggle)}
      >
        <span className="select-none">Themes</span>
        <motion.div
          className="select-none pl-4"
          animate={isToggle ? { rotate: "45deg", y: -10 } : {}}
        >
          ◢
        </motion.div>
      </div>
      {isToggle && <DropMenu className="" />}
    </>
  );
};
type DropMenuProps = {
  className?: string;
};
const DropMenu = ({ className }: DropMenuProps) => {
  const [setTheme] = useTheme();
  return (
    <div
      className={clsx(
        `${className}`,
        "absolute mt-2 grid h-max w-[200px] gap-2 bg-element py-2 outline outline-black",
      )}
    >
      {themes.map((theme) => (
        <div
          className="bg-element2 mx-2 cursor-pointer select-none rounded-lg pl-2"
          onClick={() => setTheme(theme.ThemeId)}
        >
          {theme.DisplayedName}
        </div>
      ))}
    </div>
  );
};

export default ThemePickerMenu;
