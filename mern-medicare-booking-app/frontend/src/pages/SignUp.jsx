import Header from "../components/Header/Header";

// File
import signUpImg from "../assets/images/signup.gif";

const SignUp = () => {
  return (
    <>
      <Header />
      <div className="px-5 py-5 lg:py-10 xl:px-0">
        <div className="max-w-[1170px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:block bg-primaryColor rounded-l-lg">
              <figure className="rounded-l-lg">
                <img src={signUpImg} alt="" className="w-full rounded-l-lg" />
              </figure>
            </div>

            <div className="rounded-l-lg lg:pl-16 py-10 shadow-lg">
              <h2 className="text-[20px] leading-9 text-headingColor font-bold mb-10">
                Create an <span className="text-primaryColor">account</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
