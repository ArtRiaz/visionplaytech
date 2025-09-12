import React, {useEffect} from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import AnMob from '../../img/anMob.png';
import ProImg from '../../img/pro.png';
import UniImg from '../../img/united.png';
import AnlImg from '../../img/analytics.png';
import HelImg from '../../img/health.png';
import AImg from '../../img/ai.png';
import VisionMob from '../../img/visionMob.png';
import UniMob from '../../img/uniMob.png';
import HelMob from '../../img/helMob.png';
import AiMob from '../../img/aiMob.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('1280'));

	useEffect(() => {
        AOS.init({
            duration: 1000,
			once: false, 
        });
    }, []);

	return (
		<Box
			id='projects'
			sx={{
				display: 'flex',
				flexDirection: 'column',
				paddingBottom: isMobile ? '75px' : '107px',
				paddingLeft: '16px',
				paddingRight: '16px',
				marginTop: isMobile ? '140px' : '230px'
			}}
		>
			<Typography
				variant='h2'
				sx={{
					fontWeight: 700,
					fontSize: isMobile ? '46px' : '74px',
					lineHeight: '116%',
					letterSpacing: '-0.06em',
					textTransform: 'capitalize',
					textAlign: 'center',
					color: '#000000',
					marginBottom: '16px',
				}}
			>
				Our Solution
			</Typography>
			<Typography
				variant='body1'
				sx={{
					fontWeight: 400,
					fontSize: '20px',
					lineHeight: '160%',
					textAlign: 'center',
					color: '#000000',
					marginTop: '24px',
				}}
			>
				{isMobile ? (
					<>
					AI-powered unified platform	<br/> for football development. 
					</>
				) : (
					<>
						AI-powered unified platform <br/> for football development.
					</>
				)}
			</Typography>

			<Grid container sx={{ marginTop: isMobile ? '30px' : '70px' }}>
				<Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
					<Box data-aos="fade-up"
						sx={{
							background: 'linear-gradient(91deg, #ff8a3d 0%, #fff 87.06%)',
							borderRadius: '24px 24px 0 24px',
							boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
							width: isMobile ? '100%' : '1340px',
							display: 'flex',
							flexDirection: isMobile ? 'column' : 'row',
							padding: isMobile ? '24px' : '50px 50px 50px 90px',
							gap: isMobile ? '22px' : '50px',
							alignItems: isMobile ? 'center' : 'flex-start',
						}}
					>
						<Box sx={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
							<Typography variant='h2' style={{ fontSize: isMobile ? '32px' : '44px', color: '#fff', }}>
								Centralized players profile
							</Typography>
							<Typography variant='body1' style={{ marginTop: '16px', fontSize: '20px', color: '#fff', }}>
							All player data is stored in one place: physical performance, health indicators, and psychological state. Coaches, clubs, and academies gain a full picture of each player's development and risks. This allows for more precise training decisions and long-term growth strategies.
							</Typography>
						</Box>
						<Box sx={{ flex: 1, textAlign: 'center' }}>
							<img
								src={isMobile ? VisionMob : ProImg}
								alt='Profile'
								style={{ width: '100%', borderRadius: '16px' }}
							/>
						</Box>
					</Box>
				</Grid>
			</Grid>
			<Grid container sx={{ marginTop: '30px' }}>
				<Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
					<Box data-aos="fade-up"
						sx={{
							background: 'linear-gradient(320deg, #ea580c 27.09%, #fff 100%)',
							borderRadius: '24px 24px 24px 0',
							boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
							width: isMobile ? '100%' : '1340px',
							display: 'flex',
							flexDirection: isMobile ? 'column' : 'row',
							padding: isMobile ? '24px' : '50px 50px 50px 90px',
							gap: isMobile ? '22px' : '50px',
							alignItems: isMobile ? 'center' : 'flex-start',
						}}
					>
						<Box
							sx={{
								flex: 1,
								textAlign: isMobile ? 'center' : 'left',
								order: isMobile ? '0' : '2',
								color: '#fff',
							}}
						>
							<Typography variant='h2' style={{ fontSize: isMobile ? '32px' : '44px' }}>
								Seamless integration
							</Typography>
							<Typography variant='body1' style={{ marginTop: '16px', fontSize: '20px' }}>
								VisionPlay connects clubs, academies, and coaches into one unified system. Training data, match statistics, and health updates flow automatically across all levels.
							</Typography>
							<Typography variant='body1' style={{ marginTop: '16px', fontSize: '20px' }}>
								Everyone works with the same information in real time — no manual updates, no lost data, no communication gaps.
							</Typography>
						</Box>
						<Box sx={{ flex: 1, textAlign: 'center', order: isMobile ? '0' : '1' }}>
							{<img
								src={isMobile ? UniMob : UniImg}
								alt='Vision'
								style={{ width: '100%',height: '100%', objectFit: 'cover', display: 'block', borderRadius: '16px' }}
							/>}
						</Box>
					</Box>
				</Grid>
			</Grid>
			<Grid container sx={{ marginTop: '30px' }}>
				<Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
					<Box data-aos="fade-up"
						sx={{
							background: 'linear-gradient(91deg, #ff8a3d 0%, #fff 87.06%)',
							borderRadius: '24px 24px 0 24px',
							boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
							width: isMobile ? '100%' : '1340px',
							display: 'flex',
							flexDirection: isMobile ? 'column' : 'row',
							padding: isMobile ? '24px' : '50px 50px 50px 90px',
							gap: isMobile ? '22px' : '50px',
							alignItems: isMobile ? 'center' : 'flex-start',
						}}
					>
						<Box sx={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
							<Typography variant='h2' style={{ fontSize: isMobile ? '32px' : '44px' }}>
								Automated analytics
							</Typography>
							<Typography variant='body1' style={{ marginTop: '16px', fontSize: '20px' }}>
								VisionPlay automatically processes match statistics, training data, and player metrics. Coaches no longer waste time on spreadsheets and manual reports. Instead, they get ready-to-use dashboards, performance insights, and alerts about risks.
							</Typography>
						</Box>
						<Box sx={{ flex: 1, textAlign: 'center' }}>
							<img
								src={isMobile ? AnMob : AnlImg}
								alt='United'
								style={{ width: '100%', borderRadius: '16px' }}
							/>
						</Box>
					</Box>
				</Grid>
			</Grid>
			<Grid container sx={{ marginTop: '30px' }}>
				<Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
					<Box data-aos="fade-up"
						sx={{
							background: 'linear-gradient(320deg, #ea580c 27.09%, #fff 100%)',
							borderRadius: '24px 24px 0 24px',
							boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
							width: isMobile ? '100%' : '1340px',
							display: 'flex',
							flexDirection: isMobile ? 'column' : 'row',
							padding: isMobile ? '24px' : '50px 50px 50px 90px',
							gap: isMobile ? '22px' : '50px',
							alignItems: isMobile ? 'center' : 'flex-start',
						}}
					>
						<Box sx={{ flex: 1, textAlign: isMobile ? 'center' : 'left', color: '#000000' }}>
							<Typography variant='h2' style={{ fontSize: isMobile ? '32px' : '44px' }}>
								Injuries & mental health risks
							</Typography>
							<Typography variant='body1' style={{ marginTop: '16px', fontSize: '20px' }}>
							VisionPlay tracks physical and psychological indicators to identify risks before they become problems. From micro-injuries to stress levels, the system alerts coaches and medical staff early.
							</Typography>
							<Typography variant='body1' style={{ marginTop: '16px', fontSize: '20px' }}>
								
							</Typography>
						</Box>
						<Box sx={{ flex: 1, textAlign: 'center' }}>
							<img
								src={isMobile ? HelMob : HelImg}
								alt='Health'
								style={{ width: '100%', borderRadius: '16px' }}
							/>
						</Box>
					</Box>
				</Grid>
			</Grid>
			<Grid container sx={{ marginTop: '30px' }}>
				<Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
					<Box data-aos="fade-up"
						sx={{
							background: 'linear-gradient(91deg, #ff8a3d 0%, #fff 87.06%)',
							borderRadius: '24px 24px 24px 0',
							boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
							width: isMobile ? '100%' : '1340px',
							display: 'flex',
							flexDirection: isMobile ? 'column' : 'row',
							padding: isMobile ? '24px' : '50px 50px 50px 90px',
							gap: isMobile ? '22px' : '50px',
							alignItems: isMobile ? 'center' : 'flex-start',
						}}
					>
						<Box
							sx={{
								flex: 1,
								textAlign: isMobile ? 'center' : 'left',
								order: isMobile ? '0' : '2',
							}}
						>
							<Typography variant='h2' style={{ fontSize: isMobile ? '32px' : '44px' }}>
								AI-driven talent discovery tools
							</Typography>
							<Typography variant='body1' style={{ marginTop: '16px', fontSize: '20px' }}>
								VisionPlay uses artificial intelligence to analyze performance patterns, decision-making speed, and adaptability of players.Clubs and coaches gain a smarter, data-driven way to discover and nurture the next generation of stars.
							<Typography variant='body1' style={{ marginTop: '16px', fontSize: '20px' }}>
								With VisionPlay, raw potential is transformed into measurable insights. Our platform reduces scouting risks, highlights hidden talents, and helps academies invest in the right players at the right time.
							</Typography>
							</Typography>
						</Box>
						<Box sx={{ flex: 1, textAlign: 'center', order: isMobile ? '0' : '1' }}>
							<img
								src={isMobile ? AiMob : AImg}
								alt='Vision'
								style={{ width: '100%',
									 borderRadius: '16px',
									 }}
							/>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Projects;