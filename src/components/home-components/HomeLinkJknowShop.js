import React from "react";
import Box from "@mui/material/Box";
import Flickity from "react-flickity-component";
import "./ShopFlickity.css";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import { Divider, Link, Button, CardActions, CardContent } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { height } from "@mui/system";

const shopList = [
  {
    id: 1,
    img: "images/shop/shop1.webp",
  },
  {
    id: 2,
    img: "images/shop/shop2.webp",
  },
  {
    id: 3,
    img: "images/shop/shop1.webp",
  },
  {
    id: 4,
    img: "images/shop/shop2.webp",
  },
];

function HomeLinkJknowShop() {
  const flickityOptions = {
    initialIndex: 1,
    selectedAttraction: 0.01,
    friction: 0.15,
    contain: true,
    pageDots: false,
    autoPlay: true,
    wrapAround: true,
  };

  return (
    <>
      <Box mb={10}>
        <Typography
          mt={4}
          sx={{ fontSize: "3rem", textAlign: "center", color: "black" }}
        >
          J Knowledge Shop
        </Typography>
        <Box>
          <Flickity
            className={"carousel"} // default ''
            elementType={"div"} // default 'div'
            options={flickityOptions} // takes flickity options {}
            reloadOnUpdate // default false
            static // default false
          >
            {shopList.map((val, key) => {
              return (
                <Box sx={{ mx: 2 }} key={key} className="shop-cell">
                  <Card
                    sx={{ borderRadius: 10, border: 5, borderColor: "white" }}
                  >
                    <CardActionArea
                      component={Link}
                      target="_blank"
                      href="https://jknowledgetutor.com/%e0%b8%a3%e0%b9%89%e0%b8%b2%e0%b8%99%e0%b8%84%e0%b9%89%e0%b8%b2/"
                    >
                      <CardMedia
                        component="img"
                        image={val.img}
                        alt={val.name}
                      />
                    </CardActionArea>
                  </Card>
                </Box>
              );
            })}
          </Flickity>
        </Box>
        <Box>
          <Box
            sx={{
              mt: "30px",
              mx: { xs: "5%", sm: "7%", lg: "15%" },
            }}
          >
            <Typography
              sx={{
                fontSize: "2rem",
              }}
            >
              <StarIcon sx={{ color: "#FFBF00" }} />
              สินค้าขายดี
            </Typography>
            <Divider />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
              mt: 2,
            }}
          >
            <Card sx={{ width: { xs: "175px", md: "240px" } }}>
              <CardActionArea
                component={Link}
                target="_blank"
                href="https://jknowledgetutor.com/featured_item/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%aa%e0%b8%b7%e0%b8%ad%e0%b8%aa%e0%b8%a3%e0%b8%b8%e0%b8%9b%e0%b9%80%e0%b8%99%e0%b8%b7%e0%b9%89%e0%b8%ad%e0%b8%ab%e0%b8%b2-%e0%b8%a1-%e0%b8%9b%e0%b8%a5%e0%b8%b2/"
              >
                <CardMedia
                  component="img"
                  image="images/shop/TCAS-Book.webp"
                  alt="TCAS"
                />
                <CardContent>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "black",
                      fontSize: ".9rem",
                      fontWeight: 600,
                      height: { xs: "60px", md: "40px" },
                    }}
                  >
                    หนังสือสรุปเนื้อหา ม.ปลาย TCAS 65-66 เกณฑ์ใหม่ สสวท.
                    ฟรีคอร์สติว 25 ชม.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  fullWidth
                  target="_blank"
                  sx={{ background: "#015352" }}
                  color="primary"
                  href="https://jknowledgetutor.com/featured_item/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%aa%e0%b8%b7%e0%b8%ad%e0%b8%aa%e0%b8%a3%e0%b8%b8%e0%b8%9b%e0%b9%80%e0%b8%99%e0%b8%b7%e0%b9%89%e0%b8%ad%e0%b8%ab%e0%b8%b2-%e0%b8%a1-%e0%b8%9b%e0%b8%a5%e0%b8%b2/"
                >
                  สั่งซื้อ
                </Button>
              </CardActions>
            </Card>

            <Card sx={{ width: { xs: "175px", md: "240px" } }}>
              <CardActionArea
                component={Link}
                target="_blank"
                href="https://jknowledgetutor.com/featured_item/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%aa%e0%b8%b7%e0%b8%ad%e0%b9%80%e0%b8%95%e0%b8%a3%e0%b8%b5%e0%b8%a2%e0%b8%a1%e0%b8%aa%e0%b8%ad%e0%b8%9a-netsat-%e0%b8%a1%e0%b8%82/"
              >
                <CardMedia
                  component="img"
                  image="images/shop/NETSAT-Book.webp"
                  alt="TCAS"
                />
                <CardContent>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "black",
                      fontSize: ".9rem",
                      fontWeight: 600,
                      height: { xs: "60px", md: "40px" },
                    }}
                  >
                    หนังสือเตรียมสอบ NETSAT มข. เล่มเดียวครบทั้ง SAT I และ SAT
                    II
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ background: "#015352" }}
                  target="_blank"
                  href="https://jknowledgetutor.com/featured_item/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%aa%e0%b8%b7%e0%b8%ad%e0%b9%80%e0%b8%95%e0%b8%a3%e0%b8%b5%e0%b8%a2%e0%b8%a1%e0%b8%aa%e0%b8%ad%e0%b8%9a-netsat-%e0%b8%a1%e0%b8%82/"
                >
                  สั่งซื้อ
                </Button>
              </CardActions>
            </Card>

            <Card sx={{ width: { xs: "175px", md: "240px" } }}>
              <CardActionArea
                component={Link}
                target="_blank"
                href="https://jknowledgetutor.com/featured_item/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%aa%e0%b8%b7%e0%b8%ad%e0%b9%80%e0%b8%95%e0%b8%a3%e0%b8%b5%e0%b8%a2%e0%b8%a1%e0%b8%aa%e0%b8%ad%e0%b8%9a%e0%b8%9e%e0%b8%a2%e0%b8%b2%e0%b8%9a%e0%b8%b2%e0%b8%a5/"
              >
                <CardMedia
                  component="img"
                  image="images/shop/Nurse-Book.webp"
                  alt="TCAS"
                />
                <CardContent>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "black",
                      fontSize: ".9rem",
                      fontWeight: 600,
                      height: { xs: "60px", md: "40px" },
                    }}
                  >
                    หนังสือเตรียมสอบพยาบาล พระบรม สี่เหล่าทัพ พร้อมเฉลย
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ background: "#015352" }}
                  target="_blank"
                  href="https://jknowledgetutor.com/featured_item/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%aa%e0%b8%b7%e0%b8%ad%e0%b9%80%e0%b8%95%e0%b8%a3%e0%b8%b5%e0%b8%a2%e0%b8%a1%e0%b8%aa%e0%b8%ad%e0%b8%9a%e0%b8%9e%e0%b8%a2%e0%b8%b2%e0%b8%9a%e0%b8%b2%e0%b8%a5/"
                >
                  สังซื้อ
                </Button>
              </CardActions>
            </Card>

            <Card sx={{ width: { xs: "175px", md: "240px" } }}>
              <CardActionArea
                component={Link}
                target="_blank"
                href="https://jknowledgetutor.com/featured_item/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%aa%e0%b8%b7%e0%b8%ad%e0%b9%80%e0%b8%95%e0%b8%a3%e0%b8%b5%e0%b8%a2%e0%b8%a1%e0%b8%aa%e0%b8%ad%e0%b8%9a-%e0%b9%81%e0%b8%9e%e0%b8%97%e0%b8%a2%e0%b9%8c-%e0%b8%97/"
              >
                <CardMedia
                  component="img"
                  image="images/shop/Tanta-Book.webp"
                  alt="หนังสือเตรียมสอบ แพทย์-ทันตะ TCAS65-66 ฟรี! คอร์สติวความถนัดแพทย์(กสพท.)"
                />
                <CardContent>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "black",
                      fontSize: ".9rem",
                      fontWeight: 600,
                      height: { xs: "60px", md: "40px" },
                    }}
                  >
                    หนังสือเตรียมสอบ แพทย์-ทันตะ TCAS65-66 ฟรี!
                    คอร์สติวความถนัดแพทย์(กสพท.)
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ background: "#015352" }}
                  target="_blank"
                  href="https://jknowledgetutor.com/featured_item/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%aa%e0%b8%b7%e0%b8%ad%e0%b9%80%e0%b8%95%e0%b8%a3%e0%b8%b5%e0%b8%a2%e0%b8%a1%e0%b8%aa%e0%b8%ad%e0%b8%9a-%e0%b9%81%e0%b8%9e%e0%b8%97%e0%b8%a2%e0%b9%8c-%e0%b8%97/"
                >
                  สั่งซื้อ
                </Button>
              </CardActions>
            </Card>
          </Box>

          <Box sx={{display:'flex' , justifyContent:'center', mt:5}}>
            <a
              target="_blank"
              href="https://jknowledgetutor.com/%e0%b8%a3%e0%b9%89%e0%b8%b2%e0%b8%99%e0%b8%84%e0%b9%89%e0%b8%b2/"
            >
              <Typography sx={{fontSize:'1.2rem'}}>ดูหนังสือทั้งหมด</Typography>
            </a>
          </Box>

        </Box>
      </Box>
    </>
  );
}

export default HomeLinkJknowShop;
