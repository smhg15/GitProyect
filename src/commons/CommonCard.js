import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(270deg)' : 'rotate(90deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.complex,
  }),
}));

function CommonCard({data}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
console.log(data)
  return (
    <Card sx={{maxWidth: 1500}}>
      <Stack direction="row" spacing={2}>
        <Item>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {data.symbol}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.name}
        subheader={`u$d${data.price.toFixed(2)}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={data.icon}
        alt={data.name}
        sx={{width: 194}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Volume: {data.volume}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Typography paragraph>More Details:</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      </Item>
      <Collapse in={expanded} orientation="vertical" timeout="auto" unmountOnExit>
        <CardContent>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <List>
            <ListItem disablePadding>
            Price Change (1h): {data.priceChange1h}        
            </ListItem>
            <ListItem disablePadding>
            Price Change (1d): {data.priceChange1d}
            </ListItem>
            <ListItem disablePadding>
            Price Change (1w): {data.priceChange1w}
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding>
            Price: u$d {data.price}
            </ListItem>
            <ListItem disablePadding>
            Price on BTC: {data.priceBtc}
            </ListItem>              
          </List>
          <List>
            <ListItem disablePadding>
            Market Cap: {data.marketCap}
            </ListItem>          
            <ListItem disablePadding>
            Available/Total Supply: {data.availableSupply}/{data.totalSupply}
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding>
            Website: {data.websiteUrl}        
            </ListItem>
            <ListItem disablePadding>
            Reddit: {data.redditUrl}
            </ListItem>
            <ListItem disablePadding>
            Twitter: {data.twitterUrl}
            </ListItem>
          </List>
        </Box>
        </CardContent>
      </Collapse>
    </Stack>
    </Card>
  );
}

export default CommonCard;