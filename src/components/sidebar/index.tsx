import { Key, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import dashboard from "../../assets/icons/dashboard.svg";
import transactions from "../../assets/icons/transactions.svg";
import accounts from "../../assets/icons/accounts.svg";
import investments from "../../assets/icons/investments.svg";
import creditcards from "../../assets/icons/creditcards.svg";
import loans from "../../assets/icons/loans.svg";
import services from "../../assets/icons/services.svg";
import myprivileges from "../../assets/icons/myprivileges.svg";
import settings from "../../assets/icons/settings.svg";
import task from "../../assets/icons/task.svg";
import { NavLink, To, useNavigate } from "react-router";
import Icon from "../icons";
import { CoreContext } from "../../context";
const StyledSidebar = styled.aside<{
  showSideBar: boolean;
}>`
  background-color: var(--white);
  width: 200px;
  height: 100vh;
  border-right: 1px solid var(--boarder-color);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: ${({ showSideBar }) => (showSideBar ? "fixed" : "relative")};
  .menu {
    &-title {
      cursor: pointer;
      padding: 5px 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      position: sticky;
      background-color: var(--white);
      top: 0px;

      h3 {
        color: var(--text-primary);
        padding: 0;
      }
    }
    &-item {
      display: flex;
      gap: 20px;
      align-items: center;
      cursor: pointer;

      &-active-indicator {
        width: 5px;
        height: 40px;
        background-color: var(--black);
        border-radius: 0 5px 5px 0;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      list-style: none;
      padding: 0;
    }
    a {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--gray);
      text-decoration: none;
      font-weight: 500;
      width: 100%;
      &: hover {
        color: var(--black);
        svg {
          g {
            path {
              fill: var(--black);
            }
          }
        }
        svg {
          path {
            fill: var(--black);
          }
        }
        div {
          background-color: var(--black);
        }
      }
    }
    .menu-item-active {
      color: var(--black);
      img {
        fill: var(--black);
        color: var(--black);
      }
    }
  }
  .disabled {
    padding: 10px 25px;
    cursor: not-allowed;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: var(--gray);
    text-decoration: none;
    font-weight: 500;
  }

  @media (max-width: 767px) {
    display: ${({ showSideBar }) => (showSideBar ? "block" : "none")};
  }
`;

const StyledActiveIndicator = styled.div<{ isActive: boolean }>`
  width: 5px;
  height: 40px;
  background-color: ${({ isActive }) =>
    isActive ? "var(--black)" : "transparent"};
  border-radius: 0 5px 5px 0;
  &: hover {
    background-color: var(--black);
  }
`;
const SideBar = () => {
  const navigation = useNavigate();
  const [links, setLinks] = useState<
    {
      name: string;
      icon: any;
      slug: string;
      disabled: boolean;
    }[]
  >([]);

  const { showSideBar } = useContext(CoreContext);

  useEffect(() => {
    setLinks([
      {
        name: "Dashboard",
        icon: dashboard,
        slug: "/",
        disabled: false,
      },
      {
        name: "Transactions",
        icon: transactions,
        slug: "/transactions",
        disabled: true,
      },
      {
        name: "Accounts",
        icon: accounts,
        slug: "/accounts",
        disabled: true,
      },
      {
        name: "Investments",
        icon: investments,
        slug: "/investments",
        disabled: true,
      },
      {
        name: "Credit Cards",
        icon: creditcards,
        slug: "/creditcards",
        disabled: true,
      },
      {
        name: "Loans",
        icon: loans,
        slug: "/loans",
        disabled: true,
      },
      {
        name: "Services",
        icon: services,
        slug: "/services",
        disabled: true,
      },
      {
        name: "My Privileges",
        icon: myprivileges,
        slug: "/myprivileges",
        disabled: true,
      },
      {
        name: "Settings",
        icon: settings,
        slug: "/settings",
        disabled: false,
      },
    ]);
  }, []);
  return (
    <StyledSidebar showSideBar={showSideBar}>
      <div className="menu">
        <div className="menu-title" onClick={() => navigation("/")}>
          <img src={task} />
          <h3>Soar Task</h3>
        </div>
        <ul>
          {links.map(
            (
              link: {
                disabled: boolean;
                slug: To;
                name: string;
              },
              index: Key | null | undefined
            ) => (
              <li className="menu-item" key={index}>
                {link.disabled ? (
                  <div className="menu-item  disabled">
                    <Icon name={link.name.toLowerCase()} isActive={false} />
                    <span>{link.name}</span>
                  </div>
                ) : (
                  <NavLink
                    style={{
                      cursor: link.disabled ? "not-allowed" : "pointer",
                    }}
                    to={link.slug}
                    className={({ isActive }) =>
                      isActive ? "menu-item-active" : ""
                    }
                  >
                    {({ isActive }) => (
                      <section className="menu-item">
                        <StyledActiveIndicator isActive={isActive}>
                          <div className="menu-active-indicator"> </div>
                        </StyledActiveIndicator>

                        <Icon
                          name={link.name.toLowerCase()}
                          isActive={isActive}
                        />
                        <span>{link.name}</span>
                      </section>
                    )}
                  </NavLink>
                )}
              </li>
            )
          )}
        </ul>
      </div>
    </StyledSidebar>
  );
};

export default SideBar;
