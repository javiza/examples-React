import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Copyright = () => {
    return (
        <div>
            <Typography variant="body2" color="GrayText" align="center">
                {'Copyright (c)'}
                <Link color="inherit" href='https://imaginaformacion.com'>
                    imagina formacion
                </Link>
                { ' '}
                { new Date().getFullYear() }
            </Typography>
        </div>
    );
}

export default Copyright;
