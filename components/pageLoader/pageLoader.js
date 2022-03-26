//CSS
import useStyles from './pageLoaderStyle';
import { useEffect, useState } from 'react';

//Script
function PageLoader() {
	//Style
	const classes = useStyles();

	const [loading, setLoading] = useState(0);

	setTimeout(() => {
		if (loading < 100) {
			setLoading(loading + 1);
		}
		if (loading > 100) {
			setLoading(100);
		}
	}, 27);

	return (
		<>
			<div className={classes.mainDiv}>
				<div className={classes.imageDiv}>
					<div className={classes.image1}></div>
					<div
						className={classes.image2}
						style={{
							height: `${loading}%`,
							marginTop: `${100 - loading}%`,
						}}
					></div>
				</div>
			</div>
		</>
	);
}

export default PageLoader;
