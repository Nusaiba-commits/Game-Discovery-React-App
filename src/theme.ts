import { defaultThemeConfig, extendTheme } from "@chakra-ui/react/theme";
import ThemeConfig

const config: defaultThemeConfig = {
    initialColorMode: 'dark'
};

const theme = extendTheme({ config });
export default theme;