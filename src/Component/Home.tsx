import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const num: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("name") || "";

  const handleChange = (e) => {
    const name = e.target.value;
    if (name) {
      setSearchParams({ name: name });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      <input className="bg-element px-10 py-4" onChange={handleChange} />
      <div className="w-max">search term 'name': {searchTerm}</div>
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
