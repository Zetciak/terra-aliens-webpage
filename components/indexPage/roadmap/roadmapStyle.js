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

	counterDiv: {
		position: 'absolute',
		width: '100%',
		marginTop: '-400px',
	},

	counterBgDiv: {
		background: 'rgba(18, 6, 33, 0.5)',
		backdropFilter: 'blur(50px)',
		borderRadius: '654654px',
		width: '608px',
		height: '78px',
		margin: '0 auto',
		marginTop: '16px',
	},

	minuteDiv: {
		paddingTop: '7px',
		height: '62px',
		width: 'auto',
		marginLeft: '52px',
		float: 'left',
	},

	secondDiv: {
		paddingTop: '7px',
		height: '62px',
		width: 'auto',
		marginLeft: '52px',
		float: 'left',
	},

	dayDiv: {
		paddingTop: '7px',
		height: '62px',
		width: 'auto',
		marginLeft: '52px',
		float: 'left',
	},

	hourDiv: {
		paddingTop: '7px',
		height: '62px',
		width: 'auto',
		marginLeft: '52px',
		float: 'left',
	},

	counterTitleTypography: {
		fontFamily: 'Syne',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '48px',
		lineHeight: '150%',
		color: '#ffffff',
		width: '100%',
		textAlign: 'center',
	},

	counterDescTypography: {
		fontFamily: 'Syne',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '24px',
		lineHeight: '29px',
		color: '#ffffff',
		width: '100%',
		textAlign: 'center',
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
	},

	desktopRoadMapCircleFill: {
		width: '32px',
		height: '32px',
		borderRadius: '66px',
		background: '#ae82fc',
		marginTop: '-21px',
		marginLeft: '-1px',
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
	},

	phaseTitleTypo: {
		fontFamily: 'Montserrat',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '200%',
		color: '#ffffff',
		float: 'left',
	},

	phaseTitleBlock: {
		width: '2px',
		height: '14px',
		marginLeft: '16px',
		marginRight: '16px',
		background: '#ffffff',
		float: 'left',
		marginTop: '7px',
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
	},

	rightElementsElement: {
		width: '30px',
		height: '30px',
		opacity: '1',
		transition: 'opacity .5s',
		background: 'url(https://i.imgur.com/ReWcC4E.png)',
		backgroundSize: 'cover',

		'&:hover': {
			opacity: '0.7',
		},
	},

	rightElements: {
		width: '100%',
		textAlign: 'center',
		'& ul': {
			'& li': {
				display: 'inline-block',
				paddingLeft: '25px',
				paddingTop: '7px',
				'& a': {
					opacity: '1',
					transition: 'opacity .5s',
					'&:hover': {
						opacity: '0.8',
					},
				},
			},
			'& li:nth-child(1)': {
				paddingLeft: '0px',
			},
		},
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

		counterTitleTypography: {
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

		counterTitleTypography: {
			fontSize: '32px',
		},
	},

	//690px
	['@media (max-width: 690px)']: {
		titleTypography: {
			fontSize: '25px',
		},

		counterTitleTypography: {
			fontSize: '25px',
		},

		counterBgDiv: {
			width: '90%',
		},

		rightElements: {
			width: '90%',
		},

		secondDiv: {
			marginLeft: '0',
			width: '28%',
		},

		dayDiv: {
			marginLeft: '0',
			width: '22%',
		},

		minuteDiv: {
			marginLeft: '0',
			width: '28%',
		},

		hourDiv: {
			marginLeft: '0',
			width: '22%',
		},
	},

	//625px
	['@media (max-width: 625px)']: {
		minuteDiv: {
			marginLeft: '0px',
			width: '25%',
		},

		counterDescTypography: {
			fontSize: '20px',
		},
	},

	//510px
	['@media (max-width: 510px)']: {
		counterDescTypography: {
			fontSize: '18px',
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

		counterTitleTypography: {
			fontSize: '20px',
		},
	},

	//420px
	['@media (max-width: 420px)']: {
		counterDescTypography: {
			fontSize: '17px',
			lineHeight: '22px',
			marginTop: '5px',
		},
	},

	//390px
	['@media (max-width: 390px)']: {
		counterDescTypography: {
			fontSize: '15px',
		},
	},
});

export default useStyles;
