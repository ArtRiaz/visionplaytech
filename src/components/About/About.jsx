import React, {useEffect} from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import Icons from '../Icons/Icons.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const About = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('1280'));

	useEffect(() => {
        AOS.init({
            duration: 1000,
			once: false, 
        });
    }, []);

	const firstAnim = {
		y: [0, -20, 0],
		transition: {
			duration: 4,
			ease: 'easeInOut',
			repeat: Infinity,
		},
	};

	const secondAnim = {
		y: [0, 20, 0],
		transition: {
			duration: 4,
			ease: 'easeInOut',
			repeat: Infinity,
		},
	};

	const buttonLoadAnimation = {
		scale: [1, 1.1, 1],
		transition: {
		  duration: 0.8,
		  ease: 'easeInOut',
		  delay: 1.5, 
		},
	  };

	  const handleBookACallClick = () => {
		window.open('https://calendly.com/asriazantsev22/visionplay', '_blank');
	};

	return (
		<Box
			id='about' data-aos="fade-up"
			sx={{
				// background: 'linear-gradient(314deg, #ffffff 0%, #d0d0d1 100%)',
				padding: '80px 16px 130px 16px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			  }}
		>
			<Typography
				variant='h2'
				sx={{
					fontSize: isMobile ? '46px' : '74px',
					fontWeight: 700,
					lineHeight: '116%',
					letterSpacing: '-0.06em',
					textTransform: 'capitalize',
					color: '#000000',
					marginBottom: '24px',
				}}
			>
				Features
			</Typography>
			<Typography
				variant='body1'
				sx={{
					fontWeight: 400,
					fontSize: '20px',
					lineHeight: '160%',
					color: '#000000',
					marginBottom: isMobile ? '35px' : '20px',
				}}
			>
				Core Features of VisionPlay
			</Typography>

			<Box
				sx={{
					display: 'flex',
					flexDirection: isMobile ? 'column' : 'row',
					gap: '10px',
					flexWrap: 'wrap',
					borderRadius: '0 24px 24px 24px',
				}}
			>
				<Box data-aos="flip-left"
					sx={{
						flex: '1',
						borderRadius: '0 24px 24px 24px',
						width: isMobile ? 'auto' : '326px',
						background: '#ffffff',
						boxShadow: '1',
						padding: '30px 34px 30px 22px',
						minHeight: isMobile ? '394px' : '450px',
					}}
				>
					<Box
						sx={{
							marginBottom: '33px',
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<Typography
							variant='h2'
							sx={{
								fontWeight: 700,
								fontSize: '54px',
								lineHeight: '119%',
								color: '#ea580c',
							}}
						>
							01
						</Typography>
							<motion.div animate={firstAnim}><Icons.About1 /></motion.div>
					</Box>
					<Box>
						<Typography
							variant='h2'
							sx={{
								fontWeight: 700,
								fontSize: '28px',
								lineHeight: '129%',
								letterSpacing: '-0.06em',
								textTransform: 'capitalize',
								color: '#ea580c',
								marginBottom: '16px',
							}}
						>
							Centralized Players Profiles
						</Typography>
						<Typography
							variant='body1'
							sx={{
								fontWeight: 400,
								fontSize: '18px',
								lineHeight: '156%',
								color: '#000000',
							}}
						>
							All player data in one place: performance stats, health, recovery, psychological and cognitive tests, educational progress.
						</Typography>
					</Box>
				</Box>
				<Box data-aos="flip-left"
					sx={{
						flex: '1',
						borderRadius: '0 24px 24px 24px',
						width: isMobile ? 'auto' : '326px',
						background: '#ffffff',
						boxShadow: '1',
						padding: '30px 34px 30px 22px',
						minHeight: isMobile ? '394px' : '450px',
					}}
				>
					<Box
						sx={{
							marginBottom: '33px',
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<Typography
							variant='h2'
							sx={{
								fontWeight: 700,
								fontSize: '54px',
								lineHeight: '119%',
								color: '#ea580c',
							}}
						>
							02
						</Typography>
						<motion.div animate={secondAnim}><Icons.About3/></motion.div>
					</Box>
					<Box>
						<Typography
							variant='h2'
							sx={{
								fontWeight: 700,
								fontSize: '28px',
								lineHeight: '129%',
								letterSpacing: '-0.06em',
								textTransform: 'capitalize',
								color: '#ea580c',
								marginBottom: '16px',
							}}
						>
							AI-Powered Player Analysis
						</Typography>
						<Typography
							variant='body1'
							sx={{
								fontWeight: 400,
								fontSize: '18px',
								lineHeight: '156%',
								color: '#000000',
							}}
						>
							Integration of trackers, Vision AI, and analytics.
							Personalized recommendations, injury risk prediction, workload optimization, and mental state monitoring.
						</Typography>
					</Box>
				</Box>
				<Box data-aos="flip-left"
					sx={{
						flex: '1',
						borderRadius: '0 24px 24px 24px',
						width: isMobile ? 'auto' : '326px',
						background: '#ffffff',
						boxShadow: '1',
						padding: '30px 34px 30px 22px',
						minHeight: isMobile ? '394px' : '450px',
					}}
				>
					<Box
						sx={{
							marginBottom: '33px',
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<Typography
							variant='h2'
							sx={{
								fontWeight: 700,
								fontSize: '54px',
								lineHeight: '119%',
								color: '#ea580c',
							}}
						>
							03
						</Typography>
						<motion.div animate={firstAnim}><Icons.About2 /></motion.div>
					</Box>
					<Box>
						<Typography
							variant='h2'
							sx={{
								fontWeight: 700,
								fontSize: '28px',
								lineHeight: '129%',
								letterSpacing: '-0.06em',
								textTransform: 'capitalize',
								color: '#ea580c',
								marginBottom: '16px',
							}}
						>
							Scouting & Talent Discovery
						</Typography>
						<Typography
							variant='body1'
							sx={{
								fontWeight: 400,
								fontSize: '18px',
								lineHeight: '156%',
								color: '#000000',
							}}
						>
							AI platform for objective player ranking and potential assessment.
							Transfer reports, career development support, and data-driven scouting decisions.
						</Typography>
					</Box>
				</Box>
				<Box data-aos="flip-left"
					sx={{
						flex: '1',
						borderRadius: '0 24px 24px 24px',
						width: isMobile ? 'auto' : '326px',
						background: '#ffffff',
						boxShadow: '1',
						padding: '30px 34px 30px 22px',
						minHeight: isMobile ? '394px' : '450px',
					}}
				>
					<Box
						sx={{
							marginBottom: '33px',
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<Typography
							variant='h2'
							sx={{
								fontWeight: 700,
								fontSize: '54px',
								lineHeight: '119%',
								color: '#ea580c',
							}}
						>
							04
						</Typography>
						<motion.div animate={secondAnim}><Icons.About4 /></motion.div>
					</Box>
					<Box>
						<Typography
							variant='h2'
							sx={{
								fontWeight: 700,
								fontSize: '28px',
								lineHeight: '129%',
								letterSpacing: '-0.06em',
								textTransform: 'capitalize',
								color: '#ea580c',
								marginBottom: '16px',
							}}
						>
							Immersive Training
						</Typography>
						<Typography
							variant='body1'
							sx={{
								fontWeight: 400,
								fontSize: '18px',
								lineHeight: '156%',
								color: '#000000',
							}}
						>
							VR modules and gamified exercises.
							Players train in realistic match-like conditions, simulate game scenarios, and improve skills through play.
						</Typography>
					</Box>
				</Box>
			</Box>

			<motion.div animate={buttonLoadAnimation}><Button
				variant='outlined'
				sx={{
					border: '1px solid #ea580c',
					borderRadius: '44px',
					padding: '0 27.5px',
					height: '58px',
					marginTop: '40px',
					color: '#ea580c',
					fontSize: '18px',
					fontWeight: '600',
					textTransform: 'uppercase', 
					'&:hover': {
			borderColor: '#000000', // Новый цвет границы при наведении
			backgroundColor: 'transparent', // Если хотите сохранить прозрачный фон
			transform: 'scale(1.02)',
		}
				}}
				onClick={handleBookACallClick}
			>
				Schedule Your Demo Now
			</Button></motion.div>
		
		</Box>
	);
};

export default About;
