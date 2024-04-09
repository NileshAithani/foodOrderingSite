import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (event) => {
    setFormData((preData) => ({
      ...preData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(formData);
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-3/12 p-2 m-2 flex flex-col gap-8">
        <div className="flex flex-col gap-2 ">
          <h1 className=" font-bold text-3xl">Sign up</h1>
          <div className="flex gap-1">
            <h3 className=" font-bold">or</h3>
            <a href="/login" className=" text-orange-600 font-bold">
              login to your account
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
                value={formData.username}
                onChange={changeHandler}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-bold">
                Email:
              </label>
              <input
                name="email"
                className="border border-black rounded px-2 py-1"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
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
                value={formData.password}
                onChange={changeHandler}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="confirm-password" className="font-bold">
                Confirm Password:
              </label>
              <input
                name="confirmPassword"
                className="border border-black rounded px-2 py-1"
                type="text"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={changeHandler}
                required
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <button
              type="submit"
              className=" bg-orange-400 text-white p-2 rounded-md font-bold hover:bg-orange-600"
            >
              CONTINUE  
            </button>
            <h5 className="text-[10px]">
              By creating an account, I accept the Terms & Conditions & Privacy
              Policy
            </h5>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
