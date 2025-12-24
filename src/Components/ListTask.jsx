import React, { useState } from 'react';

export default function ListTask() {
  const play = ["first play", "second play", "third flow", "fourth play", "fifth play"];
  const [checkedItems, setCheckedItems] = useState({});
  const [copyArr, setCopyArr] = useState(play);

  const handleDelete = (index) => {
    const modifiedData = copyArr.filter((_, i) => i !== index);
    setCopyArr(modifiedData);

    // Remove the deleted item from checkedItems state
    const newCheckedItems = { ...checkedItems };
    delete newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const handleCheckboxChange = (index, isChecked) => {
    setCheckedItems({ ...checkedItems, [index]: isChecked });
  };

  return (
    <>
      {copyArr.map((item, index) => (
        <div key={index}>
          <li>
            <input
              type="checkbox"
              checked={!!checkedItems[index]}
              onChange={(e) => handleCheckboxChange(index, e.target.checked)}
            />
            {item}
            <button
              onClick={() => handleDelete(index)}
              disabled={!checkedItems[index]}
            >
              Delete
            </button>
          </li>
        </div>
      ))}
    </>
  );
}
