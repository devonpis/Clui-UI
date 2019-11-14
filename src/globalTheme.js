import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const globalTheme = createMuiTheme({
    palette: {
      primary: {
        light: "rgba(30,70,140,0.85)",
        main: "#1E468C",
        dark: "#0F2850",
        contrastText: "#fff"
      }
    },
    typography: {
      htmlFontSize: 16,
      fontSize: 13,
      button: {
        fontSize: 13,
        textTransform: "none",        
        fontWeight: "500"
      }
    }
  });
  
export default globalTheme;