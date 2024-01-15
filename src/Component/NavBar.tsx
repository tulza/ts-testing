import { useNavigate } from "react-router";

const NavBar = () => {
  return (
    <div className=" mb-4 flex h-[105px] w-[500px] items-center gap-4 bg-element">
      nav
      <Button name="home" to="/home" />
      <Button name="other" to="/other" />
      <Button name="/" to="/" />
    </div>
  );
};
type buttonProps = {
  name: string;
  to: string;
};
const Button = ({ name, to }: buttonProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="h-[50%] w-[100px] bg-background"
      onClick={() => {
        navigate({ pathname: to, search: location.search });
      }}
    >
      to {name}
    </div>
  );
};

export default NavBar;
