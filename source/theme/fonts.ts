import { normalizeFonts } from "./scale";

const fonts = {


    // FontWeight
    font100: {
        fontFamily: "Poppins-Thin"
    },
    font100Italic: {
        fontFamily: "Poppins-ThinItalic"
    },
    font200: {
        fontFamily: "Poppins-ExtraLight"
    },
    font200Italic: {
        fontFamily: "Poppins-ExtraLightItalic"
    },
    font300: {
        fontFamily: "Poppins-Light"
    },
    font300Italic: {
        fontFamily: "Poppins-LightItalic"
    },
    font400: {
        fontFamily: "Poppins-Regular"
    },
    font400Italic: {
        fontFamily: "Poppins-Italic"
    },
    font500: {
        fontFamily: "Poppins-Medium"
    },
    font500Italic: {
        fontFamily: "Poppins-MediumItalic"
    },
    font600: {
        fontFamily: "Poppins-SemiBold"
    },
    font600Italic: {
        fontFamily: "Poppins-SemiBoldItalic"
    },
    font700: {
        fontFamily: "Poppins-Bold"
    },
    font700Italic: {
        fontFamily: "Poppins-BoldItalic"
    },
    font800: {
        fontFamily: "Poppins-ExtraBold"
    },
    font800Italic: {
        fontFamily: "Poppins-ExtraBoldItalic"
    },
    font900: {
        fontFamily: "Poppins-Black"
    },
    font900Italic: {
        fontFamily: "Poppins-BlackItalic"
    },

    // FontSize
    sz1: {
        fontSize: normalizeFonts(1)
    },
    sz2: {
        fontSize: normalizeFonts(2)
    },
    sz3: {
        fontSize: normalizeFonts(3)
    },
    sz4: {
        fontSize: normalizeFonts(4)
    },
    sz5: {
        fontSize: normalizeFonts(5)
    },
    sz6: {
        fontSize: normalizeFonts(6)
    },
    sz7: {
        fontSize: normalizeFonts(7)
    },
    sz8: {
        fontSize: normalizeFonts(8)
    },
    sz9: {
        fontSize: normalizeFonts(9)
    },
    sz10: {
        fontSize: normalizeFonts(10)
    },
    sz11: {
        fontSize: normalizeFonts(11)
    },
    sz12: {
        fontSize: normalizeFonts(12)
    },
    sz13: {
        fontSize: normalizeFonts(13)
    },
    sz14: {
        fontSize: normalizeFonts(14)
    },
    sz15: {
        fontSize: normalizeFonts(15)
    },
    sz16: {
        fontSize: normalizeFonts(16)
    },
    sz17: {
        fontSize: normalizeFonts(17)
    },
    sz18: {
        fontSize: normalizeFonts(18)
    },
    sz19: {
        fontSize: normalizeFonts(19)
    },
    sz20: {
        fontSize: normalizeFonts(20)
    },
    sz21: {
        fontSize: normalizeFonts(21)
    },
    sz22: {
        fontSize: normalizeFonts(22)
    },
    sz23: {
        fontSize: normalizeFonts(23)
    },
    sz24: {
        fontSize: normalizeFonts(24)
    },

} as const;

export type ThemeFonts = typeof fonts;

export default fonts;