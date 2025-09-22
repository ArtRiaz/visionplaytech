import React from 'react';
import { Box, Typography, Grid, Button, IconButton } from '@mui/material';
import { scroller } from 'react-scroll';
import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Linkedin, Instagram, Youtube, Send } from "lucide-react";

const Footer = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('1280'));

  const handleLinkClick = (id) => {
    if (id === 'policy') {
      navigate('/policy');
    } else {
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(id, {
          smooth: true,
          duration: 1500,
          offset: -70,
        });
      }, 0);
    }
  };

  const navBtns = {
    padding: '8px 16px',
    fontSize: '16px',
    textTransform: 'initial',
    transition: 'opacity 0.25s ease-in-out',
    color: '#ffffff',
    '&:hover': {
      opacity: 0.8,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  };

  const menuItems = [
    { name: 'Why VisionPlay', id: 'cover' },
    { name: 'Our Solution', id: 'projects' },
    { name: 'Features', id: 'about' },
    { name: 'Roadmap', id: 'goals' },
    { name: 'Work with Us', id: 'form' },
    { name: 'Contact', id: 'social' },
    { name: 'Policy', id: 'policy' },
  ];

  const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/vision-play/', Icon: Linkedin },
    { label: 'Telegram', href: 'https://t.me/visionplay_channel', Icon: Send },
    { label: 'Instagram', href: 'https://www.instagram.com/visionplay_official_?igsh=dHA0NHVlbzl6N3g1&utm_source=qr', Icon: Instagram },
    { label: 'YouTube', href: 'https://www.youtube.com/', Icon: Youtube },
  ];

  return (
    <Box
      component="footer"
	  id="social"
      sx={{
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '40px 20px',
        textAlign: 'center',
        marginTop: '40px',
      }}
    >
      {/* Навигация */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        direction={isMobile ? 'column' : 'row'}
      >
        {menuItems.map((item, index) => (
          <Grid item key={index}>
            <Button sx={navBtns} onClick={() => handleLinkClick(item.id)}>
              {item.name}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Социальные сети */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          marginTop: 3,
        }}
      >
        {socials.map(({ label, href, Icon }, index) => (
          <IconButton
            key={index}
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#ffffff',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#ea580c',
                transform: 'scale(1.2)', // лёгкий скейл
              },
            }}
            aria-label={label}
          >
            <Icon size={24} />
          </IconButton>
        ))}
      </Box>

      {/* Авторское право */}
      <Box sx={{ marginTop: 3 }}>
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          © {new Date().getFullYear()} VisionPlay. All rights reserved.
        </Typography>
		<Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          Bordeaux, France
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;