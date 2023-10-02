import { RegEx } from '../types/regEx';
import { SxProps } from '@mui/material';

export const regEx: RegEx = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
};

export const NumberFormat = (number: any) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const DateFormat = (date: string) => {
  let dateObj = new Date(date);

  return dateObj.toLocaleString('default', {
    day: '2-digit',
    month: 'long'
  });
};

export const ThreeColumnGrid: SxProps = {
  gridTemplateColumns: {
    xs: 'repeat(1, 1fr)',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)'
  },
  rowGap: {
    xs: '30px',
    md: '20px'
  },
  columnGap: '20px'
};

export type SectionCollectionGap = {
  desktop?: number;
  tablet?: number;
  mobile?: number;
};

export const CollectionGap: SectionCollectionGap = {
  desktop: 160,
  tablet: 80,
  mobile: 80
};

export const zohoUrl =
  'https://www.zohoapis.com/crm/v2/functions/Create_Lead_API/actions/execute';

export const zohoKey =
  '1003.b58281c1d5b59fe612bbf7b5d6164698.d41a376259326f09dd72d9fc18eed052';

export const ContactApi = {
  url: `${zohoUrl}?auth_type=apikey&zapikey=${zohoKey}`,
  auth: `Zoho-oauthtoken ${zohoKey}`
};

export const currentYear = new Date().getFullYear();
