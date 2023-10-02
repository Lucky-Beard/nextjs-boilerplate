import { createTheme } from '@mui/material/styles';

const primary = '#081f53';
const secondary = '#114651';

declare module '@mui/material/styles' {
  interface Theme {
    variant: {
      danger: string;
      white: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    variant?: {
      danger?: string;
      white?: string;
    };
  }

  interface Palette {
    white: Palette['primary'];
  }

  interface PaletteOptions {
    white?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Checkbox' {
  interface CheckboxPropsColorOverrides {
    white: true;
  }
}

declare module '@mui/material/FormControlLabel' {
  interface FormControlLabelPropsColorOverrides {
    white: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    },
    white: {
      main: '#fff',
      light: '#fff',
      dark: '#fff'
    }
  },
  typography: {
    fontFamily: ['Manrope', 'Calibri', 'Arial', 'sans-serif'].join(','),
    body1: {
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '160%',
      letterSpacing: '-0.16px'
    },
    body2: {
      color: '#4A4A4E'
    }
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          alignItems: 'flex-end',
          textTransform: 'none',
          lineHeight: '150%',
          color: secondary,
          fontSize: '16px'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: '32px'
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 0
        },
        indicator: {
          marginBottom: '-2px',
          height: '5px',
          zIndex: 2
        },
        scroller: {
          overflow: 'visible',
          '@media screen and (max-width: 1250px)': {
            overflowX: 'auto',
            overflowY: 'hidden'
          }
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          '&:focus': {
            backgroundColor: 'transparent'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          backgroundColor: 'white',
          borderRadius: '8px',
          border: 'solid 1px #B3AEA8',
          padding: '14px',
          ':focus': {
            borderRadius: '8px'
          }
        },
        root: {
          borderRadius: '8px',
          padding: 0
        },
        notchedOutline: {
          borderRadius: '8px',
          // backgroundColor: 'white',
          padding: '14px',
          borderColor: '#B3AEA8'
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        colorPrimary: {
          fill: 'white'
        }
      }
    }
  }
});
