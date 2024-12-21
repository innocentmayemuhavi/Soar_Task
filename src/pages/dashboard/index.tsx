import styled from "styled-components";
import Layout from "../../layouts";
import CreditCard from "../../components/creditcard";
import RecentTransaction from "../../components/recent-transactions";
import RoundedIconButton, { TextButton } from "../../components/buttons";
import Charts from "../../components/charts";

import ProfileAvatar from "../../components/profileavatar";
import arrow_right_ios from "../../assets/icons/arrow-right-ios.svg";
import send from "../../assets/icons/send.svg";
import { quickTransfer } from "../../constants/constants";
import { useEffect, useState } from "react";
import {
  getBalanceHistory,
  getCards,
  getExpencesStats,
  getWeeklyActivity,
} from "../../services";
import { LineLoader } from "../../components/lineloader";
import { CardType } from "../../models";
import SectionLoader from "../../components/section-loading";

const MiniResponsiveDiv = styled.div`
  max-width: 350px;
  @media (max-width: 1250px) {
    width: 100%;
    max-width: 100%;
  }
`;
const StyledDashboard = styled.div`
  padding: 20px;
  max-width: 1110px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .first-section {
    display: flex;
    gap: 30px;
    flex-direction: row;
    justify-content: start;
    align-items: flex-start;
    flex: 1;
    flex-wrap: wrap;

    &-creditcard {
      display: flex;
      gap: 10px;
      flex-direction: column;

      &-parent {
        flex: 1;
      }
      &-content {
        display: flex;
        gap: 20px;
        flex: 1;
        overflow-x: auto;
        margin: 0 -20px;
        flex-wrap: nowrap;
        padding: 0 20px;
      }
    }
    &-recent-transactions {
      display: flex;
      gap: 10px;
      flex-direction: column;
      flex: 1;
    }
  }
  .section-header {
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: center;
    &-title {
      font-size: 16px;
      font-weight: 600;
      color: var(--text-primary);
    }
  }
  .page-section {
    display: flex;
    gap: 30px;
    flex-direction: row;
    justify-content: start;
    align-items: flex-start;
    flex: 1;
    flex-wrap: wrap;
    &-content {
      display: flex;
      flex: 1;
      width: 100%;
      flex-direction: column;
      gap: 20px;
      &-quick-transfer {
        background-color: var(--white);
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 25px;
        padding: 25px;
        height: 100%;
        width: 100%;
        justify-content: center;
        gap: 20px;
      }
      &-chart,
      &-expences {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        &-quick-transfer {
          background-color: var(--white);
        }
      }
    }

    @media (max-width: 968px) {
      .first-section {
        flex-direction: column;
      }
      .first-section-creditcard-parent {
        width: 100%;
      }
    }
    @media (max-width: 1024px) {
      .page-section-content {
        display: flex;
        flex-direction: column;
        &-quick-transfer {
          width: 100%;
        }
        &-expences {
          width: 99%;
        }
      }
    }
  }
  .page-section {
    display: flex;

    gap: 30px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;
    flex-wrap: wrap;
    &-quick-transfer {
      display: flex;
      gap: 20px;
      flex-direction: column;
      flex: 1;
      max-width: 350px;
      &-content {
        background-color: red;
        padding: 20px;
        border-radius: 25px;
        display: flex;
        gap: 40px;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &-profiles {
          display: flex;
          gap: 20px;
          flex-direction: row;
          flex: 1;
          align-items: center;
          justify-content: center;
          &-name {
            font-size: 16px;
            font-weight: 600;
            color: var(--black);
          }
          &-role {
            font-size: 15px;
            font-weight: 500;
            color: var(--credit-card-light-text);
          }
        }
        &-amount {
          display: flex;
          gap: 20px;
          align-items: center;

          label {
            font-size: 16px;
            color: var(--credit-card-light-text);
          }
          &-input {
            display: flex;
            background-color: var(--blue-input-light);
            border-radius: 50px;
            justify-content: space-between;
            input {
              padding: 10px 20px;
              outline: none;
              border: none;
              background-color: transparent;
              color: var(--credit-card-light-text);
              width: 50%;
            }
            button {
              background-color: var(--black);
              border: none;
              border-radius: 50px;
              color: var(--white);
              padding: 10px 20px;
              display: flex;
              gap: 5px;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              &:hover {
                border: 2px solid var(--blue);
              }
            }
          }
        }
      }
    }
    &-balance-history {
      display: flex;
      gap: 10px;
      flex-direction: column;
      width: 100%;

      &-content {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
    }
  }
  @media (max-width: 1024px) {
    .page-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &-quick-transfer {
        max-width: 100%;
        width: 100%;
      }
      &-balance-history {
        width: 100%;
      }
    }
  }
`;

const Dashboard = () => {
  const [weeklyActivity, setWeeklyActivity] = useState<any[]>([]);
  const [expencesStats, setExpencesStats] = useState<any[]>([]);
  const [balanceHistory, setBalanceHistory] = useState<any[]>([]);
  const [fetching, setIsFetching] = useState<boolean>(true);
  const [cards, setCards] = useState<CardType[]>([]);
  const handleQuickTransfer = (event: any) => {
    event.preventDefault();
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const weeklyActivity = await getWeeklyActivity();
        const balanceHistory = await getBalanceHistory();
        const expencesStats = await getExpencesStats();
        const cards = await getCards();

        setWeeklyActivity(weeklyActivity);
        setBalanceHistory(balanceHistory);
        setExpencesStats(expencesStats);
        setCards(cards!);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {fetching && <LineLoader />}
      <StyledDashboard>
        <div className="first-section">
          <div
            className="first-section-creditcard-parent"
            style={{
              width: "100%",
            }}
          >
            <div className="first-section-creditcard">
              <div className="section-header">
                <div className="section-header-title">My Cards</div>
                <TextButton text="See All" onClick={() => {}} />
              </div>
              <div className="first-section-creditcard-content">
                {fetching ? (
                  <SectionLoader />
                ) : (
                  <>
                    {cards.map((card) => (
                      <CreditCard key={card.id} card={card} />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
          <MiniResponsiveDiv>
            <div className="first-section-recent-transactions">
              <div className="section-header">
                <div className="section-header-title">Recent Transactions</div>
              </div>
              <RecentTransaction />
            </div>
          </MiniResponsiveDiv>
        </div>
        <div className="page-section">
          <div className="page-section-content">
            <div className="section-header">
              <div className="section-header-title">Weekly Activity</div>
            </div>
            <div className="page-section-content-chart">
              {fetching ? (
                <SectionLoader />
              ) : (
                <Charts type="bar" data={weeklyActivity} />
              )}
            </div>
          </div>
          <MiniResponsiveDiv>
            <div className="page-section-content">
              <div className="section-header">
                <div className="section-header-title">Expense Statistics</div>
              </div>
              <div className="page-section-content-expences">
                {fetching ? (
                  <SectionLoader />
                ) : (
                  <Charts type="pie" data={expencesStats} />
                )}
              </div>
            </div>
          </MiniResponsiveDiv>
        </div>
        <div className="page-section">
          <MiniResponsiveDiv>
            <div className="page-section-content">
              <div className="section-header">
                <div className="section-header-title">Quick Transfers</div>
              </div>
              <div className="page-section-content-expences">
                <div className="page-section-content-quick-transfer">
                  <div className="page-section-quick-transfer-content-profiles">
                    {quickTransfer.map((transfer) => (
                      <div key={transfer.name}>
                        <ProfileAvatar
                          image={transfer.image}
                          hasEdit={false}
                          size={"large"}
                        />
                        <div className="page-section-quick-transfer-content-profiles-name">
                          {transfer.name}
                        </div>
                        <div className="page-section-quick-transfer-content-profiles-role">
                          {transfer.role}
                        </div>
                      </div>
                    ))}
                    <RoundedIconButton
                      icon={arrow_right_ios}
                      showBg
                      backgroundColor={"var(--white)"}
                      hasShadow
                      shadowColor={"#E7E4E8CC"}
                      onClick={function (): void {}}
                    />
                  </div>
                  <div className="page-section-quick-transfer-content-amount">
                    <label>Write Amount</label>
                    <form
                      className="page-section-quick-transfer-content-amount-input"
                      onSubmit={handleQuickTransfer}
                    >
                      <input
                        type="number"
                        placeholder="Enter Amount"
                        required
                      />
                      <button>
                        Send <img src={send} />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </MiniResponsiveDiv>
          <div className="page-section-content">
            <div className="section-header">
              <div className="section-header-title">Balance History</div>
            </div>
            <div className="page-section-content-chart">
              {fetching ? (
                <SectionLoader />
              ) : (
                <Charts type="line" data={balanceHistory} />
              )}
            </div>
          </div>
        </div>
      </StyledDashboard>
    </Layout>
  );
};

export default Dashboard;
