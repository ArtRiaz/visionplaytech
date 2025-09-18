import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import popupIcon from '../../img/popupIcon.png';
import { useTheme, useMediaQuery } from '@mui/material';

const Popup = ({ open, onClose }) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('1280'));

	if (!open) return null;

	return (
		<Box
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
				backdropFilter: 'blur(5px)', // Blur effect on background
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: 1300, // Ensure it appears above other content
			}}
		>
			<Box
				sx={{
					position: 'relative',
					backgroundColor: '#fff',
					borderRadius: '12px',
					padding: isMobile ? '65px 14px' : '44px 24px',
					width: isMobile ? '328px' : '865px',
					textAlign: 'center',
					boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Box sx={{ marginBottom: '16px' }}>
					{/* Replace with your icon */}
					<img src={popupIcon} alt='Icon' width='80' height='80' />
				</Box>
				<Typography variant='h6' sx={{ marginBottom: '46px', fontWeight: 700 }}>
					Success!
				</Typography>
				<Typography variant='body1' sx={{ marginBottom: '34px' }}>
					Your message has been sent successfully. We will get back to you soon.
				</Typography>
				<Button
					onClick={onClose}
					variant='contained'
					sx={{
						borderRadius: '44px',
						padding: '21px',
						width: '185px',
						fontWeight: '700',
						fontSize: '16px',
						lineHeight: '100%',
						textTransform: 'uppercase',
						textAlign: 'center',
						color: '#0e0b3d',
						backgroundColor: '#ea580c',
						'&:hover': {
							backgroundColor: '#d0d0d1', color: '#ea580c', transform: 'scale(1.02)'
							
						},
					}}
				>
					Ok
				</Button>
			</Box>
		</Box>
	);
};

export default Popup;
