import * as React from 'react';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { changeUSDtype } from '../../redux/actions/actions';

export default function BasicSwitch() {

  const dispatch  = useDispatch();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    event.target.checked ? dispatch(changeUSDtype('Blue')) : dispatch(changeUSDtype('Official')) 
  };


  return (
    <Stack direction="row"  alignItems="center" justifyContent="end">
        <Typography>Official</Typography>
        <Switch size="small"
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'ant design' }} />
        <Typography>Blue</Typography>
      </Stack>
  );
}