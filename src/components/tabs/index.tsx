import styled from "styled-components";
import { TabsType } from "../../models";

const StyledTabs = styled.div<{
  disabled?: boolean;
}>`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
  .tabs {
    width: 100%;
    display: flex;
    flex: 1;
      gap: 10px;
    font-size: 13px;
       align-items: center;
    flex-direction: row;

    button {
      padding: 10px 20px;
      border: none;
      background: none;

      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
      color: var(--credit-card-light-text);
      &.active {
        color: var(--black);
        font-weight: 700;
      }
    }
  }
  @media (max-width: 768px) {
    .tabs {
      justify-content: center;
      button {
        padding: 10px 15px;
        font-size: 12px;
      }
  }
`;

const Tabs = ({
  tabs,
  activeTab,
  setActiveTab,
}: {
  tabs: TabsType[];
  activeTab: string;
  setActiveTab: Function;
}) => {
  return (
    <StyledTabs>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            style={{
              cursor: tab.isDisabled ? "not-allowed" : "pointer",
            }}
            key={index}
            disabled={tab.isDisabled}
            onClick={() => setActiveTab(tab.name)}
            className={activeTab === tab.name ? "active" : ""}
          >
            {tab.name}
            <div
              style={{
                backgroundColor:
                  activeTab === tab.name ? "var(--black)" : "transparent",
                height: "4px",
                borderRadius: "4px 4px 0px 0px",
              }}
            ></div>
          </button>
        ))}
      </div>
    </StyledTabs>
  );
};

export default Tabs;
