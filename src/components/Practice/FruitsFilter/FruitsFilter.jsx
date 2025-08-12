import { useEffect, useState } from "react";

const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Grape",
  "Orange",
  "Strawberry",
  "Watermelon",
];

function FruitsFilter() {
  const [filteredFruits, setFilteredFruits] = useState(fruits); // 필터된 결과
  const [inputValue, setInputValue] = useState(""); // 검색어

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const newFilterFruits = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(inputValue.toLowerCase())
    );
    console.log("새로운 필터된 배열:", newFilterFruits);
    setFilteredFruits(newFilterFruits);
    
    console.log("마운트 됨");

    return () => {
      console.log("언마운트됨");
    };
  }, [inputValue]);

  return (
    <div>
      <input type="text" onChange={onChangeHandler} placeholder="Search fruits..." />
      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitsFilter;



//input 하나 만들고 ul하나 만들고 input에 과일 이름을 검색해서 필터를 거친 뒤에 li로 출력
//최초에는 전체 과일을 보여주고 내가 입력할 때마다 즉시 filter를 거쳐서 li로 보여주기