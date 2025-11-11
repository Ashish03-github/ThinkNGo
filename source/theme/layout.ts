import { scale, scaleVertical, moderateScale } from "./scale";

const layout = {

    // Flex
    flex: {
        flex: 1
    },
    flex0: {
        flex: 0
    },
    flexGrow: {
        flexGrow: 1
    },
    flexShrink: {
        flexShrink: 1
    },
    flexNoShrink: {
        flexShrink: 0
    },
    flexWrap: {
        flexWrap: "wrap"
    },
    flexNoWrap: {
        flexWrap: "nowrap"
    },
    flexRow: {
        flexDirection: "row"
    },
    flexColumn: {
        flexDirection: "column"
    },
    flexRowReverse: {
        flexDirection: "row-reverse"
    },
    flexColumnReverse: {
        flexDirection: "column-reverse"
    },

    // Justify Content
    justifyStart: {
        justifyContent: "flex-start"
    },
    justifyEnd: {
        justifyContent: "flex-end"
    },
    justifyCenter: {
        justifyContent: "center"
    },
    justifyBetween: {
        justifyContent: "space-between"
    },
    justifyAround: {
        justifyContent: "space-around"
    },
    justifyEvenly: {
        justifyContent: "space-evenly"
    },

    // Align Items
    alignStart: {
        alignItems: "flex-start"
    },
    alignEnd: {
        alignItems: "flex-end"
    },
    alignCenter: {
        alignItems: "center"
    },
    alignStretch: {
        alignItems: "stretch"
    },
    alignBaseline: {
        alignItems: "baseline"
    },

    // Align Self
    selfStart: {
        alignSelf: "flex-start"
    },
    selfEnd: {
        alignSelf: "flex-end"
    },
    selfCenter: {
        alignSelf: "center"
    },
    selfStretch: {
        alignSelf: "stretch"
    },
    selfBaseline: {
        alignSelf: "baseline"
    },
    selfAuto: {
        alignSelf: "auto"
    },

    // Width
    wFull: {
        width: "100%"
    },
    wHalf: {
        width: "50%"
    },
    wThird: {
        width: "33.333%"
    },
    wTwoThird: {
        width: "66.666%"
    },
    wQuarter: {
        width: "25%"
    },
    wThreeQuarter: {
        width: "75%"
    },
    wAuto: {
        width: "auto"
    },

    // Height
    hFull: {
        height: "100%"
    },
    hHalf: {
        height: "50%"
    },
    hThird: {
        height: "33.333%"
    },
    hTwoThird: {
        height: "66.666%"
    },
    hQuarter: {
        height: "25%"
    },
    hThreeQuarter: {
        height: "75%"
    },
    hAuto: {
        height: "auto"
    },

    // Position
    relative: {
        position: "relative"
    },
    absolute: {
        position: "absolute"
    },

    // Border Radius
    roundedNone: {
        borderRadius: 0
    },
    roundedSm: {
        borderRadius: scale(2)
    },
    rounded: {
        borderRadius: scale(4)
    },
    roundedMd: {
        borderRadius: scale(6)
    },
    roundedLg: {
        borderRadius: scale(8)
    },
    roundedXl: {
        borderRadius: scale(12)
    },
    rounded2xl: {
        borderRadius: scale(16)
    },
    rounded3xl: {
        borderRadius: scale(24)
    },
    roundedFull: {
        borderRadius: 9999
    },

    // Border Radius - Top
    roundedTNone: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    },
    roundedTSm: {
        borderTopLeftRadius: scale(2),
        borderTopRightRadius: scale(2)
    },
    roundedT: {
        borderTopLeftRadius: scale(4),
        borderTopRightRadius: scale(4)
    },
    roundedTLg: {
        borderTopLeftRadius: scale(8),
        borderTopRightRadius: scale(8)
    },
    roundedTXl: {
        borderTopLeftRadius: scale(12),
        borderTopRightRadius: scale(12)
    },

    // Border Radius - Bottom
    roundedBNone: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    roundedBSm: {
        borderBottomLeftRadius: scale(2),
        borderBottomRightRadius: scale(2)
    },
    roundedB: {
        borderBottomLeftRadius: scale(4),
        borderBottomRightRadius: scale(4)
    },
    roundedBLg: {
        borderBottomLeftRadius: scale(8),
        borderBottomRightRadius: scale(8)
    },
    roundedBXl: {
        borderBottomLeftRadius: scale(12),
        borderBottomRightRadius: scale(12)
    },

    // Overflow
    overflowVisible: {
        overflow: "visible"
    },
    overflowHidden: {
        overflow: "hidden"
    },
    overflowScroll: {
        overflow: "scroll"
    },

    // Display
    displayNone: {
        display: "none"
    },
    displayFlex: {
        display: "flex"
    },

    // Z-Index
    z0: {
        zIndex: 0
    },
    z10: {
        zIndex: 10
    },
    z20: {
        zIndex: 20
    },
    z30: {
        zIndex: 30
    },
    z40: {
        zIndex: 40
    },
    z50: {
        zIndex: 50
    },

    // Aspect Ratio
    aspectSquare: {
        aspectRatio: 1
    },
    aspectVideo: {
        aspectRatio: 16 / 9
    },
    aspectPhoto: {
        aspectRatio: 4 / 3
    },

    // Opacity
    opacity0: {
        opacity: 0
    },
    opacity25: {
        opacity: 0.25
    },
    opacity50: {
        opacity: 0.5
    },
    opacity75: {
        opacity: 0.75
    },
    opacity100: {
        opacity: 1
    },

    // Common Combinations
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    rowCenter: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    rowStart: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    rowEnd: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    columnCenter: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    columnBetween: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },
    columnStart: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    columnEnd: {
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    fullWidth: {
        width: "100%"
    },
    fullHeight: {
        height: "100%"
    },
    fullScreen: {
        width: "100%",
        height: "100%"
    },
    absoluteFill: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }

} as const;
export type ThemeLayout = typeof layout;
export default layout;


