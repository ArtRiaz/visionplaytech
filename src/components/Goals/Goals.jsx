import React, {useEffect} from 'react';
import { useTheme, useMediaQuery, Box, Typography, Grid, Paper } from '@mui/material';
import greenCover from '../../img/greenCover.png';
import whiteCover from '../../img/whiteCover.png';
import Icons from '../Icons/Icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Goals = () => {
 const theme = useTheme();
 const isMobile = useMediaQuery(theme.breakpoints.down('1280'));

 const coverBaseStyles = {
  position: 'absolute',
  opacity: '0.5',
  top: '20%',
  right: 0,
  zIndex: 0,
  filter: 'saturate(0.2) brightness(0.8) grayscale(0.5)',
 };

 const greenCoverStyles = {
  ...coverBaseStyles,
  height: '60%',
  width: '100%',
 };

 const whiteCoverStyles = {
  ...coverBaseStyles,
  height: '80%',
  width: '100%',
 };

 useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false, 
        });
    }, []);

 const roadmapBlocks = [
  {
   title: '2025 Q3–Q4',
   description: '• MVP for academies (AI profiles, communication)\n• First pilot clubs\n• Integration of trackers & Vision AI\n• AI Scouting Tools',
   borderRadius: '24px 24px 0 24px',
   icon: <Icons.planetIcon />,
  },
  {
   title: '2026 Q1–Q2',
   description: '• Beta testing expansion\n• Advanced AI analytics\n• Mobile app launch\n• Partnership integrations',
   borderRadius: '24px 24px 24px 0',
   icon: <Icons.planetIcon />,
  },
  {
   title: '2027',
   description: '• Full expansion across Europe\n• Complete AI ecosystem: analytics, health, VR training\n• Global market entry',
   borderRadius: '0 24px 24px 24px',
   icon: <Icons.planetIcon />,
  },
 ];

 return (
	<Box data-aos="fade-up"
	 id='goals'
	 sx={{
	  display: 'flex',
	  position: 'relative',
	  flexDirection: 'column',
	  justifyContent: 'center',
	  alignItems: 'center',
	  padding: '137px 16px 0',
	  zIndex: 1, // Ensure content is above background covers
	 }}
	>
  
	 {/* Gradient overlays */}
	 <Box
	  sx={{
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		height: { xs: 80, md: 140 },
		background: 'linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0) 100%)',
		zIndex: 1,
		pointerEvents: 'none',
	  }}
	 />
	 <Box
	  sx={{
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: { xs: 80, md: 160 },
		background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, #ffffff 100%)',
		zIndex: 1,
		pointerEvents: 'none',
	  }}
	 />
  
	 {/* Background Covers */}
	 <img src={greenCover} alt='Green Cover' style={greenCoverStyles} />
	 <img src={whiteCover} alt='White Cover' style={whiteCoverStyles} />

	 {/* Main Block */}
	 <Box
    sx={{
     marginBottom: '40px',
     width: isMobile ? 'auto' : '920px',
     textAlign: 'center',
     zIndex: 2, // Ensure this is on top of the covers
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
     Roadmap
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
     Building tomorrow’s game with AI
    </Typography>
   </Box>
   <Grid data-aos="zoom-in-up" container spacing={4} sx={{ zIndex: 2 }}>
    {roadmapBlocks.map((block, index) => (
     <Grid item xs={12} md={4} key={index}>
      <Paper
       elevation={3}
       sx={{
        borderRadius: block.borderRadius,
        padding: '20px',
        height: isMobile ? '440px' : '260px',
        background: 'rgba(10, 14, 53, 0.32)',
        zIndex: 2,
       }}
      >
       <Typography
        variant='h5'
        sx={{
         display: 'flex',
         flexDirection: isMobile ? 'column' : 'row', 
         alignItems: isMobile ? 'flex-start' : 'center', 
         gap: isMobile ? '4px' : '8px',


fontWeight: 700,
         fontSize: '28px',
         lineHeight: '129%',
         letterSpacing: '-0.06em',
         textTransform: 'capitalize',
         color: '#ff8a3d',
         marginBottom: '16px',
        }}
       >
        <Box
			sx={{
			width: '32px',
			height: '32px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			marginBottom: isMobile ? '8px' : '0',
			// Простой способ, если иконки это SVG с currentColor
			color: '#ff8a3d',
			'& svg': {
			fill: '#ff8a3d',
			},
			}}
			>
			{block.icon}
			</Box>
        {block.title}
       </Typography>

       <Typography
        variant='body1'
        sx={{
         fontWeight: 400,
         fontSize: '18px',
         lineHeight: '156%',
         color: '#000000',
         whiteSpace: 'pre-line',
        }}
       >
        {block.description}
       </Typography>
      </Paper>
     </Grid>
    ))}
   </Grid>
  </Box>
 );
};

export default Goals;