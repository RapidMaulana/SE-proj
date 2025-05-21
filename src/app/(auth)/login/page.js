import * as Font from "@/components/fonts.js"
import "@/style/form.css";
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="w-[50%]">
      <h1 className={`${Font.dmSerifDisplay.className} text-7xl`}>
        NgeBaju
      </h1>
      <div className="top-button-wrapper">
        <Link href={"/"} className="top-button pointer-events-none active">
          Login
        </Link>
        <Link href={"/register"} className="top-button">
          Register
        </Link>
      </div>
      <form className="text-white">
        <label>Email</label>
        <input type="username" placeholder="John Doe"/>
        <label>Password</label>
        <input type="password" placeholder=""/>
        <div  className="flex flex-row justify-between">
          <div>
            <input type="checkbox"/>
            <label>Remember me</label>
          </div>
          <Link className="forgot-password" href={"../forgot-password"}>
            Forgot Password?
          </Link>
        </div>

        <div className="bottom-button-wrapper flex flex-col gap-0">
          <Link href={"/"} className="bot-button">
            Login
          </Link>
          <div className="flex flex-row items-center">
            <div className="w-full bg-white h-[2px]"></div>
            <p className="p-5">
              or
            </p>
            <div className="w-full bg-white h-[2px]"></div>
          </div>
          <Link href={"/"} className="bot-button">
            Browse Store
          </Link>
        </div>
      </form>
    </div>
  )
}