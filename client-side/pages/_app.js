import { useAuthState } from 'react-firebase-hooks/auth'
import Loading from '../components/Loading';
import auth from '../firebase.init'
import '../styles/globals.css'
import Login from './login';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }) {
    const [user, isLoading] = useAuthState(auth);

    if (isLoading) {
        return <Loading / >
    }
    if (!user) {
        return <Login / >

    } else {
        return <Component {...pageProps }
        />
    }
}