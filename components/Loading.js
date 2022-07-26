import HashLoader from 'react-spinners/HashLoader';

const Loading = () => {
	return (
		<div className="flex h-screen justify-center items-center text-primary">
			<HashLoader color="#F54648" />
		</div>
	);
};

export default Loading;
