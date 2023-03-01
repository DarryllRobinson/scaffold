import { AppBar, Container, Toolbar } from '@mui/material';
import MaterialUISwitch from './MaterialUISwitch';

export default function Navbar(props) {
  const { checked, onChange } = props;

  return (
    <AppBar aria-label="desktop-navbar-appbar" position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MaterialUISwitch
            aria-label="dark-switch"
            checked={checked}
            onChange={onChange}
            sx={{ display: 'flex' }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
