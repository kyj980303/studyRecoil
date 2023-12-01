import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { CartItemAom } from "../recoil/CartItemAtom";

const Li = styled.li`
  border: 1px solid #525252;
  border-radius: 10px;
  width: 14%;
  height: 340px;
  padding: 0 1%;
  list-style: none;
  float: left;
  margin: 30px;
  @media (max-width: 1600px) {
    width: 18%;
  }
`;
const IceImage = styled.img`
  width: 90%;
  margin-left: 13px;
`;
const Name = styled.p`
  font-size: 1.2rem;
  width: 100%;
`;
const Price = styled.span`
  float: right;
  font-size: 1rem;
`;

const CartBtn = styled.button`
  width: 100%;
  height: 30px;
  cursor: pointer;
`;

export default function List({ img, name, price }) {
  const navigate = useNavigate();
  const data = { img, name, price };
  const [cartItem, setCartItem] = useRecoilState(CartItemAom);

  // 이미 담겨있는지 확인
  // findIndex는 조건에 만족하는 index값을 리턴하고 조건에 만족하지 않으면 -1을 리턴한다.
  const isAlreadyInCart =
    cartItem.findIndex((item) => item.name === name) !== -1;

  const addCart = () => {
    navigate("/cart");
    if (!isAlreadyInCart) {
      setCartItem((prev) => [...prev, data]);
    }
  };

  return (
    <Li>
      <IceImage src={img}></IceImage>
      <Name>
        {name}
        <Price>{price}원</Price>
      </Name>
      <CartBtn onClick={addCart}>장바구니에 담기</CartBtn>
    </Li>
  );
}
