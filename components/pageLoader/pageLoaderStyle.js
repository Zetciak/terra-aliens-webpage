import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	mainDiv: {
		width: '1400px',
		margin: '0 auto',
	},

	imageDiv: {
		width: '300px',
		height: '300px',
		position: 'fixed',
		top: '45%',
		left: '50%',
		transform: 'translate(-45%, -50%)',
	},

	image1: {
		background: 'url(https://i.imgur.com/bhwYa3u.png)',
		backgroundSize: '100%',
		'-webkit-filter': 'grayscale(100%)',
		filter: 'grayscale(100%)',
		width: '100%',
		height: '100%',
		position: 'absolute',
		'-webkit-transform': 'scaleY(-1)',
	},

	image2: {
		background: 'url(https://i.imgur.com/bhwYa3u.png)',
		backgroundSize: '100%',
		width: '100%',
		//height: '20%',
		//marginTop: '80%',
		position: 'absolute',
		'-webkit-transform': 'scaleY(-1)',
	},

	typoText: {
		width: '300px',
		position: 'fixed',
		top: '45%',
		left: '50%',
		transform: 'translate(-55%, -50%)',
		textAlign: 'center',
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '24px',
		color: '#ffffff',
		marginTop: '176px',
	},

	//<<<<<<<<<<<<<<<<<<<< Responsive scale
	//1440px
	['@media (max-width: 1440px)']: {
		imageDiv: {
			width: '250px',
			height: '250px',
		},
		typoText: {
			marginTop: '145px',
		},
	},
});

export default useStyles;
