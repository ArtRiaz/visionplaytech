import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import Icons from '../Icons/Icons.jsx';
// import coverImg from '../../img/blueCover.png';
import coverImg from '../../img/cover_image.jpg';

const Cover = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('1280'));
	console.log('123');

	// 🔥 ДОБАВЛЕНО: состояние для отслеживания наведения на кнопку
	const [isButtonHovered, setIsButtonHovered] = useState(false);

	const coverStyles = {
		position: 'absolute',
		top: 0,
		left: isMobile ? '-16px' : '-66px',
		width: '110%',
		height: '160%',
		opacity: '0.15',
		// filter: 'hue-rotate(140deg) saturate(0.7) brightness(2.4)',
	};

	{/*const macroChipAnimation = {
		y: [0, -20, 0],
		transition: {
			duration: 10,
			ease: 'easeInOut',
			repeat: Infinity,
		},
	};*/}

	const microChipAnimation = {
		y: [0, 20, 0],
		transition: {
			duration: 4,
			ease: 'easeInOut',
			repeat: Infinity,
		},
	};

	const jumpAnimation = {
		y: isButtonHovered ? [0, -90, 0, 0] : 0, // Быстрый подскок при наведении
		transition: {
			duration: 1,
			times: [0, 0.3, 2, 1],
			ease: ['easeOut', 'linear', 'easeIn'],
		},
	};

	const titleAnimation = {
		opacity: [0, 1],
		y: [50, 0],
		transition: {
		  duration: 1.5,
		  ease: 'easeInOut',
		  delay: 0.5, 
		},
	  };

	  const subtitleAnimation = {
		opacity: [0, 1],
		y: [50, 0],
		transition: {
		  duration: 1.5,
		  ease: 'easeInOut',
		  delay: 1, 
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
			id='cover'
			sx={{
				position: 'relative',
				marginTop: isMobile ? '40px' : '72px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				color: '#f97316',
				textAlign: 'center',
				boxSizing: 'border-box',
			}}
		>
			{/* <img src={coverImg} alt='Cover' style={coverStyles} /> */}

			{/*<motion.div
    style={{
        position: 'absolute',
        left: '200px',
        display: isMobile ? 'none' : 'block',
        filter: 'hue-rotate(25deg) saturate(2) brightness(0.8)',
		opacity: 0.3,
    }}
    animate={macroChipAnimation}
>
    <Icons.Ball />
</motion.div>*/}

<motion.div
	style={{
		position: 'absolute',
		right: '350px',
		display: isMobile ? 'none' : 'block',
		filter: 'hue-rotate(25deg) saturate(2) brightness(0.8)',
		opacity: 0.3,
	}}
	animate={microChipAnimation}
	>
	<motion.div animate={jumpAnimation}>
	<Icons.Stade />
	</motion.div>
</motion.div>

			<Box
				sx={{
					position: 'relative',
					zIndex: 1,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					color: '#000000',
					maxWidth: '1066px',
				}}
			>
				<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={titleAnimation}
			>
				<Typography
					variant='h1'
					sx={{
						fontSize: isMobile ? '44px' : '88px',
						lineHeight: isMobile ? '122%' : '105%',
						letterSpacing: '-0.06em',
						textAlign: 'center',
						marginBottom: '24px',
						fontWeight: '700',
					}}
				>
					{isMobile ? (
						<>
							VisionPlay
						</>
					) : (
						<>VisionPlay</>
					)}
				</Typography>
				</motion.div>
				<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={subtitleAnimation}
>
				<Typography
					variant='body1'
					sx={{
						fontWeight: '400',
						fontSize: '22px',
						lineHeight: '145%',
						textAlign: 'center',
						marginTop: '24px',
					}}
				>
					{isMobile ? (
						<>
							AI solution <br />for your club!<br /> 
						</>
					) : (
						<>AI solution for your club!</>
					)}
				</Typography>
				</motion.div>
				<motion.div animate={buttonLoadAnimation}>
				<Button
					variant='contained'
					color='primary'
					onMouseEnter={() => setIsButtonHovered(true)}
					onMouseLeave={() => setIsButtonHovered(false)}
					sx={{
						marginTop: '30px',
						borderRadius: '44px',
						display: 'flex',
						alignItems: 'center',
						height: '58px',
						padding: '27.5px',
						textTransform: 'uppercase',
						background: '#ea580c',
						transition: 'background-color 0.25s ease', // Плавный переход для фона кнопки
						'& svg path': {
							transition: 'fill 0.25s ease',
						},
						'&:hover': {
							backgroundColor: '#d0d0d1', // Используем цвет фона MUI по умолчанию
							'& .text': {
								color: '#ea580c', // Изменяем цвет текста на белый при ховере
								transform: 'scale(1.02)',
							},
							'& svg path': {
								fill: '#ea580c', // Изменяем цвет SVG path на белый при ховере
								transition: 'fill 0.25s ease',
							},
						},
					}}
					onClick={handleBookACallClick}
				>
					<Typography
						className='text'
						sx={{
							fontWeight: '700',
							fontSize: '16px',
							lineHeight: '100%',
							color: '#ffffff',
							display: 'flex',
							alignItems: 'center',
							transition: 'color 0.25s ease', // Плавный переход для текста
						}}
					>
						Schedule Your Demo Now
						<Box
							sx={{
								marginLeft: '17px',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<Icons.SoccerBall/>
						</Box>
					</Typography>
				</Button>
				</motion.div>
			</Box>
		</Box>
	);
};

export default Cover;
