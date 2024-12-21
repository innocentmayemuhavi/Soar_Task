import styled from "styled-components";
import search from "../../assets/icons/search.svg";
import settingsicon from "../../assets/icons/settings1.svg";
import notification from "../../assets/icons/notifications.svg";
import RoundedIconButton from "../buttons";
import profile from "../../assets/images/profilepic.svg";
import ProfileAvatar from "../profileavatar";
import { useContext } from "react";
import { CoreContext } from "../../context";
const StyledDesktopHeader = styled.header`
  background-color: var(--white);
  position: sticky;
  top: 0;
  z-index: 100;
  height: 60px;
  margin: 0;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  .header {
    &-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
    }
  }
  .header-section {
    display: flex;
    align-items: center;
    gap: 20px;

    &-search {
      background-color: var(--bg-main);
      border-radius: 40px;
      padding: 10px 15px;
      display: flex;
      align-items: center;
      gap: 10px;

      input {
        background-color: transparent;
        border: none;
        outline: none;
        color: var(--text-search);
      }
    }
  }
`;

const DesktopHeader = ({ title }: { title: string }) => {
  const { user } = useContext(CoreContext);
  return (
    <StyledDesktopHeader>
      <div className="header-title">{title}</div>
      <div className="header-section">
        <div className="header-section-search">
          <img src={search} alt="search" />
          <input placeholder="Search for something" type="search" />
        </div>
        <RoundedIconButton icon={settingsicon} onClick={() => {}} showBg />
        <RoundedIconButton icon={notification} onClick={() => {}} showBg />
        <ProfileAvatar
          image={user?.profile_image ?? profile}
          hasEdit={false}
          size={"medium"}
        />
      </div>
    </StyledDesktopHeader>
  );
};

export default DesktopHeader;
