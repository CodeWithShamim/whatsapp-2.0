import { BsGoogle, BsFacebook } from 'react-icons/bs';
import auth from '../firebase.init';
import { useSignInWithGoogle, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import SocialLoading from './SocialLoading';
import { useRouter } from 'next/router';

const SocialLogin = () => {
	const [ signInWithGoogle, user, loading, error ] = useSignInWithGoogle(auth);
	const [ signInWithFacebook, user1, loading1, error1 ] = useSignInWithFacebook(auth);
	const router = useRouter();

	if (loading || loading1) {
		return <SocialLoading />;
	}

	if (user || user1) {
		router.push('/');
	}

	return (
		<div>
			{/* ---google login-- */}
			<div className="flex justify-center items-center gap-5 mt-5">
				<p
					onClick={() => signInWithGoogle()}
					className="text-4xl text-[#34A853] btn btn-secondary rounded-full"
				>
					<BsGoogle />
				</p>

				{/* ---facebook login--- */}
				<p
					onClick={() => signInWithFacebook()}
					className="text-4xl text-[#1B74E4] btn btn-secondary rounded-full"
				>
					<BsFacebook />
				</p>
			</div>

			{/* -------------show error--------------- */}
			<p className="text-red-500 text-center">
				{error && error.code} {error1 && error1.code}
			</p>
		</div>
	);
};

export default SocialLogin;
