import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Images() {
  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
    {
      img: "https://i.natgeofe.com/n/6c02ad5a-977b-4f12-b9c0-02ffb0736e07/metropolitan-cathedral-zocalo-mexico-city_16x9.JPG",
      title: 'Mexico',
      rows: 2,
      cols: 2,
    },
    {
      img: "https://www.state.gov/wp-content/uploads/2018/11/France-1980x1406.jpg",
      title: 'France',
    },
    {
      img: "https://i.natgeofe.com/k/33e48abd-f2e7-4430-b7bf-cc9a18c14cc6/brazil-christ-the-redeemer_2x1.jpg",
      title: 'Brazil',
    },
    {
      img: "https://www.state.gov/wp-content/uploads/2018/11/Spain-2109x1406.jpg",
      title: 'Spain',
      cols: 2,
    },
    {
      img: "https://www.travelandleisure.com/thmb/CwASoPDthL_sRQW6yA-qh-zJPlg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/santorini-POINTSGREECE0617-8cd08e70fec4471b8827dca8627b8eae.jpg",
      title: 'Greece',
      cols: 2,
    },
    {
      img: "https://images.ireland.com/media/Images/Tipperary/aafe8401d6a1418cb65e2767f330c94b.jpg?w=1934",
      title: 'Ireland',
      rows: 2,
      cols: 2,
    },
    {
      img: "https://i.natgeofe.com/k/42e832f5-fd48-43ff-b338-091bdf4048ca/india-tajmahal_16x9.jpg?w=1200",
      title: 'India',
    },
    {
      img: "https://a.cdn-hotels.com/gdcs/production5/d1996/54fdb73f-eee5-4612-a3e7-6fc7ed2f7bee.jpg?impolicy=fcrop&w=800&h=533&q=medium",
      title: 'Australia',
    },
    {
      img: "https://www.kids-world-travel-guide.com/images/santiagodechile-2.jpg",
      title: 'Chile',
      rows: 2,
      cols: 2,
    },
    {
      img: "https://a.cdn-hotels.com/gdcs/production159/d204/01ae3fa0-c55c-11e8-9739-0242ac110006.jpg",
      title: 'Canada',
      cols: 2,
    },
  ];
  