import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Layout from '../components/layoutPages';

export default function StandardImageList() {
  return (
    <Layout>

        <div className="container text-center py-5">
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item">Gallery</li>
                </ol>
            </nav>
        </div>
        <div className='d-flex justify-content-center'>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
            <ImageListItem key={item.img}>
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