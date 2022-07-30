import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";
import auth from "../firebase.init";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Register from "./register";

export default function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Register />;
  }

  return <Component {...pageProps} />;
}
