import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export function FilterCurrency() {
  const [alignment, setAlignment] = useState<string | null>('rub');

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Typography
        textAlign={'left'}
        fontWeight={'bold'}
        textTransform={'uppercase'}
        variant='subtitle2'
        gutterBottom
      >
        Валюта
      </Typography>
      <ToggleButtonGroup
        color='primary'
        fullWidth
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label='Platform'
      >
        <ToggleButton value='rub'>rub</ToggleButton>
        <ToggleButton value='usd'>usd</ToggleButton>
        <ToggleButton value='eur'>eur</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
