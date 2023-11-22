import React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Layout from '../components/layoutPages';


const itemData = [
    {
      img: '/images/activistes-social-cover.gif',
      title: 'Social activites',
    },
    {
        img: '/images/activites-community-cover.gif',
        title: 'Community activites',
    },
    {
        img: '/images/activites-events-cover.gif',
        title: 'Events',
    },

    {
        img: '/images/services-social-cover.gif',
        title: 'Social activites',
    },
    {
        img: '/images/services-community-cover.gif',
        title: 'Community Service',
    },
    {
        img: '/images/services-contribution-cover.gif',
        title: 'Contribution',
    },
  ];

function About() {
  return (
    <Layout>

        <div className="container text-center py-5 max-width">
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                </ol>
            </nav>
        </div>

        <div className="container-xxl py-5 max-width bottom-green-border">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-4">
                        <div className='row'>
                            <div className="col-lg-3"><img className="max-width" src="/images/logo-about.gif" alt="About Us" /></div>
                            <div className="col-lg-9">
                                <h3 className='h1-home-section01'>ABOUT US</h3>
                                <p className='text-home-section01'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='row'>
                            <div className="col-lg-3"><img className="max-width" src="/images/logo-mission.gif" alt="Our Mission" /></div>
                            <div className="col-lg-9">
                            <h3 className='h1-home-section01'>OUR MISSION</h3>
                            <p className='text-home-section01'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='row'>
                            <div className="col-lg-3"><img className="max-width" src="/images/logo-vision.gif" alt="Our Vision" /></div>
                            <div className="col-lg-9">
                            <h3 className='h1-home-section01'>OUR VISION</h3>
                            <p className='text-home-section01'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container d-flex justify-content-center">
                <h1 className='h1-gallery'>GALLERY</h1>
        </div>

        <div className='container-xxl py-5 d-flex justify-content-center home-gallery-section max-width'>
            <ImageList sx={{ width: '90%', height: 'auto' }} cols={3} rowHeight={391.21}>
            {itemData.map((item) => (
                <ImageListItem key={item.img} sx={{margin: '0 36px 142px 36px'}}>
                <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
            </ImageList>
        </div>
    
    </Layout>
  );
}

export default About;