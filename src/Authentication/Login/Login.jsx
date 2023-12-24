import bgimg from "../../assets/others/authentication.png";
import leftimg from "../../assets/others/authentication2.png";
import { CiFacebook } from "react-icons/ci";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
const Login = () => {
  return (
    <div className="">
      <img src={bgimg} className="w-full h-screen" alt="" />
      <div className="w-4/5 h-5/6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <img
          src={bgimg}
          className="w-full h-full object-fill " style={{boxShadow : '10px 10px 5px  rgba(0, 0, 0, 0.3)' }}
          alt=""
        />
 <div className="grid md:grid-cols-2 place-items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
<div className="">
  <img src={leftimg} className="hidden md:block" alt="" />
</div>
<div className="space-y-5 w-4/6">
<p className="text-2xl font-semibold text-center">Login</p>
<div className="space-y-2">
  <p className="text-base font-semibold">Email</p>
  <input
    type="text"
    placeholder="Enter your email"
    className="w-full bg-white p-2 rounded"
  />
</div>
<div className="space-y-2">
  <p className="text-base font-semibold">Password</p>
  <input
    type="text"
    placeholder="Enter your password"
    className="w-full bg-white p-2 rounded"
  />
</div>
<div className="space-y-2">
  
  <input
    type="text"
    placeholder="Enter Captcha"
    className="w-full bg-white p-2 rounded"
  />
</div>
<div className="grid place-items-center space-y-3">
<button className="btn w-full hover:bg-[#D1A054] hover:bg-opacity-70 border-none bg-[#D1A054] bg-opacity-70 text-white">Login</button>
<p className="text-base font-medium text-[#D1A054]">New here? Create a New Account</p>
<p>Or sing in with</p>
</div>
<div className="flex items-center justify-center text-3xl space-x-3">
<CiFacebook />
<AiFillGoogleCircle />
<FaGithub />
</div>
</div>
</div>



      </div>
    </div>
  );
};

export default Login;


