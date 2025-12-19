import { useState } from "react";

type Item = {
  name: string;
  color: string;
};

interface ListProps {
  items: Item[];
}

const List: React.FC<ListProps> = ({ items }) => {
  const [selectedText, setSelectedText] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedText([...selectedText, value]);
    }
    if (!checked) {
      setSelectedText((prev) => prev.filter((text) => text !== value));
    }
  };

  return (
    <>
      {console.log("Rendering List component")}
      <p>{selectedText.join(", ")}</p>
      <div className="List">
        {items.map((item) => (
          <label
            htmlFor={item.name}
            key={item.name}
            className={`List__item List__item--${item.color}`}
          >
            {item.name}
            <input
              name={item.name}
              id={item.name}
              type="checkbox"
              key={item.name}
              value={item.name}
              onChange={handleCheckboxChange}
            />
          </label>
        ))}
      </div>
    </>
  );
};

export default List;
