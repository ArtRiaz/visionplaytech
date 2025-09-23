import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Icons from '../Icons/Icons.jsx';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [menuOpen, setMenuOpen] = useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('1280'));
	const navigate = useNavigate();

	const headerVariants = {
		hidden: { opacity: 0, y: -50 },
		visible: { opacity: 1, y: 0, transition: { duration: 1 } },
	};

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
		setMenuOpen(true);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		setMenuOpen(false);
	};

	const isMenuOpen = Boolean(anchorEl);

	const menuItems = [
		{ name: 'Why VisionPlay', id: 'cover' },
		{ name: 'Our Solution', id: 'projects' },
		{ name: 'Features', id: 'about' },
		{ name: 'Roadmap', id: 'goals' },
		{ name: 'Work with Us', id: 'form' },
		{ name: 'Contact', id: 'social' },
	];

	const navBtns = {
		padding: '8px 16px',
		fontSize: '16px',
		textTransform: 'initial',
		transition: 'opacity 0.25s ease-in-out',
		'&:hover': {
			opacity: 0.8,
		},
	};

	const handleLinkClick = (id) => {
		if (id === 'home') {
			navigate('/');
		} else {
			navigate('/'); // Redirect to home first
			setTimeout(() => {
				// Delay scrolling to allow redirection to complete
				scroller.scrollTo(id, {
					smooth: true,
					offset: -70,
					duration: 1500,
				});
			}, 500); // Adjust timeout if necessary
		}
		handleMenuClose();
	};

	const handleBookACallClick = () => {
		window.open('https://calendly.com/asriazantsev22/visionplay', '_blank');
	};

	const handleTapTapClick = () => {
		window.location.href = '';
		navigate('/');
		setTimeout(() => {
			scroller.scrollTo('home', {
				smooth: true,
				offset: -70,
				duration: 1500,
			});
		}, 500);
	};

	return (
		<motion.div
			initial='hidden'
			animate='visible'
			variants={headerVariants}
			style={{ position: 'relative' }}
		>
			<AppBar
				position='static'
				sx={{
					backgroundColor: 'transparent',
					boxShadow: 'none',
					color: '#000000', // 
					height: isMobile ? '90px' : '114px',
					padding: isMobile ? '0 16px' : '0 66px',
				}}
			>
				<Toolbar
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						height: '100%',
						padding: '0 !important',
					}}
				>
					{/* Контейнер для логотипа и надписи */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							cursor: 'pointer',
							// ВАЖНО: на мобилке не даём логу растягиваться,
							// иначе оно тянет компоновку и BOOK DEMO «уплывает» к центру
							flexGrow: 1,
						}}
						onClick={handleTapTapClick}
						>
						{/* Внутренний контейнер только для визуального смещения */}
						<Box sx={{ transform: isMobile ? 'translateX(-6px)' : 'none' }}>
							<Icons.Logotip />

							<Typography
							sx={{
								fontFamily: 'var(--font-family)',
								fontWeight: 700,
								fontSize: isMobile ? '12px' : '14px',
								lineHeight: '133%',
								letterSpacing: '-0.06em',
								color: '#000000',
								marginTop: '-15px',
							}}
							>
							VisionPlay
							</Typography>
						</Box>
						</Box>

					{!isMobile && (
						<Box
							sx={{
								flexGrow: 1,
								display: 'flex',
								justifyContent: 'center',
								marginLeft: 'auto',
								marginRight: 'auto',
							}}
						>
							{menuItems.map((item, index) => (
								<Button
									key={index}
									color='inherit'
									sx={navBtns}
									onClick={() => handleLinkClick(item.id)}
								>
									{item.name}
								</Button>
							))}
						</Box>
					)}

					<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
						<Button
							color='inherit'
							sx={{
								border: '2px solid #ea580c',
								borderRadius: '44px',
								padding: '0 21px',
								display: 'flex',
								alignItems: 'center',
								height: '58px',
								textTransform: 'uppercase',
								fontWeight: '700',
								fontSize: '16px',
								lineHeight: '100%',
								textAlign: 'center',
								color: '#ea580c',
								marginRight: isMobile ? '13px' : '0',
								transition: 'opacity 0.25s ease-in-out',
								'&:hover': {
									opacity: 0.8,
								},
							}}
							onClick={handleBookACallClick}
						>
							Book Demo
						</Button>
					</motion.div>

					{isMobile && (
						<>
							<IconButton
								edge='start'
								color='inherit'
								aria-label='menu'
								onClick={isMenuOpen ? handleMenuClose : handleMenuOpen}
							>
								{isMenuOpen ? <CloseIcon /> : <Icons.Hamburger />}
							</IconButton>
							<Menu
								anchorEl={anchorEl}
								open={isMenuOpen}
								onClose={handleMenuClose}
								PaperProps={{
									sx: {
									width: '100%',
									left: '0!important',
									height: '100%!important',
									borderRadius: '24px 24px 0 0',
									background: 'linear-gradient(314deg, #ff8a3d 43.89%, #d0d0d1 100%)',
									top: '80px!important',
									bottom: '0!important',
									position: 'absolute',
									right: '0!important',
									maxWidth: '100%',
									maxHeight: '100%',
									fontFamily: 'FMTS !important',
									color: '#fff', // <-- общий цвет текста БЕЛЫЙ
									'& *': { fontFamily: 'FMTS !important' },
									'& ul': {
										padding: '31px 0 0 0',
										display: 'flex',
										flexDirection: 'column',
										gap: '12px',
									},
									'& li': {
										padding: '0 16px',
										height: '52px',
										fontWeight: 700,
										fontSize: '24px',
										lineHeight: '133%',
										textAlign: 'center',
										color: '#fff', // <-- пункты меню белые
										'&:hover': {
										backgroundColor: 'rgba(255,255,255,0.12)',
										color: '#fff',
										},
									},
									},
								}}
								>
								{menuItems.map((item, index) => (
									<MenuItem key={index} onClick={() => handleLinkClick(item.id)}>
									<Button
										sx={{
										width: '100%',
										textAlign: 'center',
										color: '#fff', // <-- кнопка/текст белые
										fontWeight: 700,
										fontSize: '24px',
										textTransform: 'none',
										'&:hover': { color: '#fff' },
										}}
									>
										{item.name}
									</Button>
									</MenuItem>
								))}
								</Menu>

						</>
					)}
				</Toolbar>
			</AppBar>
		</motion.div>
	);
};

export default Header;
