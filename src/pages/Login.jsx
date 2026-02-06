import React from "react";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="hero-content flex flex-col lg:flex-row-reverse gap-10 w-full max-w-6xl">
        {/* Text Section */}
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-4xl lg:text-5xl font-bold">Login now!</h1>
          <p className="py-6 text-sm lg:text-base">
            Provident cupiditate voluptatem et in. <br />
            Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br />
            In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>

        {/* Login Card */}
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl flex-1">
          <div className="card-body">
            <fieldset className="fieldset space-y-3">
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Email"
                />
              </div>

              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Password"
                />
              </div>

              <div className="text-right">
                <a className="link link-hover text-sm">Forgot password?</a>
              </div>

              <button className="btn btn-neutral w-full mt-4">Login</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
