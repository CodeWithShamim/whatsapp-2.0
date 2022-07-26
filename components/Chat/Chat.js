import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { AiOutlineMore } from 'react-icons/ai';

const Chat = () => {
	const [ user, isLoading ] = useAuthState(auth);
	const isOnline = window.navigator.onLine;

	return (
		<div>
			{/* ---Header start--- */}
			<div className='bg-secondary p-4 m-6 rounded-3xl shadow-lg flex justify-between items-center'>
				<div className='flex justify-between items-center gap-3'>
				    <img className='w-16 h-16 rounded-full' src={user?.photoURL} alt="profileImg" />
					<div>
						<h2>{user?.displayName}</h2>
					<p>{isOnline ? <span><span className='badge badge-xs badge-accent'></span> online</span> :<span>offline</span>}</p>
					</div>	
				</div>

				{/* ----morevertIcon---- */}
				<div className='text-4xl'>
				<AiOutlineMore/>
				</div>
			</div>
			{/* ---Header end--- */}


		</div>
	);
};

export default Chat;
