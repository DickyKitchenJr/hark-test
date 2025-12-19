import React from "react";

type IndividualItemProps = {
  name: string;
  color: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const IndividualItem = React.memo(
  ({ name, color, checked, onChange }: IndividualItemProps) => {
    return (
      <label htmlFor={name} className={`List__item List__item--${color}`}>
        {name}
        <input
          id={name}
          name={name}
          type="checkbox"
          value={name}
          checked={checked}
          onChange={onChange}
        />
      </label>
    );
  }
);

export default IndividualItem;
