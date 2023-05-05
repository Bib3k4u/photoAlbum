import styles from "./styles.module.css";
import { Container } from 'react-bootstrap'


import ImgCarousels from "../../Component/ImgCarousels";

function Home(userDetails) {
	const user = userDetails.user;
	const logout = () => {
		window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
	};
	return (
		<div className={styles.container}>
			<div>
				<div className='text-center mt-5'>
					<h2>Welcome to Snap-Trav</h2>
					<p>We are an award winning photography studio. We are dedicated to capture timeless images.</p>
					<button className={styles.btn} onClick={logout}>
						Log Out
					</button>
				</div>

				<Container className='mt-5 '>
					<ImgCarousels />
				</Container>
			</div>
		</div>
	);
}

export default Home;
