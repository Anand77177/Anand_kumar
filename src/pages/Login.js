import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
 import { BsFacebook,BsLinkedin } from "react-icons/bs";
 import { FcGoogle } from "react-icons/fc";

function Login() {

  return (
    <>
      <Head>
        <title>Product Name </title>
      </Head>
      <main>
        <div className="row g-3">
          <div className="col-lg-6">
            <div className="p-2">
              <Image
                src="/images/4.png"
                alt=""
                width={450}
                height={420}
                className="border"
              ></Image>
            </div>
          </div>
          <div className="col-lg-6" width={450}>
            <div className="mt-10">
              <h4 className="d-flex gap-4">
                Sign in With
                <Link href="https://www.facebook.com/">
                  <BsFacebook />
                </Link>
                <Link href="https://www.google.com/">
                  <FcGoogle />
                </Link>
                <Link href="https://in.linkedin.com/">
                  <BsLinkedin />
                </Link>
              </h4>
            </div>
            <div className="flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="text-center mt-3">OR</p>
            </div>
            <form className="mt-2">
              <div>
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required=""
                />
                <div id="emailHelp" className="form-text"></div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  required=""
                />
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <div>
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Don't have an account?
                  {/* <a
                href="#!"
                class="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                >Register</a> */}
                  <Link href="/Register" className="flex gap-2">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
export default Login;