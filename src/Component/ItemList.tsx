import { motion } from "framer-motion";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const ItemList = () => {
  //query params
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("items") || "";
  const handleAdd = () => {
    const otherParams: any = Object.fromEntries(
      new URLSearchParams(location.search),
    );
    otherParams.items = [...items, value].join("_");
    setItems([...items, value]);
    setSearchParams(otherParams);
    setValue("");
  };
  const [items, setItems] = useState(searchTerm.split("_"));
  const [value, setValue] = useState("");
  return (
    <div>
      <div>type here to add item and enter</div>
      <input
        className="bg-element py-4 pr-10"
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            handleAdd();
          }
        }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <div className="w-max">search term 'items': {searchTerm}</div>
      <motion.ul>
        {items.map((item, index) => (
          <ListItems item={item} key={index} />
        ))}
      </motion.ul>
    </div>
  );
};

const ListItems = ({ item }: { item: string }) => {
  return <div className="w-max bg-element p-4">{item}</div>;
};

export default ItemList;
