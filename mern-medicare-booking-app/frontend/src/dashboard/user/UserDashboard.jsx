import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../app/features/authSlice";
import { useNavigate } from "react-router-dom";

import MyBookings from "./MyBookings";
import Profile from "./Profile";
import { useGetUserProfileQuery } from "../../app/services/usersApi";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const UserDashboard = () => {
  const [tab, setTab] = useState("bookings");
  const [userData, setUserData] = useState(null);

  const { user } = useSelector((state) => state.auth);
  const { data, isLoading, error } = useGetUserProfileQuery();

  useEffect(() => {
    if (data) {
      setUserData(data.data);
    }
  }, [data]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());

    navigate("/login");
  };

  return (
    <section className="py-[55px]">
      {isLoading && !error && <Loading />}

      {error && !isLoading && <Error errMessage={error.data.message} />}

      {!isLoading && !error && (
        <div className="max-w-[1080px] px-5 mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                  <img
                    src={user?.photo}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </figure>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                  {userData?.name}
                </h3>

                <p className="text-textColor text-15px leading-6 font-medium">
                  {userData?.email}
                </p>

                <p className="text-textColor text-15px leading-6 font-medium">
                  Blood Type :
                  <span className="ml-2 text-headingColor text-[22px] leading-8">
                    {userData?.bloodType}
                  </span>
                </p>
              </div>

              <div className="mt-[50px] md:mt-[100px]">
                <button
                  onClick={handleLogout}
                  className="w-full bg-[#181a1e] p-3 text-[16px] leading-7 rounded-md text-white"
                >
                  Logout
                </button>

                <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
                  Delete Account
                </button>
              </div>
            </div>

            <div className="md:col-span-2 md:px-[30px]">
              <div className="flex gap-4">
                <button
                  onClick={() => setTab("bookings")}
                  className={`${
                    tab === "bookings" &&
                    "bg-primaryColor text-white font-normal"
                  }py-2 px-5 rounded-md text-headingColor font-semibold text-16px leading-7 border border-solid border-primaryColor`}
                >
                  My Bookings
                </button>

                <button
                  onClick={() => setTab("profile")}
                  className={`${
                    tab === "profile" &&
                    "bg-primaryColor text-white font-normal"
                  } py-2 px-5 rounded-md text-headingColor font-semibold text-16px leading-7 border border-solid border-primaryColor`}
                >
                  Profile Settings
                </button>
              </div>

              {tab === "bookings" ? (
                <MyBookings />
              ) : (
                <Profile userData={userData} />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default UserDashboard;
