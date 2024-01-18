import { useEffect, useState } from "react";

const useNavHoverBar = () => {
  const [Bar, setBar] = useState({
    width: 0,
    offsetx: 0,
  });
  useEffect(() => {
    console.log(Bar);
  }, [Bar]);
  return [Bar, setBar] as const;
};

export default useNavHoverBar;
