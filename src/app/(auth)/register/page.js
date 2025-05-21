import * as Font from "@/components/fonts.js"
import "@/style/form.css";
import Link from "next/link"


export default function RegisterPage(){
    
    return(
        <div className="w-[50%]">
      <h1 className={`${Font.dmSerifDisplay.className} text-7xl`}>
        NgeBaju
      </h1>
      <div className="top-button-wrapper">
        <Link href={"/login"} className="top-button">
          Login
        </Link>
        <Link href={"/register"} className="top-button pointer-events-none active">
          Register
        </Link>
      </div>
      <form className="text-white gap-2">
        <label>Email</label>
        <input type="email" placeholder="John Doe"/>
        <label>Username</label>
        <input type="username"/>
        <label>Password</label>
        <input type="password" placeholder=""/>
        <label>Confirm Password</label>
        <input type="password" placeholder=""/>

        <div className="bottom-button-wrapper flex flex-col mt-5">
          <Link href={"/"} className="bot-button">
            Create Account
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