import styled from "styled-components";
import { RecentTransactionType } from "../../models";
import card_icon from "../../assets/icons/card_transaction_icon.svg";
import paypall_icon from "../../assets/icons/paypall_icon.svg";
import jemi from "../../assets/icons/jeni_wilson.png";

const StyledTransactions = styled.div`
  background: var(--white);
  border-radius: 25px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-width: 300px;

  gap: 20px;
  .transaction {
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    &-leading {
      display: flex;
      gap: 10px;
    }
    &-image {
      height: 50px;
      width: 50px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-content-details {
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      gap: 5px;
      &-title {
        font-size: 16px;
        font-weight: 500;
        color: var(--black);
      }
      &-date {
        font-size: 12px;
        font-weight: 500;
        color: var(--credit-card-light-text);
      }
    }
    &-amount {
      font-size: 16px;
      font-weight: 500;
    }
  }

  @media (max-width: 1024px) {
    .transaction {
      //   width: 100%;
      max-width: 100%;
    }
  }
`;

const RecentTransaction = () => {
  return (
    <StyledTransactions>
      {recentTransactions.map((transaction) => (
        <div key={transaction.id} className="transaction">
          <div className="transaction-leading">
            <div
              className="transaction-image"
              style={{
                backgroundColor: transaction.color,
              }}
            >
              <img src={transaction.image} alt="icon" />
            </div>
            <div className="transaction-content">
              <div className="transaction-content-details">
                <div className="transaction-content-details-title">
                  {transaction.description}
                </div>
                <div className="transaction-content-details-date">
                  {transaction.date}
                </div>
              </div>
            </div>
          </div>
          <div
            className="transaction-amount"
            style={{
              color: transaction.amount > 0 ? "var(--green)" : "var(--red)",
            }}
          >
            {transaction.amount > 0 ? "+" : "-"}${Math.abs(transaction.amount)}
          </div>
        </div>
      ))}
    </StyledTransactions>
  );
};

export default RecentTransaction;

export const recentTransactions: RecentTransactionType[] = [
  {
    id: 1,
    amount: -200,
    date: "28 January 2021",
    description: "Deposit from my Card",
    type: "card",
    image: card_icon,
    color: "var(--yelow-light)",
  },
  {
    id: 2,
    amount: 300,
    date: "25 January 2021",
    description: "Deposit Paypal",
    type: "paypal",
    image: paypall_icon,
    color: "var(--blue-light)",
  },
  {
    id: 3,
    amount: 400,
    date: "21 January 2021",
    description: "Jemi Wilson",
    type: "card",
    image: jemi,
    color: "var(--green-light)",
  },
];
