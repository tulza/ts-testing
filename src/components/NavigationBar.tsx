import clsx from "clsx";
import useNavHoverBar from "./hooks/useNavHover";
import { motion } from "framer-motion";
import { useEffect } from "react";

type NavBarProps = {
  className?: string;
};

const NavigationBar = ({ className }: NavBarProps) => {
  const [bar] = useNavHoverBar();
  useEffect(() => {
    console.log(bar.width);
  }, [bar]);
  return (
    <div
      className={clsx(
        `${className}`,
        "flex h-20 w-full items-center justify-center bg-element",
      )}
    >
      <div className="relative flex gap-4">
        <Button text="these" />
        <Button text="are" />
        <Button text="buttons" />
        <motion.div
          className="absolute bottom-0 z-10 h-1 bg-white"
          animate={{ width: bar.width }}
        >
          dsds
        </motion.div>
      </div>
    </div>
  );
};

type ButtonProps = {
  text: string;
};
const Button = ({ text }: ButtonProps) => {
  const [, setBar] = useNavHoverBar();
  const handleHover = (e: any) => {
    setBar({ width: e.target.offsetWidth, offsetx: e.target });
  };
  return (
    <div className="bg-background p-4 px-8" onMouseEnter={handleHover}>
      {text}
    </div>
  );
};

export default NavigationBar;
