import { Grid } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const North = () => {
  return (
    <div>
      <h1 style={{textAlign: "center", padding: "20px", fontSize: "30px", fontWeight: 700, color: "#000"}}>North Goa</h1>
      <Grid container md={12} sm={12} xs={12} sx={{ padding: "10px", }}>
        <Grid container md={4} sm={12} xs={12} sx={{ padding: "10px", display: "flex", flexDirection: "column" }}>
          <Card>
          <a href="https://www.google.com/maps/dir/?api=1&destination=FabHotel+Amrut+Comforts" target="_blank" rel="noopener noreferrer">
            <CardMedia
              sx={{ height: 200 }}
              image="/northHotel.jpg" // Corrected path
              title="FabHotel Amrut Comforts"
            />
          </a>
            <CardContent>
              <Typography gutterBottom variant="h5" color='blue' component="div">
                  FabHotel Amrut Comforts
              </Typography>
            </CardContent>
            <CardActions>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=FabHotel+Amrut+Comforts" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button size="small">Location</Button>
            </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid container md={4} sm={12} xs={12} sx={{ padding: "10px", display: "flex", flexDirection: "column" }}>
          <Card>
          <a href="https://www.google.com/maps/place/Baga+Beach/" target="_blank" rel="noopener noreferrer">
            <CardMedia
              sx={{ height: 200 }}
              image="/bagaBeach.png" // Corrected path
              title="Baga Beach"
            />
          </a>
            <CardContent>
              <Typography gutterBottom variant="h5" color='blue' component="div">
                Baga Beach
              </Typography>
            </CardContent>
            <CardActions>
            <a 
              href="https://www.google.com/maps/place/Baga+Beach/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button size="small">Location</Button>
            </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid container md={4} sm={12} xs={12} sx={{ padding: "10px", display: "flex", flexDirection: "column" }}>
          <Card>
          <a href="https://www.google.com/maps/dir/?api=1&destination=Candolim,+Goa" target="_blank" rel="noopener noreferrer">
            <CardMedia
              sx={{ height: 200 }}
              image="/candolim-beach.jpg" // Corrected path
              title="Candolim Beach"
            />
          </a>
            <CardContent>
              <Typography gutterBottom variant="h5" color='blue' component="div">
              Candolim Beach
              </Typography>
            </CardContent>
            <CardActions>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Candolim,+Goa" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button size="small">Location</Button>
            </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid container md={4} sm={12} xs={12} sx={{ padding: "10px", display: "flex", flexDirection: "column" }}>
          <Card>
          <a href="https://www.google.com/maps/dir//Calangute+Beach,+Goa+403519/@15.5468759,73.7330898,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bbfea0148f4ed2b:0xcb592fad5d257d17!2m2!1d73.7534857!2d15.549441?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D">
            <CardMedia
              sx={{ height: 200 }}
              image="/calangute-beach.jpg" // Corrected path
              title="Calangute Beach"
            />
          </a>
            <CardContent>
              <Typography gutterBottom variant="h5" color='blue' component="div">
                Calangute Beach
              </Typography>
            </CardContent>
            <CardActions>
            <a 
              href="https://www.google.com/maps/dir//Calangute+Beach,+Goa+403519/@15.5468759,73.7330898,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bbfea0148f4ed2b:0xcb592fad5d257d17!2m2!1d73.7534857!2d15.549441?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button size="small">Location</Button>
            </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid container md={4} sm={12} xs={12} sx={{ padding: "10px", display: "flex", flexDirection: "column" }}>
          <Card>
          <a href="https://www.google.com/maps/dir/?api=1&destination=Arambol+Beach,+Arambol,+Goa+403524">
            <CardMedia
              sx={{ height: 200 }}
              image="/arambol-beach.jpg" // Corrected path
              title="arambol-beach"
            />
          </a>
            <CardContent>
              <Typography gutterBottom variant="h5" color='blue' component="div">
                Arambola Beach
              </Typography>
            </CardContent>
            <CardActions>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Arambol+Beach,+Arambol,+Goa+403524" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button size="small">Location</Button>
            </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid container md={4} sm={12} xs={12} sx={{ padding: "10px", display: "flex", flexDirection: "column" }}>
          <Card>
          <a href="https://www.google.com/maps/search/Morjim+beach/@15.6173203,73.7335798,15z?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <CardMedia
              sx={{ height: 200 }}
              image="/morjim-beach.jpg" // Corrected path
              title="Morjim Beach"
            />
          </a>
            <CardContent>
              <Typography gutterBottom variant="h5" color='blue' component="div">
                Morjim Beach
              </Typography>
            </CardContent>
            <CardActions>
            <a 
              href="https://www.google.com/maps/search/Morjim+beach/@15.6173203,73.7335798,15z?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button size="small">Location</Button>
            </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid container md={4} sm={12} xs={12} sx={{ padding: "10px", display: "flex", flexDirection: "column" }}>
          <Card>
          <a href="https://www.google.com/maps/place/Anjuna+market/@15.5870153,73.5978742,12z/data=!4m10!1m2!2m1!1sanjuna+market!3m6!1s0x3bbfe9a258338d67:0x4a2f41ac1fcc9b6b!8m2!3d15.5870153!4d73.7420698!15sCg1hbmp1bmEgbWFya2V0kgEUYmVhY2hfY2xvdGhpbmdfc3RvcmXgAQA!16s%2Fg%2F11trtxmy3n?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <CardMedia
              sx={{ height: 200 }}
              image="/anjuna-market.jpg" // Corrected path
              title="Anjuna Market"
            />
          </a>
            <CardContent>
              <Typography gutterBottom variant="h5" color='blue' component="div">
                Anjuna Market
              </Typography>
            </CardContent>
            <CardActions>
            <a 
              href="https://www.google.com/maps/place/Anjuna+market/@15.5870153,73.5978742,12z/data=!4m10!1m2!2m1!1sanjuna+market!3m6!1s0x3bbfe9a258338d67:0x4a2f41ac1fcc9b6b!8m2!3d15.5870153!4d73.7420698!15sCg1hbmp1bmEgbWFya2V0kgEUYmVhY2hfY2xvdGhpbmdfc3RvcmXgAQA!16s%2Fg%2F11trtxmy3n?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button size="small">Location</Button>
            </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid container md={4} sm={12} xs={12} sx={{ padding: "10px", display: "flex", flexDirection: "column" }}>
          <Card>
          <a href="https://www.google.com/maps/place/Anjuna+Beach/@15.5743238,73.7349529,16z/data=!3m1!4b1!4m6!3m5!1s0x3bbfe98f11ab0199:0xd777cc02c2ccffa1!8m2!3d15.5733497!4d73.7409781!16s%2Fg%2F1tkp3f7l?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D">
            <CardMedia
              sx={{ height: 200 }}
              image="/anjuna-beach.jpg" // Corrected path
              title="Anjuna Beach"
            />
          </a>
            <CardContent>
              <Typography gutterBottom variant="h5" color='blue' component="div">
                Anjuna Beach
              </Typography>
            </CardContent>
            <CardActions>
            <a 
              href="https://www.google.com/maps/place/Anjuna+Beach/@15.5743238,73.7349529,16z/data=!3m1!4b1!4m6!3m5!1s0x3bbfe98f11ab0199:0xd777cc02c2ccffa1!8m2!3d15.5733497!4d73.7409781!16s%2Fg%2F1tkp3f7l?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button size="small">Location</Button>
            </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid container md={4} sm={12} xs={12} sx={{ padding: "10px", display: "flex", flexDirection: "column" }}>
          <Card>
          <a href="https://www.google.com/maps/place/Dona+Paula+Beach/@15.4546652,73.8045024,17z/data=!4m6!3m5!1s0x3bbfc72d9ed91c8f:0x82318f0bf21a7e38!8m2!3d15.4546652!4d73.8045024!16s%2Fg%2F1hhhk3bcp?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <CardMedia
              sx={{ height: 200 }}
              image="/dona-paula-beach.jpg" // Corrected path
              title="dona paula Beach"
            />
          </a>
            <CardContent>
              <Typography gutterBottom variant="h5" color='blue' component="div">
                  Dona Paula Beach
              </Typography>
            </CardContent>
            <CardActions>
            <a 
              href="https://www.google.com/maps/place/Dona+Paula+Beach/@15.4546652,73.8045024,17z/data=!4m6!3m5!1s0x3bbfc72d9ed91c8f:0x82318f0bf21a7e38!8m2!3d15.4546652!4d73.8045024!16s%2Fg%2F1hhhk3bcp?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button size="small">Location</Button>
            </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid container md={4} sm={12} xs={12} sx={{ padding: "10px", display: "flex", flexDirection: "column" }}>
          <Card>
          <a href="https://www.google.com/maps/place/Vagator+Beach/@15.6033636,73.727909,16z/data=!3m1!4b1!4m6!3m5!1s0x3bbfe96efd4101af:0x1fe7bea632841b03!8m2!3d15.6029835!4d73.733627!16s%2Fg%2F1q5bm37rx?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <CardMedia
              sx={{ height: 200 }}
              image="/vagator-beach.jpg" // Corrected path
              title="Vagator Beach"
            />
          </a>
            <CardContent>
              <Typography gutterBottom variant="h5" color='blue' component="div">
                Vagator Beach
              </Typography>
            </CardContent>
            <CardActions>
            <a 
              href="https://www.google.com/maps/place/Vagator+Beach/@15.6033636,73.727909,16z/data=!3m1!4b1!4m6!3m5!1s0x3bbfe96efd4101af:0x1fe7bea632841b03!8m2!3d15.6029835!4d73.733627!16s%2Fg%2F1q5bm37rx?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button size="small">Location</Button>
            </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid container md={4} sm={12} xs={12} sx={{ padding: "10px", display: "flex", flexDirection: "column" }}>
          <Card>
          <a href="https://www.google.com/maps/place/Mandrem,+Goa+403519/@15.6665233,73.6953562,13z/data=!3m1!4b1!4m6!3m5!1s0x3bbfee9a64960627:0x728e355b9ea77639!8m2!3d15.6598034!4d73.7429006!16s%2Fm%2F0m0fhfs?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <CardMedia
              sx={{ height: 200 }}
              image="/mandrem-beach.jpg" // Corrected path
              title="Mandrem Beach"
            />
          </a>
            <CardContent>
              <Typography gutterBottom variant="h5" color='blue' component="div">
                Mandrem Beach
              </Typography>
            </CardContent>
            <CardActions>
            <a 
              href="https://www.google.com/maps/place/Mandrem,+Goa+403519/@15.6665233,73.6953562,13z/data=!3m1!4b1!4m6!3m5!1s0x3bbfee9a64960627:0x728e355b9ea77639!8m2!3d15.6598034!4d73.7429006!16s%2Fm%2F0m0fhfs?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button size="small">Location</Button>
            </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid container md={4} sm={12} xs={12} sx={{ padding: "10px", display: "flex", flexDirection: "column" }}>
          <Card>
          <a href="https://www.google.com/maps/place/Fontainhas+Colorful+Houses/@15.4954199,73.8287724,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbfc1635223f611:0x895c058352ecb167!8m2!3d15.4954147!4d73.8313473!16s%2Fg%2F11tk05vw9z?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
            <CardMedia
              sx={{ height: 200 }}
              image="/FontainhasColorfulHouses.jpg" // Corrected path
              title="Fontainhas Colorful Houses"
            />
          </a>
            <CardContent>
              <Typography gutterBottom variant="h5" color='blue' component="div">
                  Fontainhas Colorful Houses
              </Typography>
            </CardContent>
            <CardActions>
            <a 
              href="https://www.google.com/maps/place/Fontainhas+Colorful+Houses/@15.4954199,73.8287724,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbfc1635223f611:0x895c058352ecb167!8m2!3d15.4954147!4d73.8313473!16s%2Fg%2F11tk05vw9z?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button size="small">Location</Button>
            </a>
            </CardActions>
          </Card>
        </Grid>
        
        
      </Grid>
      
    </div>
  )
}

export default North
