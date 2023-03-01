import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link component={RouterLink} color="inherit" to="#">
        Whatever your site is called
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;
