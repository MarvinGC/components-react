import React from 'react';
import { Box, Card, CardHeader, TextField, Autocomplete, Button, Slider, Select, MenuItem, Checkbox, CardActions } from '@mui/material';
import SocialIcon  from './SocialIcon';
import { socialmedia } from '../utils/constants';
/**
 * The following demo uses the react-imask and react-number-format libraries. 
 * The same concept could be applied to, for example react-stripe-element.
 */
const peliculas = [
  { label: 'The Shawshank Redemption', año: 1994 },
  { label: 'The Godfather', año: 1972 },
  { label: 'The Godfather: Part II', año: 1974 },
  { label: 'The Dark Knight', año: 2008 },
  { label: '12 Angry Men', año: 1957 },
  { label: "Schindler's List", año: 1993 },
  { label: 'Pulp Fiction', año: 1994 },
]
 const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const FormGeneral = () =>{
  return (
    <Box 
      component="form"
      container
    > 
      <Card sx={{
        padding: '2rem',
        width: 300
      }}>
        <CardHeader title="Form general" ></CardHeader>
        <TextField name="campo1" label="campo1" />
        <Autocomplete
          disablePortal
          id="campo2"
          options={peliculas}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
        <Slider
          size="small"
          defaultValue={0}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <Select
          labelId="campo4-id"
          id="campo4"
          value={10}
          label="campo4"
        >
          <MenuItem value={10}>Diez</MenuItem>
          <MenuItem value={20}>Veinte</MenuItem>
          <MenuItem value={30}>Treinta</MenuItem>
        </Select>
        <Checkbox name="campo5" {...label} />
        <TextField name="campo6" label="campo6" />
        <Button variant="outlined">Subir</Button>
        <CardActions> 
        {
          socialmedia.map( (social) => (
            <SocialIcon link={social.link} icon={social.icon} />
          ))
        }
        </CardActions>
      </Card>
    </Box>
  )
}

export default FormGeneral;
