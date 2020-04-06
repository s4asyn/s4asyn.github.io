import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../components/link';

export default () => (
    <Container maxWidth="sm">
        <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
                Hello World!
            </Typography>
            <Link to="/about" color="secondary">
                Go to the about page
            </Link>
        </Box>
    </Container>
);
