import { ReactNode } from 'react';

export type MenuItem = {
  name: string;
  url: string;
  dropdown?: {
    title: string;
    intro: string;
    menu: { name: string; url: string; target?: '_blank' | '_self' }[];
    overviewButton?: { name: string; url: string };
    extraContent?: ReactNode;
  } | null;
};
