import React, { useEffect } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import {
	Container,
	Typography,
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import blueCover from '../../img/blueCover.png';
import greenCover from '../../img/greenCover.png';
import whiteCover from '../../img/whiteCover.png';

const Policy = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('1280'));

	useEffect(() => {
		// Scroll to top of the page when the component is mounted
		window.scrollTo(0, 0);
	}, []);

	const coverStyles = {
		position: 'absolute',
		width: '100%',
		height: '80%',
		opacity: '0.5',
	};

	const blueCoverStyles = {
		...coverStyles,
		top: '15%',
		bottom: '100%',
		left: isMobile ? '-16px' : '-66px',
	};

	const greenCoverStyles = {
		...coverStyles,
		top: '180%',
		bottom: 0,
		left: isMobile ? '0px' : '0px',
	};

	const whiteCoverStyles = {
		...coverStyles,
		top: '180%',
		bottom: 0,
		right: isMobile ? '0px' : '0px',
	};

	const styles = {
		mainTitle: {
			fontWeight: 700,
			fontSize: isMobile ? '46px' : '74px',
			letterSpacing: '-0.06em',
			textTransform: 'capitalize',
			color: '#fff',
			marginBottom: isMobile ? '36px' : '54px',
			zIndex: 1,
		},
		description: {
			fontWeight: 400,
			fontSize: '18px',
			color: '#fff',
			marginBottom: isMobile ? '36px' : '54px',
			zIndex: 1,
		},
		secondaryTitle: {
			fontWeight: 500,
			fontSize: isMobile ? '32px' : '44px',
			color: '#fff',
			marginBottom: '16px',
			zIndex: 1,
		},
		listItemText: {
			fontWeight: 700,
			fontSize: '18px',
			color: '#fff',
			zIndex: 1,
			display: 'flex',
		},
	};

	return (
		<Container sx={{ padding: '0px 16px' }}>
			<Box>
				<img src={blueCover} alt='Blue Cover' style={blueCoverStyles} />
				<Box my={4} sx={{ position: 'relative', zIndex: 1 }}>
					<Typography variant='h1' component='h1' sx={styles.mainTitle}>
						Privacy Policy
					</Typography>
					<Typography variant='body1' paragraph sx={styles.description}>
						Tema ("I") operates tema.cash (the "Site"). This page informs you of our
						policies regarding the collection, use, and disclosure of Personal Information
						we receive from users of the Site. We use your Personal Information only for
						providing and improving the Site. By using the Site, you agree to the
						collection and use of information in accordance with this policy.
					</Typography>

					<Typography variant='h2' component='h2' sx={styles.secondaryTitle}>
						Information Collection and Use
					</Typography>
					<Typography variant='body1' paragraph sx={styles.description}>
						While using our Site, we may ask you to provide us with certain personally
						identifiable information that can be used to contact or identify you.
						Personally identifiable information. The site does use third-party services
						that may collect information used to identify you.
					</Typography>
					<Typography variant='body1' paragraph sx={styles.description}>
						Link to privacy policy of third-party service providers used by the site:
					</Typography>

					<Typography variant='h2' component='h2' sx={styles.secondaryTitle}>
						Log Data
					</Typography>
					<Typography variant='body1' paragraph sx={styles.description}>
						Like many site operators, we collect information that your browser sends
						whenever you visit our Site ("Log Data"). This Log Data may include
						information such as your computer's Internet Protocol ("IP") address, browser
						type, browser version, the pages of our Site that you visit, the time and date
						of your visit, the time spent on those pages, and other statistics. In
						addition, we may use third-party services such as Google Analytics that
						collect, monitor, and analyze this data.
					</Typography>

					<Typography variant='h2' component='h2' sx={styles.secondaryTitle}>
						Cookies
					</Typography>
					<Typography variant='body1' paragraph sx={styles.description}>
						Cookies are files with small amounts of data, which may include an anonymous
						unique identifier. Cookies are sent to your browser from a website and stored
						on your computer's hard drive. Like many sites, we use "cookies" to collect
						information. You can instruct your browser to refuse all cookies or to
						indicate when a cookie is being sent. However, if you do not accept cookies,
						you may not be able to use some portions of our Site.
					</Typography>

					<Typography variant='h2' component='h2' sx={styles.secondaryTitle}>
						Service Providers
					</Typography>
					<Typography variant='body1' paragraph sx={styles.description}>
						I may employ third-party companies and individuals due to the following
						reasons:
					</Typography>
					<List sx={{ marginBottom: '14px', marginTop: '-35px' }}>
						<ListItem>
							<ListItemIcon>
								<CircleIcon
									fontSize='small'
									sx={{
										color: '#fff',
										width: '10px',
										minWidth: '15px',
										paddingLeft: '20px',
									}}
								/>
							</ListItemIcon>
							<ListItemText
								primary='To facilitate our Service;'
								sx={styles.listItemText}
							/>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<CircleIcon
									fontSize='small'
									sx={{
										color: '#fff',
										width: '10px',
										minWidth: '15px',
										paddingLeft: '20px',
									}}
								/>
							</ListItemIcon>
							<ListItemText
								primary='To provide the Service on our behalf;'
								sx={styles.listItemText}
							/>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<CircleIcon
									fontSize='small'
									sx={{
										color: '#fff',
										width: '10px',
										minWidth: '15px',
										paddingLeft: '20px',
									}}
								/>
							</ListItemIcon>
							<ListItemText
								primary='To perform Service-related services;'
								sx={styles.listItemText}
							/>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<CircleIcon
									fontSize='small'
									sx={{
										color: '#fff',
										width: '10px',
										minWidth: '15px',
										paddingLeft: '20px',
									}}
								/>
							</ListItemIcon>
							<ListItemText
								primary='To assist us in analyzing how our Service is used.'
								sx={styles.listItemText}
							/>
						</ListItem>
					</List>
					<Typography variant='body1' paragraph sx={styles.description}>
						I want to inform users of this Service that these third parties have access to
						your Personal Information. The reason is to perform the tasks assigned to them
						on our behalf. However, they are obligated not to disclose or use the
						information for any other purpose.
					</Typography>

					<Typography variant='h2' component='h2' sx={styles.secondaryTitle}>
						Security
					</Typography>
					<Typography variant='body1' paragraph sx={styles.description}>
						I value your trust in providing us your Personal Information, thus we are
						striving to use commercially acceptable means of protecting it. But remember
						that no method of transmission over the internet, or method of electronic
						storage is 100% secure and reliable, and I cannot guarantee its absolute
						security.
					</Typography>

					<Typography variant='h2' component='h2' sx={styles.secondaryTitle}>
						Links to Other Sites
					</Typography>
					<Typography variant='body1' paragraph sx={styles.description}>
						This Service may contain links to other sites. If you click on a third-party
						link, you will be directed to that site. Note that these external sites are
						not operated by me. Therefore, I strongly advise you to review the Privacy
						Policy of these websites. I have no control over and assume no responsibility
						for the content, privacy policies, or practices of any third-party sites or
						services.
					</Typography>
					<Typography variant='h2' component='h2' sx={styles.secondaryTitle}>
						Children’s Privacy
					</Typography>
					<Typography variant='body1' paragraph sx={styles.description}>
						These Services do not address anyone under the age of 13. I do not knowingly
						collect personally identifiable information from children under 13. In the
						case I discover that a child under 13 has provided me with personal
						information, I immediately delete this from our servers. If you are a parent
						or guardian and you are aware that your child has provided us with personal
						information, please contact me so that I will be able to take necessary
						actions.
					</Typography>

					<Typography variant='h2' component='h2' sx={styles.secondaryTitle}>
						Changes to This Privacy Policy
					</Typography>
					<Typography variant='body1' paragraph sx={styles.description}>
						I may update our Privacy Policy from time to time. Thus, you are advised to
						review this page periodically for any changes. I will notify you of any
						changes by posting the new Privacy Policy on this page. These changes are
						effective immediately after they are posted on this page.
					</Typography>

					<Typography variant='h2' component='h2' sx={styles.secondaryTitle}>
						Contact Us
					</Typography>
					<Typography variant='body1' paragraph sx={styles.description}>
						If you have any questions or suggestions about my Privacy Policy, contact me
						at interscoutsport@gmail.com.
					</Typography>
				</Box>
				<img src={greenCover} alt='Green Cover' style={greenCoverStyles} />
				<img src={whiteCover} alt='White Cover' style={whiteCoverStyles} />
			</Box>
		</Container>
	);
};

export default Policy;
