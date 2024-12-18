import styled from "styled-components";
import Layout from "../../layouts";
import Tabs from "../../components/tabs";
import { useState } from "react";
import profile from "../../assets/images/profilepic.svg";
import ProfileAvatar from "../../components/profileavatar";
import { MainButton } from "../../components/buttons";
import { tabs } from "../../constants/constants";
const StyledSettingsPage = styled.section`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 1250px;

  .settings {
    background-color: var(--white);
    border-radius: 25px;
    padding: 20px;
    &-edit-profile {
      display: flex;
      flex-direction: row;
      gap: 20px;
      border-radius: 25px;

      &-form {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 20px;
        flex: 1;

        &-content {
          display: flex;
          flex: 1;
          &-input-container {
            width: 100%;
            display: grid;
            gap: 20px;
            grid-template-columns: 1fr 1fr;
          }
          gap: 20px;
          &-input {
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-bottom: 10px;

            label {
              font-size: 14px;
              font-weight: 400;
              color: var(--black);
            }

            input {
              padding: 10px;
              border: 1px solid var(--boarder-color);
              border-radius: 15px;
              outline: none;
            }
          }
        }
        &-actions {
          width: 100%;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }

  @media (max-width: 900px) {
    .settings-edit-profile {
      flex-direction: column;
      align-items: center;
    }

    .settings-edit-profile-form-content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .settings-edit-profile-form-content-input-container {
      grid-template-columns: 1fr;
    }
  }
`;

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("Edit Profile");

  const handleSave = (event: any) => {
    event.preventDefault();
  };
  return (
    <Layout>
      <StyledSettingsPage>
        <section className="settings">
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="settings-edit-profile">
            <div>
              <ProfileAvatar image={profile} hasEdit={true} size={"large"} />
            </div>
            <form className="settings-edit-profile-form" onSubmit={handleSave}>
              <div className="settings-edit-profile-form-content">
                <div className="settings-edit-profile-form-content-input-container">
                  <div>
                    <div className="settings-edit-profile-form-content-input">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="settings-edit-profile-form-content-input">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <div className="settings-edit-profile-form-content-input">
                      <label htmlFor="date">Date of Birth</label>
                      <input
                        type="date"
                        id="date"
                        placeholder="Date of Birth"
                        required
                      />
                    </div>
                    <div className="settings-edit-profile-form-content-input">
                      <label htmlFor="parmanent-address">
                        Parmanent Address
                      </label>
                      <input
                        type="text"
                        id="parmanent-address"
                        placeholder="Street, City, Country"
                        required
                      />
                    </div>
                    <div className="settings-edit-profile-form-content-input">
                      <label htmlFor="Postal Code">Postal Code</label>
                      <input
                        type="number"
                        id="Postal Code"
                        placeholder="Enter Postal Code"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="settings-edit-profile-form-content-input">
                      <label htmlFor="name">User Name</label>
                      <input
                        type="text"
                        id="username"
                        placeholder="Enter username"
                        required
                      />
                    </div>
                    <div className="settings-edit-profile-form-content-input">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        required
                      />
                    </div>
                    <div className="settings-edit-profile-form-content-input">
                      <label htmlFor="present-address">Present Address</label>
                      <input
                        type="text"
                        id="present-address"
                        placeholder="Street, City, Country"
                        required
                      />
                    </div>
                    <div className="settings-edit-profile-form-content-input">
                      <label htmlFor="City">City</label>
                      <input
                        type="text"
                        id="City"
                        placeholder="Enter City"
                        required
                      />
                    </div>
                    <div className="settings-edit-profile-form-content-input">
                      <label htmlFor="Country">Country</label>
                      <input
                        type="text"
                        id="Country"
                        placeholder="Enter Country"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="settings-edit-profile-form-actions">
                <MainButton onClick={() => {}}>Save</MainButton>
              </div>
            </form>
          </div>
        </section>
      </StyledSettingsPage>
    </Layout>
  );
};

export default SettingsPage;
