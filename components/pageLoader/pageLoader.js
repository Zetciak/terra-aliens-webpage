//CSS
import useStyles from './pageLoaderStyle';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Typography } from '@material-ui/core';

// Images
import star from '../../public/images/loader.svg';

//Script
function PageLoader() {
	//Style
	const classes = useStyles();

	const [loading, setLoading] = useState(0);
	const [loadingpx, setLoadingpx] = useState(0);

	setTimeout(() => {
		if (loading < 100) {
			setLoading(loading + 1);
			setLoadingpx(loading - 3);
		}
		if (loading > 100) {
			setLoading(100);
			setLoadingpx(loading - 3);
		}
	}, 30);

	return (
		<>
			<div className={classes.mainDiv}>
				<div className={classes.imageDiv}>
					<div className={classes.lineDiv}>
						<div className={classes.line}></div>
						<div
							className={classes.starDiv}
							style={{ marginLeft: `${loadingpx}%` }}
						>
							<Image
								src={star}
								alt=""
								width="100%"
								height="100%"
							/>
						</div>
					</div>
				</div>
				<p className={classes.typoText}>{loading}%</p>
			</div>
		</>
	);
}

export default PageLoader;
