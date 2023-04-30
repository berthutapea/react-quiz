import { Link } from "react-router-dom";
import useQuestionStore from "../store/zustand";

function Navbar() {
  const { auth, logoutUser } = useQuestionStore();

  return (
    <nav className="w-full bg-transparent text-neutral-900 px-5 md:px-10 flex items-center justify-between py-5 text-sm border-b-slate-200 border">
      <h1 className="text-2xl font-bold tracking-tight flex items-center">
        Quizzz
        <div className="w-2 h-2 bg-red-500 mt-2 ml-1 rounded-full" />
      </h1>
      <div className="space-x-5">
        {!auth?.email && (
          <Link
            className="py-2 px-5 text-blue-600 font-semibold border rounded-full border-sky-700"
            to={"/login"}
          >
            Login
          </Link>
        )}
        {auth?.email ? (
          <button
            className="py-2 transition px-5 text-neutral-50 font-semibold rounded-full bg-red-600"
            onClick={logoutUser}
          >
            Logout
          </button>
        ) : (
          <Link
            className="py-2 transition px-5 text-neutral-50 font-semibold rounded-full bg-blue-600"
            to={"/register"}
          >
            Register
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
