import { useColorScheme } from "react-native";
import { colors, fonts, layout, spacing } from "../../theme";

export default function () {
    const colorScheme = useColorScheme()
    const currentTheme = colorScheme === "light" ? "light" : 'dark';

    // If it is comming from redux
    // const currentTheme = useSelector(
    //     (state: RootState) => state.theme.theme || autoScheme || 'default',
    // );

    let Fonts = fonts;
    let Layout = layout;
    let Spacing = spacing;
    let Colors = colors[currentTheme || 'light']

    return {
        Colors,
        Fonts,
        Layout,
        Spacing
    }
}