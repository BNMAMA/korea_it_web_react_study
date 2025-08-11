import { useState } from "react";

function InputState4() {
    const inputValueEmpty = {
        productName: "",
        price: "",
        amount: "",
    };

    const [products, setProducts] = useState([]);
    const [inputValue, setInputValue] = useState(inputValueEmpty);

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setInputValue((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        })
    };

    const onClickHandler = () => {
        // setProducts((prev) => {
        //     const newArray = prev;
        //     newArray.push(inputValue);
        //     return newArray;
        // });
        //push는 원본 배열을 직접 수정하기 때문에 리액트의 불변성을 위해
        //리액트는 상태의 주소값이 바뀌어야 변화를 감지하는데 push는 주소값을 바꾸지 않기 때문에
        //재렌더링이 일어나지 않거나 예기치 않은 버그가 발생할 수 있다.

        setProducts((pre) => [...pre, inputValue]);
        setInputValue(inputValueEmpty);
    }



  return (
   <div>
      {/* 입력 */}
      <div>
        <label htmlFor="productName">상품명</label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={inputValue.productName}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="price">가격</label>
        <input
          type="text"
          id="price"
          name="price"
          value={inputValue.price}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="amount">수량</label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={inputValue.amount}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <button onClick={onClickHandler}>확인</button>
      </div>
      {/* 출력 */}
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
          {/* products 배열을 순회하며 각 상품 객체를 tr태그로 변환한다 */}
          {products.map((product, index) => (
            // 리액트에서 목록을 렌더링할 때는 각 항목을 구분할 수 있는 고유한 key를 반드시 제공해야한다.
            // key는 리액트가 어떤 항목이 변경, 추가, 삭제 되었는지 효율적으로 파악하는데 사용된다.
            // 실제 db에서의 id를 사용하는것이 좋지만 없다면 index로 사용해도 좋다.
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InputState4;
