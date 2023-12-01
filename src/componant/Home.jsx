import { Link } from "react-router-dom";
import styled from "styled-components";
import List from "../componant/List";
import iceCreamImage from "../static/img/ice.png";
import iceCreamImage2 from "../static/img/ice2.png";
import iceCreamImage3 from "../static/img/ice3.png";
import iceCreamImage4 from "../static/img/ice4.png";
import iceCreamImage5 from "../static/img/ice5.png";
import iceCreamImage6 from "../static/img/ice6.png";
import iceCreamImage7 from "../static/img/ice7.png";
import iceCreamImage8 from "../static/img/ice8.png";
import iceCreamImage9 from "../static/img/ice9.png";

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
const IceList = styled.div`
  margin-top: -20px;
`;
const Ul = styled.ul`
  width: 90%;
  height: 85vh;
  margin: 0 auto;
  padding: 0;
  :not(:nth-of-type(1), :nth-of-type(6)) {
    margin-left: 2.2%;
  }
`;

export default function Home() {
  return (
    <CartContainer>
      <Title>
        <Main to="/">아이스크림</Main>
        <Cart to="/cart">장바구니</Cart>
      </Title>
      <IceList>
        <Ul>
          <List img={iceCreamImage} name="체리쥬빌레" price="4500"></List>
          <List img={iceCreamImage2} name="민트초코" price="3500"></List>
          <List img={iceCreamImage3} name="바닐라" price="3000"></List>
          <List img={iceCreamImage4} name="엄마는외계인" price="4500"></List>
          <List img={iceCreamImage5} name="오즈의마법사" price="3500"></List>
          <List img={iceCreamImage6} name="레인보우샤베트" price="4500"></List>
          <List img={iceCreamImage7} name="요거트" price="3000"></List>
          <List img={iceCreamImage8} name="녹차" price="4500"></List>
          <List img={iceCreamImage9} name="오레오" price="3500"></List>
        </Ul>
      </IceList>
    </CartContainer>
  );
}
