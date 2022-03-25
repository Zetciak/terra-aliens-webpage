//Imports
import Image from 'next/image';
import { Typography } from '@material-ui/core';

//Images
import artsImg from '../../public/images/arts.png';

//CSS
import useStyles from './pageLoaderStyle';

//Script
function PageLoader() {
	//Style
	const classes = useStyles();

	return (
		<>
			<div className={classes.mainDiv}>asdasd</div>
		</>
	);
}

export default PageLoader;
