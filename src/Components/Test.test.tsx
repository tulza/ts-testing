import Card from "../Card";

const Test = () => {
  document.documentElement.setAttribute("data-theme", "cold");
  return (
    <div className="flex h-full w-full flex-col justify-center">
      <Card post={"hi"} />
      <Card post={"hi"} />
      <Card post={"hi"} />
      <Card post={"hi"} />
    </div>
  );
};

export default Test;
