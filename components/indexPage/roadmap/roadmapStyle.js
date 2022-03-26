import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	mainDiv: {
		marginTop: '100px',
		width: '100%',
	},

	titleDiv: {
		width: '1294px',
		margin: '0 auto',
		marginTop: '75px',
		marginBottom: '30px',
	},

	titleTypography: {
		fontFamily: 'Syne',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '48px',
		lineHeight: '150%',
		color: '#ffffff',
	},

	mobileRoadMap: {
		display: 'none',
		height: '500px',
		width: '90%',
		margin: '0 auto',
	},

	mobileSlider: {
		marginTop: '0px',
		height: '100%',
		filter: 'blur(5px)',
	},

	desktopRoadMap: {
		width: '1294px',
		margin: '0 auto',
		height: '500px',
	},

	mobileRoadMapStripe: {
		width: '100%',
		height: '8px',
		background: '#483e57',
		marginTop: '12px',
		position: 'absolute',
		marginLeft: '1px',
		'z-index': '-1',
	},

	mobileRoadMapStripeFillFull: {
		width: '100%',
		height: '8px',
		background: '#ae82fc',
	},

	mobileRoadMapStripeFill: {
		width: '80%',
		height: '8px',
		background: '#ae82fc',
	},

	desktopRoadMapStripe: {
		width: '10000px',
		height: '8px',
		background: '#483e57',
		marginTop: '39px',
		filter: 'blur(5px)',
	},

	desktopRoadMapStripeFill: {
		width: '254px',
		height: '8px',
		background: '#ae82fc',
	},

	desktopRoadMapCircle: {
		width: '32px',
		height: '32px',
		borderRadius: '66px',
		background: '#5b4f6a',
		marginTop: '-21px',
		marginLeft: '-1px',
		filter: 'blur(5px)',
	},

	desktopRoadMapCircleFill: {
		width: '32px',
		height: '32px',
		borderRadius: '66px',
		background: '#ae82fc',
		marginTop: '-21px',
		marginLeft: '-1px',
		filter: 'blur(5px)',
	},

	mobileRoadMapCircle: {
		width: '32px',
		height: '32px',
		borderRadius: '66px',
		background: '#5b4f6a',
	},

	mobileRoadMapCircleFill: {
		width: '32px',
		height: '32px',
		borderRadius: '66px',
		background: '#ae82fc',
	},

	desktopRoadMapFirstSection: {
		width: '282px',
		float: 'left',
		marginRight: '49px',
	},

	desktopRoadMapSecondSection: {
		width: '276px',
		float: 'left',
		marginRight: '56px',
	},

	desktopRoadMapThirdSection: {
		width: '334px',
		float: 'left',
		marginRight: '49px',
	},

	desktopRoadMapFourthSection: {
		width: '220px',
		float: 'left',
	},

	phaseTitle: {
		marginTop: '17px',
	},

	phaseDesc: {
		marginTop: '50px',
		marginLeft: '-20px',
	},

	listLi: {
		color: 'white',
		clear: 'both',
		filter: 'blur(5px)',
	},

	phaseTitleTypo: {
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '200%',
		color: '#ffffff',
		float: 'left',
		filter: 'blur(5px)',
	},

	phaseTitleBlock: {
		width: '2px',
		height: '14px',
		marginLeft: '16px',
		marginRight: '16px',
		background: '#ffffff',
		float: 'left',
		marginTop: '7px',
		filter: 'blur(5px)',
	},

	phaseDescTypo: {
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '200%',
		color: '#ffffff',
		float: 'left',
		marginTop: '-2px',
		filter: 'blur(5px)',
	},

	//<<<<<<<<<<<<<<<<<<<< Responsive scale
	//1440px
	['@media (max-width: 1440px)']: {
		titleDiv: {
			marginLeft: '66px',
			marginRight: '65px',
			marginTop: '75px',
		},

		desktopRoadMap: {
			width: '90%',
		},
	},

	//1439px
	['@media (max-width: 1439px)']: {
		titleDiv: {
			width: '90%',
			margin: '0 auto',
			marginTop: '75px',
		},
	},

	//1430px
	['@media (max-width: 1430px)']: {
		desktopRoadMap: {
			display: 'none',
		},

		mobileRoadMap: {
			display: 'block',
		},

		phaseDesc: {
			width: '80%',
		},
	},

	//1155px
	['@media (max-width: 1155px)']: {
		titleTypography: {
			fontSize: '38px',
		},
	},

	//1000px
	['@media (max-width: 1000px)']: {},

	//855px
	['@media (max-width: 855px)']: {
		titleTypography: {
			fontSize: '32px',
		},
	},

	//690px
	['@media (max-width: 690px)']: {
		titleTypography: {
			fontSize: '25px',
		},
	},

	//450px
	['@media (max-width: 450px)']: {
		titleTypography: {
			width: '100%',
			textAlign: 'center',
			marginBottom: '20px',
		},
	},

	//440px
	['@media (max-width: 440px)']: {
		titleTypography: {
			fontSize: '20px',
		},
	},
});

export default useStyles;
