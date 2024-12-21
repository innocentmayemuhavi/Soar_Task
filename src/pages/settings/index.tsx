import styled from "styled-components";
import Layout from "../../layouts";
import Tabs from "../../components/tabs";
import { useContext, useEffect, useState } from "react";
import profile from "../../assets/images/profilepic.svg";
import ProfileAvatar from "../../components/profileavatar";
import { MainButton } from "../../components/buttons";
import { tabs } from "../../constants/constants";
import { CoreContext } from "../../context";
import { User } from "../../models";
import { LineLoader } from "../../components/lineloader";
const StyledSettingsPage = styled.section`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 1110px;

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
              font-size: 16px;
              font-weight: 400;
              color: var(--black);
            }

            input {
              padding: 10px;
              border: 1px solid var(--boarder-color);
              border-radius: 15px;
              outline: none;
              color: var(--credit-card-light-text);
              font-size: 15px;
              font-weight: 400;
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
  const { user, setUser, loading } = useContext(CoreContext);
  const [userData, setUserData] = useState<User | null>(user);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleSave = (event: any) => {
    event.preventDefault();
    if (userData === user) {
      alert("No changes made");
    } else {
      setUser(userData!);
      alert("Changes saved successfully");
    }
  };

  useEffect(() => {
    setUserData(user);
  }, [user]);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value } as User);
  };
  const handleImageChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
        setUserData({
          ...userData,
          profile_image: reader.result as string,
        } as User);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <Layout>
      {loading || (!user && <LineLoader />)}

      <StyledSettingsPage>
        <section className="settings">
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="settings-edit-profile">
            <div>
              <ProfileAvatar
                image={
                  profileImage ? profileImage : user?.profile_image ?? profile
                }
                hasEdit={true}
                size={"large"}
                onEdit={(e) => handleImageChange(e)}
              />
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
                        name="name"
                        placeholder="Enter your name"
                        required
                        value={userData?.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="settings-edit-profile-form-content-input">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                        value={userData?.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="settings-edit-profile-form-content-input">
                      <label htmlFor="date">Date of Birth</label>
                      <input
                        type="date"
                        id="date"
                        name="date_of_birth"
                        placeholder="Date of Birth"
                        required
                        value={userData?.date_of_birth}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="settings-edit-profile-form-content-input">
                      <label htmlFor="parmanent-address">
                        Parmanent Address
                      </label>
                      <input
                        type="text"
                        name="permanent_address"
                        id="parmanent-address"
                        placeholder="Street, City, Country"
                        required
                        value={userData?.permanent_address}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="settings-edit-profile-form-content-input">
                      <label htmlFor="Postal Code">Postal Code</label>
                      <input
                        type="number"
                        id="Postal Code"
                        name="postal_code"
                        placeholder="Enter Postal Code"
                        required
                        value={userData?.postal_code}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="settings-edit-profile-form-content-input">
                      <label htmlFor="name">User Name</label>
                      <input
                        type="text"
                        id="username"
                        name="user_name"
                        placeholder="Enter username"
                        required
                        value={userData?.user_name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="settings-edit-profile-form-content-input">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                        required
                        value={userData?.password}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="settings-edit-profile-form-content-input">
                      <label htmlFor="present-address">Present Address</label>
                      <input
                        type="text"
                        name="present_address"
                        id="present-address"
                        placeholder="Street, City, Country"
                        required
                        value={userData?.present_address}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="settings-edit-profile-form-content-input">
                      <label htmlFor="City">City</label>
                      <input
                        type="text"
                        id="City"
                        name="city"
                        placeholder="Enter City"
                        required
                        value={userData?.city}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="settings-edit-profile-form-content-input">
                      <label htmlFor="Country">Country</label>
                      <input
                        type="text"
                        id="Country"
                        name="country"
                        placeholder="Enter Country"
                        required
                        value={userData?.country}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="settings-edit-profile-form-actions">
                <MainButton isDisabled={user === userData} onClick={() => {}}>
                  Save
                </MainButton>
              </div>
            </form>
          </div>
        </section>
      </StyledSettingsPage>
    </Layout>
  );
};

export default SettingsPage;
