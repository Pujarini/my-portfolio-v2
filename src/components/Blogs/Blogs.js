import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "swiper/css/bundle";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { blogData } from "../../blogsData";

const Blogs = () => {
  return (
    <div className="blogs" id="blogs">
      <div className="left">
        <h1 className="blog-title">BLOGS</h1>
      </div>
      <div className="right">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          direction={"horizontal"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {blogData.map((item) => {
            return (
              <SwiperSlide>
                <Card sx={{ maxWidth: 300 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={item.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.topic}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">See blog</Button>
                  </CardActions>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
