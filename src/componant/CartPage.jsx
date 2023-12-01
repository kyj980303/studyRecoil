import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { CartItemAom } from "../recoil/CartItemAtom";

const CartContainer = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: auto;
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  border-bottom: 1px solid black;
  padding: 10px 120px;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 1600px) {
    padding: 10px 100px;
  }
  margin-top: 0px;
`;
const Cart = styled(Link)`
  font-size: 1rem;
  float: right;
  position: relative;
  right: 0.5%;
  top: 9px;
  color: black;
  text-decoration: none;
  @media (max-width: 1600px) {
    right: 2.1%;
  }
`;
const Main = styled(Link)`
  color: black;
  text-decoration: none;
`;
const Li = styled.li`
  border: 1px solid #525252;
  border-radius: 10px;
  width: 95%;
  height: 140px;
  padding: 0 1%;
  list-style: none;
  margin: 30px;
  @media (max-width: 1600px) {
    width: 100%;
    height: 122px;
  }
`;
const IceImage = styled.img`
  width: 19%;
  margin-left: 0px;
`;
const Name = styled.span`
  font-size: 1.3rem;
  position: relative;
  top: -70px;
  font-weight: bold;
  @media (max-width: 1600px) {
    top: -60px;
  }
  p {
    font-size: 1rem;
    position: relative;
    left: 19%;
    top: -5px;
    font-weight: lighter;
    @media (max-width: 1600px) {
      top: -10px;
    }
  }
`;
const Price = styled.span`
  float: right;
  font-size: 1.2rem;
  position: relative;
  top: -80px;
  right: 3%;
`;
const IceList = styled.div`
  margin-top: -20px;
`;
const PageTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 31.5%;
  margin-top: 60px;
`;
const Ul = styled.ul`
  width: 40%;
  height: auto;
  margin: 0 auto;
  padding: 0;
`;
const P = styled.p`
  text-align: center;
  margin-top: 13%;
  font-size: 1.1rem;
`;
const TotalNum = styled.p`
  width: 97%;
  text-align: right;
  margin-left: 29px;
  @media (max-width: 1600px) {
    position: relative;
    left: 12%;
  }
`;
const TotalPrice = styled.p`
  width: 97%;
  text-align: right;
  margin-left: 29px;
  position: relative;
  left: 9%;
  top: -10px;
  @media (max-width: 1600px) {
    position: relative;
    left: 12%;
    top: -10px;
  }
`;
export default function CartPage() {
  // 리코일에 담아놓은 값 꺼냄
  const cartItem = useRecoilValue(CartItemAom);

  let totalPrice = 0;
  cartItem.map((item) => (totalPrice += Number(item.price)));

  return (
    <CartContainer>
      <Title>
        <Main to="/">아이스크림</Main>
        <Cart to="/cart">장바구니</Cart>
      </Title>
      <IceList>
        <PageTitle>장바구니</PageTitle>
        <Ul>
          {cartItem.length > 0 ? (
            cartItem.map((item) => {
              return (
                <Li>
                  <IceImage src={item.img}></IceImage>
                  <Name>
                    {item.name}
                    <p>{item.name}가 장바구니에 담겼습니다.</p>
                    <Price>{item.price}원</Price>
                  </Name>
                </Li>
              );
            })
          ) : (
            <P>장바구니가 비어있습니다.</P>
          )}

          <TotalNum>총 갯수: {cartItem.length}</TotalNum>
          <TotalPrice>총 가격: {totalPrice}</TotalPrice>
        </Ul>
      </IceList>
    </CartContainer>
  );
}
