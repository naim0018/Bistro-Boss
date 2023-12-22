import bgimg from "../../assets/others/authentication.png";
const Login = () => {
  return (
    <div className="relative">
      <div className="">
        <img src={bgimg} className="w-full bg-cover h-screen" alt="" />
      </div>
      <div className="absolute inset-0 ">
        <div className=" w-full h-full grid relative">
            <img src={bgimg} className="w-4/6 h-2/3 m-auto drop-shadow-2xl" alt="" />
            <div className="absolute ">
                <p>Login</p>
                <input type="text" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
