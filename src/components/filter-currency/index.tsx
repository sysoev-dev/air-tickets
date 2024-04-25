import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';

export function FilterCurrency() {
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
      <ButtonGroup size='large' aria-label='Large button group'>
        <Button key='one' variant='contained'>
          Rub
        </Button>
        <Button key='two'>Usd</Button>
        <Button key='three'>Eur</Button>
      </ButtonGroup>
    </>
  );
}
