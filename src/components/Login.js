import { useState } from "react";

const Login = () => {

  const[loginFormData, setLoginFormData] = useState({
    username : "",
    password:""
  })

  const changeHandler = (event)=>{

    setLoginFormData((preData)=>({
      ...preData,
      [event.target.name]:event.target.value
    }))

  }

  const submitHandler = (event)=>{
    event.preventDefault();
    console.log(loginFormData);
  }



  return (
    <div className="flex justify-center items-center ">
      <div className="w-3/12 p-2 m-2 flex flex-col gap-8">
        <div className="flex flex-col gap-2 ">
          <h1 className=" font-bold text-3xl">Log In</h1>

          <div className="flex gap-1">
            <h3 className=" font-bold">or</h3>
            <a href="/signup" className=" text-orange-600 font-bold">
              create an account
            </a>
          </div>
          <div className="p-1 bg-black w-9 rounded-sm"></div>
        </div>

        <form onSubmit={submitHandler} className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="username" className="font-bold">
                Username:
              </label>
              <input
                name="username"
                className="border border-black rounded px-2 py-1"
                type="text"
                placeholder="Enter your username"
                value={loginFormData.username}
                onChange={changeHandler}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="font-bold">
                Password:
              </label>
              <input
                name="password"
                className="border border-black rounded px-2 py-1"
                type="password"
                placeholder="Enter your password"
                value={loginFormData.password}
                onChange={changeHandler}
                required
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex gap-4">
              <button
                className=" bg-orange-400 text-white p-2 rounded-md font-bold hover:bg-orange-600"
                type="submit"
              >
                CONTINUE
              </button>
              <button className=" bg-orange-400 text-white p-2 rounded-md font-bold hover:bg-orange-600">
                <a href="/signup" className="  font-bold text-white">
                  SIGN UP
                </a>
              </button>
            </div>

            <h5 className="text-[10px]">
              By clicking on Login, I accept the Terms & Conditions & Privacy
              Policy
            </h5>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
