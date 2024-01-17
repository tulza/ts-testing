import { useSearchParams } from "react-router-dom";

const num: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Home = () => {
  const term = "num";
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get(term) || "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const otherParams: any = Object.fromEntries(
      new URLSearchParams(location.search),
    );
    const num = e.target.value;
    if (num) {
      otherParams.num = num;
      setSearchParams(otherParams);
    } else {
      const { num, ...params } = otherParams;
      setSearchParams(params);
    }
  };

  return (
    <div>
      <input className="bg-element px-10 py-4" onChange={handleChange} />
      <div className="w-max">
        search term '{term}': {searchTerm}
      </div>
      <ul>
        is lt or eq to
        {num
          .filter((n) => n >= Number(searchTerm))
          .map((n, i) => {
            return <ul key={i}>{n}</ul>;
          })}
      </ul>
    </div>
  );
};

export default Home;
