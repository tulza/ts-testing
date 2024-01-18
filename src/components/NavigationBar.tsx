import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import ThemePickerMenu from "./ThemePickerMenu";

type NavBarProps = {
  className?: string;
};

const NavigationBar = ({ className }: NavBarProps) => {
  const [bar, setBar] = useState({
    width: 0,
    offsetX: 0,
  });
  const [isHovering, setHover] = useState<boolean>(false);

  return (
    <div
      className={clsx(
        `${className}`,
        "flex h-20 w-full items-center justify-center justify-around bg-element",
      )}
    >
      <div>website logo here</div>
      {/* nav buttons */}
      <div
        className="relative flex gap-4"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <NavButton set={setBar} text="these" />
        <NavButton set={setBar} text="are" />
        <NavButton set={setBar} text="buttons" />
        <motion.div
          className="absolute bottom-0 z-10 h-0.5 rounded-full bg-white"
          animate={{
            width: bar.width,
            left: bar.offsetX,
            opacity: isHovering ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
      </div>
      <div>
        <ThemePickerMenu />
      </div>
    </div>
  );
};

type ButtonProps = {
  text: string;
  set: React.Dispatch<React.SetStateAction<{ width: number; offsetX: number }>>;
};
const NavButton = ({ text, set }: ButtonProps) => {
  const handleHover = (event: any) => {
    set({ width: event.target.offsetWidth, offsetX: event.target.offsetLeft });
  };
  return (
    <div
      className="button cursor-pointer select-none bg-background p-4 px-8"
      onMouseEnter={handleHover}
    >
      {text}
    </div>
  );
};

export default NavigationBar;
