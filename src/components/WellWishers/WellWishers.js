import React, {useEffect} from 'react'
import { WisherContainer } from './WellWishersStyles'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { deepOrange } from '@mui/material/colors';
import { useSelector, useDispatch } from "react-redux";
import {getWishes} from '../../actions/wish'

function WellWishers () {
    const dispatch = useDispatch();
    const wishes = useSelector( ( state ) => state.wishes?.items );

    useEffect(() => {
        dispatch(getWishes());
    }, []);
  return (
      <WisherContainer>
          <AvatarGroup max={4}>
          { wishes.map( ( wish ) => (
              <Avatar
                  sx={{ bgcolor: deepOrange[500] }}
                  style={ { padding: "-5px;" } }
              >{ wish.name.charAt( 0 ).toUpperCase() }</Avatar>
          ))}
          </AvatarGroup>
    </WisherContainer>
  )
}

export default WellWishers