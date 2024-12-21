import styled from "styled-components";
import search from "../../assets/icons/search.svg";
import RoundedIconButton from "../buttons";
import profile from "../../assets/images/profilepic.svg";
import menu from "../../assets/icons/menu.svg";
import ProfileAvatar from "../profileavatar";
import { useContext, useEffect } from "react";
import { CoreContext } from "../../context";

const StyledMobileHeader = styled.header`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: sticky;
  top: 0;
  gap: 20px;
  z-index: 100;
  .header {
    &-main {
      flex: 1;
      display: flex;
      justify-content: space-between;

      &-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-primary);
      }
    }
    &-search {
      &-container {
        background-color: var(--bg-main);
        border-radius: 40px;
        padding: 10px 15px;
        display: flex;
        align-items: center;
        gap: 10px;

        input {
          width: 100%;
          background-color: transparent;
          border: none;
          outline: none;
          color: var(--text-search);
        }
      }
    }
  }
`;

const MobileHeader = ({ title }: { title: string }) => {
  const { setShowSideBar, showSideBar, user } = useContext(CoreContext);

  useEffect(() => {}, [showSideBar]);

  return (
    <StyledMobileHeader>
      <div className="header-main">
        <RoundedIconButton
          icon={menu}
          onClick={() => setShowSideBar(!showSideBar)}
          showBg={false}
        />
        <div className="header-main-title">{title}</div>
        <ProfileAvatar
          image={user?.profile_image ?? profile}
          hasEdit={false}
          size={"medium"}
        />
      </div>

      <div className="header-search">
        <div className="header-search-container">
          <img src={search} alt="search" />
          <input placeholder="Search for something" type="search" />
        </div>
      </div>
    </StyledMobileHeader>
  );
};

export default MobileHeader;
