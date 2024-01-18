import clsx from "clsx";
type NavBarProps = {
  className?: string;
};

const NavigationBar = ({ className }: NavBarProps) => {
  return <div className={clsx({ className }, "h-10 w-full bg-element")}></div>;
};

export default NavigationBar;
