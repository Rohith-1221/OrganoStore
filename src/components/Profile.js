import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';

const Profile = ({ usermail }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3003/userinfo/email/${usermail}`);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [usermail]);

    return (
        <div className='text-center'>
            <Box>Welcome to Profile page </Box>
            {user && <div><Typography variant='h3'>{user.name}<br/></Typography>
            <Typography variant='h4'>{user.email}<br/></Typography>
            <Typography variant='h4'>{user.pincode}<br/></Typography>
            <Typography variant='h4'>{user.town}</Typography>
            <Typography variant='h4'>{user.state}</Typography></div>}
        </div>
    );
}

export default Profile;
