import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

function CardsSection() {
  const [loading, setLoading] = useState(true);

  const cardsData = [
    {
      image: 'https://img.freepik.com/free-photo/spooky-circular-halloween-background_23-2147673522.jpg?t=st=1721294972~exp=1721298572~hmac=376e877401c215619774a0b10bd28926dab3080d869d5253693059d526da7a06&w=996',
      title: 'Card Title 1',
      subtitle: 'Card Subtitle 1',
      content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    },
    {
      image: 'https://img.freepik.com/free-photo/top-view-woman-creating-inspiring-vision-board_23-2150104614.jpg?t=st=1721296401~exp=1721300001~hmac=5c1fbbb66eacea063efcc324a986d0b9ff847443f22637d7f36ba052b2d7df39&w=996',
      title: 'Card Title 2',
      subtitle: 'Card Subtitle 2',
      content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    },
    {
      image: 'https://img.freepik.com/free-photo/inspiring-vision-board-with-quotes_23-2150104682.jpg?t=st=1721297096~exp=1721300696~hmac=3567608ffeff9fc04c35ea2f807339e4f72c9ef27c722e2b10d8446c2118178b&w=996',
      title: 'Card Title 3',
      subtitle: 'Card Subtitle 3',
      content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    },
    {
      image: 'https://img.freepik.com/free-photo/top-view-travel-photos-with-adventure-essentials_23-2149185264.jpg?t=st=1721297124~exp=1721300724~hmac=0489b95c1566871b7f90841b527a07266a5cf6c9496797b045a2da9339cd8c11&w=996',
      title: 'Card Title 4',
      subtitle: 'Card Subtitle 4',
      content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    },
    {
      image: 'https://img.freepik.com/free-photo/woman-creating-inspiring-vision-board-high-angle_23-2150104616.jpg?t=st=1721297173~exp=1721300773~hmac=4d728b315b555602203991bfa14e9c32e1f38f876f42c418c77ca033b7e3299e&w=996',
      title: 'Card Title 5',
      subtitle: 'Card Subtitle 5',
      content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    },
    {
      image: 'https://img.freepik.com/free-photo/woman-creating-inspiring-vision-board-top-view_23-2150104612.jpg?t=st=1721297205~exp=1721300805~hmac=8fbf4f96eb8fb28d10c87452d6f0ef9e6a23bbdd64a32ff45bdcc464f9fa0104&w=996',
      title: 'Card Title 6',
      subtitle: 'Card Subtitle 6',
      content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    },
    {
      image: 'https://img.freepik.com/free-photo/top-view-hands-holding-photos_23-2149617672.jpg?t=st=1721297225~exp=1721300825~hmac=58501805780cc04135b2c9b51d9dfd759824c2bd87d1f2a44e3c0678ef20600b&w=996',
      title: 'Card Title 7',
      subtitle: 'Card Subtitle 7',
      content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    },
    {
      image: 'https://img.freepik.com/free-photo/top-view-woman-creating-inspiring-vision-board_23-2150104614.jpg?t=st=1721296401~exp=1721300001~hmac=5c1fbbb66eacea063efcc324a986d0b9ff847443f22637d7f36ba052b2d7df39&w=996',
      title: 'Card Title 8',
      subtitle: 'Card Subtitle 8',
      content: 'Some quick example text to build on the card title and make up the bulk of the card content.',
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bg-[#faf5f5] h-full w-full'>
      <h1 className='text-[20px] font-semibold'>
        Basic Cards
      </h1>
      <div className='pb-7 mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {loading ? (
          Array.from(new Array(8)).map((_, index) => (
            <Card key={index} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <Skeleton variant="rectangular" height={150} />
                <CardContent>
                  <Skeleton variant="text" height={40} />
                  <Skeleton variant="text" height={20} />
                  <Skeleton variant="text" height={60} />
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Skeleton variant="rectangular" width={100} height={36} />
              </CardActions>
            </Card>
          ))
        ) : (
          cardsData.map((card, index) => (
            <Card key={index} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image}
                  alt="Card Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2" component="div" sx={{ mt: -1.5, color: "gray" }}>
                    {card.subtitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" variant='contained' sx={{ color: 'white', backgroundColor: "gray", borderRadius: "0px", mb: 1.5, mt: -1 }}>
                  Button
                </Button>
              </CardActions>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

export default CardsSection;