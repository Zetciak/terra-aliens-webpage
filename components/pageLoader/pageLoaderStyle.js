import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	mainDiv: {
		width: '1400px',
		margin: '0 auto',
	},

	typoText: {
		width: '100%',
		textAlign: 'center',
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '24px',
		color: '#ffffff',
		marginTop: '40px',
	},

	lineDiv: {
		width: '425px',
		height: '3px',
		margin: '0 auto',
		marginTop: '360px',
	},

	line: {
		position: 'absolute',
		left: '0',
		right: '0',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '425px',
		height: '3px',
		marginTop: '16px',
		background: 'white',
	},

	starDiv: {
		width: '35px',
		height: '35px',
		position: 'relative',
		marginLeft: '50%',
	},

	//<<<<<<<<<<<<<<<<<<<< Responsive scale
	//1440px
	['@media (max-width: 1440px)']: {
		mainDiv: {
			width: '90%',
			margin: '0 auto',
		},
	},

	//500px
	['@media (max-width: 500px)']: {
		lineDiv: {
			width: '90%',
		},

		line: {
			width: '90%',
		},
	},

	//414px
	['@media (max-width: 414px)']: {
		lineDiv: {
			marginTop: '320px',
		},
	},

	//350px
	['@media (max-width: 350px)']: {
		lineDiv: {
			marginTop: '260px',
		},
	},
});

export default useStyles;
