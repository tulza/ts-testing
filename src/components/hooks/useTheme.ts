import { useEffect, useState } from "react";

const useTheme = () => {
  const [currTheme, setTheme] = useState<string>("default");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currTheme);
  }, [currTheme]);

  return [currTheme, setTheme] as const;
};

export default useTheme;
