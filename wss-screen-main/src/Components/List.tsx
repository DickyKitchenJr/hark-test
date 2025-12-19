import { useState, useCallback } from "react";
import IndividualItem from "./IndividualItem";

type Item = {
  name: string;
  color: string;
};

interface ListProps {
  items: Item[];
}

const List: React.FC<ListProps> = ({ items }) => {
  const [selectedText, setSelectedText] = useState<string[]>([]);

  const handleCheckboxChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = event.target;

      setSelectedText((prev) =>
        checked ? [...prev, value] : prev.filter((text) => text !== value)
      );
    },
    []
  );

  return (
    <>
      <p>{selectedText.join(", ")}</p>
      <div className="List">
        {items.map((item) => (
          <IndividualItem
            key={item.name}
            name={item.name}
            color={item.color}
            checked={selectedText.includes(item.name)}
            onChange={handleCheckboxChange}
          />
        ))}
      </div>
    </>
  );
};

export default List;
