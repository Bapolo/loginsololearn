import { GoogleIcon, AppleIcon } from "@/components/icons";

export default function Home() {
  return (
    <div className="bg-[#1F1E28] flex flex-col gap-4 justify-center items-center text-[#2D3846]">
      <h1 className="text-center">
        project based on{" "}
        <a href="https://sololearn.com" className="text-zinc-300">
          sololearn login
        </a>
      </h1>
      <main className="bg-[#F2F5F7] flex flex-col gap-5 p-4 rounded-sm m-auto " >
        <h2 className="text-3xl text-center font-bold mb-4">Sign Up</h2>
        <form className="flex flex-col">
          <label htmlFor="name" className="font-semibold text-xl mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="p-2 border border-zinc-300 focus:outline focus:outline-[#2AA7FD] rounded-sm mb-4"
            required
          />

          <label htmlFor="email" className="font-semibold text-xl mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="p-2 border border-zinc-300 focus:outline focus:outline-[#2AA7FD] rounded-sm mb-4"
            required
          />

          <label htmlFor="password" className="font-semibold text-xl mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="p-2 border border-zinc-300 focus:outline focus:outline-[#2AA7FD] rounded-sm mb-4"
            required
          />

          <button
            className="bg-[#8BC4EB] text-white mt-8 p-3 rounded-sm mb-4"
            disabled
          >
            sign up
          </button>

          <p className="text-sm text-gray-500">
            This site is protected by reCAPTCHA and the Google{" "}
            <span className="text-[#2AA7FD]">Privacy Policy</span> and
            <span className="text-[#2AA7FD]"> Terms of Service</span> apply.
          </p>
        </form>

        <div className="flex justify-between">
          <span></span>
          <span>or</span>
          <span></span>
        </div>

        <div className="flex justify-center items-center gap-4 text-black font-semibold">
          <button className="flex  items-center gap-6 p-2 border flex-1 rounded-sm bg-white hover:bg-zinc-100">
            <GoogleIcon size={24} />
            <a href="#" className="text-center flex-1">
              Google
            </a>
          </button>
          <button className="flex justify-between items-center gap-6 p-2 border flex-1 rounded-sm bg-white hover:bg-zinc-100">
            <AppleIcon size={24} color="black" />
            <a href="#" className="text-center flex-1">
              Apple
            </a>
          </button>
        </div>

        <div className="felx flex-col justify-center items-center font-semibold text-zinc-500">
          <p className="text-center mb-6">
            Already have an <span className="text-[#2AA7FD] ">account?</span>
          </p>
          <p className="text-center">
            Log in By signing up you agree to our{" "}
            <span className="text-[#2AA7FD] ">Terms of Use</span>
          </p>
        </div>
      </main>
    </div>
  );
}
