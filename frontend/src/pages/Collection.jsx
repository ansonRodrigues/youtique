import React from "react";

const Collection = () => {
  let a = 10;
  let b = [1, 2, 3, 4, 50];

  return (
    <div>
      Collection num {a}
      <div>
        {b.map((elem) => (
          <div key={elem}>{elem}</div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
