import React, { useEffect,useState } from 'react'
import { MenuItem } from '@mui/material'
import { getData } from './services/FetchNodeServices'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import InfiniteScroll from "react-infinite-scroll-component";



export const Story = () => {
    const [datalist,setDatalist]=useState([])


    

    const fetchAllData = async () => {
        var Data = await getData("https://randomuser.me/api/?results=50");

        setDatalist(Data.results);
        console.log(Data.results);
      };
      useEffect(function () {
        fetchAllData();
      }, []);

      const showData = () => {
        return datalist.map((item) => {
          return (<>
            
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={item.picture.medium} />
        </ListItemAvatar>
        <ListItemText
          primary={item.name.first}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {item.email}
              </Typography>
              
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
            
            </>
          );
        });
      };

  return (
    <div>Story
        <List sx={{ maxWidth: 345 }}>
            {showData()}
    </List>
    </div>
  )
}
