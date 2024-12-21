import styled from "styled-components";
import light_chip from "../../assets/icons/light-chip.svg";
import dark_chip from "../../assets/icons/dark-chip.svg";
import mastercard from "../../assets/icons/mastercard.svg";
import mastercard_light from "../../assets/icons/mastercard-light.svg";
import { CardType } from "../../models";
import { maskCardNumber } from "../../utils";

const StyledCreditCard = styled.div<{ isdark: boolean }>`
  border-radius: 25px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
  max-height: 250px;
  min-width: 300px;
  max-width: 350px;
  cursor: pointer;

  border: ${(props) =>
    props.isdark ? "none" : " 1px solid var(--boarder-color)"};
  background: ${(props) =>
    props.isdark
      ? "linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)"
      : "#fff"};
  color: ${(props) => (props.isdark ? "var(--white)" : "var(--text-primary)")};
  .credit-card {
    &-header {
      padding: 15px 20px 0px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-balance {
        color: ${(props) =>
          props.isdark ? "var(--white)" : "var(--text-primary)"};
        p {
          font-size: 12px;
          font-weight: 500;
          color: ${(props) =>
            props.isdark ? "var(--white)" : "var(--credit-card-light-text)"};
          margin: 0;
        }
        div {
          font-size: 24px;
          font-weight: 700;
        }
      }
    }

    &-details {
      padding: 0px 20px;
      display: flex;
      gap: 50px;
      &-holder,
      &-expiry {
        p {
          font-size: 12px;
          font-weight: 500;
          color: ${(props) =>
            props.isdark ? "var(--white)" : "var(--credit-card-light-text)"};
          margin: 0;
        }
        div {
          font-size: 16px;
          font-weight: normal;
        }
      }
    }
    &-footer {
      display: flex;
      flex-direction: row;
      padding: 0px 20px;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      border-radius: 0 0 25px 25px;
      border-top: ${(props) =>
        props.isdark ? "none" : " 1px solid var(--boarder-color)"};
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.15) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
`;

const CreditCard = ({ card }: { card: CardType }) => {
  return (
    <StyledCreditCard isdark={card.type === "black"}>
      <div className="credit-card-header">
        <div className="credit-card-header-balance">
          <p>Balance</p>
          <div>{card.balance}</div>
        </div>
        <div className="credit-card-header-chip">
          <img
            src={card.type === "black" ? light_chip : dark_chip}
            alt="chip"
          />
        </div>
      </div>
      <div className="credit-card-details">
        <div className="credit-card-details-holder">
          <p>CARD HOLDER</p>
          <div>{card.card_holder}</div>
        </div>
        <div className="credit-card-details-expiry">
          <p>VALID THRU</p>
          <div>{card.expiration_date}</div>
        </div>
      </div>
      <div className="credit-card-footer">
        <div className="credit-card-footer-number">
          <p>{maskCardNumber(card.card_number)}</p>
        </div>
        <img
          src={card.type === "black" ? mastercard : mastercard_light}
          alt="chip"
        />
      </div>
    </StyledCreditCard>
  );
};

export default CreditCard;
