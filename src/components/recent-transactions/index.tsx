import styled from "styled-components";

import { useEffect, useState } from "react";
import { RecentTransactionType } from "../../models";
import { getRecentTransactions } from "../../services";
import SectionLoader from "../section-loading";

const StyledTransactions = styled.div`
  background: var(--white);
  border-radius: 25px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  overflow-y: auto;
  max-height: 190px;
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
      max-width: 100%;
    }
  }
`;

const RecentTransaction = () => {
  const [data, setData] = useState<RecentTransactionType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecentTransactions()
      .then((data) => setData(data))
      .catch((_) => alert(_))
      .finally(() => setLoading(false));
  }, []);

  return (
    <StyledTransactions>
      {loading ? (
        <SectionLoader />
      ) : (
        data.map((transaction) => (
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
              {transaction.amount > 0 ? "+" : "-"}$
              {Math.abs(transaction.amount)}
            </div>
          </div>
        ))
      )}
    </StyledTransactions>
  );
};

export default RecentTransaction;
