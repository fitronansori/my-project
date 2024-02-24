import { useEffect, useState } from "react";
import { useGetUserAppointmentQuery } from "../../app/services/usersApi";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loader/Loading";
import DoctorCard from "../../components/Doctors/DoctorCard";

const MyBookings = () => {
  const [bookingData, setBookingData] = useState(null);
  const { data, isLoading, error } = useGetUserAppointmentQuery();

  useEffect(() => {
    if (data) {
      setBookingData(data.data);
    }
  }, [data]);
  return (
    <div>
      {isLoading && !error && <Loading />}

      {error && !isLoading && <Error errMessage={error.data.message} />}

      {!isLoading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {bookingData?.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      )}

      {!isLoading && !error && bookingData?.length === 0 && (
        <h3 className="text-center mt-5 leading-7 text-[22px] font-semibold text-primaryColor">
          You did not book any doctor yet!
        </h3>
      )}
    </div>
  );
};
export default MyBookings;
