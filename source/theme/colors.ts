const colors = {
    light: {
        primary: { backgroundColor: "#1F75EC" },
        primaryLight1: { backgroundColor: "#EDF6FF" },
        primaryLight2: { backgroundColor: "#BCDFFF2E" },
        background: { backgroundColor: "#FFFFFF" },

        red: { backgroundColor: "#D64252" },
        lightRed: { backgroundColor: "#DB566A24" },
        white: { backgroundColor: "#FFFFFF" },
        green: { backgroundColor: "#309535" },


        // Text Colors
        textPrimary: { color: "#1F75EC" },
        textSecondary: { color: "#7C7E80" },
        textBlack: { color: "#000000" },
        textWhite: { color: "#FFFFFF" },
        textGreen: { color: "#309535" },
        inputFiledTextColor: { color: "#757474" },


        // Simple Colors
        primaryPure: "#1F75EC",
        lightGrayPure: "#AEACAC",
        blackPure: "#000000",
        whitePure: "#FFFFFF",
        redPure: "#D64252",
        pureGreen: "#309535"

    },
    dark: {
        primary: { backgroundColor: "#1F75EC" },
        primaryLight1: { backgroundColor: "#EDF6FF" },
        primaryLight2: { backgroundColor: "#BCDFFF2E" },
        background: { backgroundColor: "#FFFFFF" },

        red: { backgroundColor: "#D64252" },
        lightRed: { backgroundColor: "#DB566A24" },
        white: { backgroundColor: "#FFFFFF" },
        green: { backgroundColor: "#309535" },


        // Text Colors
        textPrimary: { color: "#000000" },
        textSecondary: { color: "#7C7E80" },
        textBlack: { color: "#000000" },
        textWhite: { color: "#FFFFFF" },
        textGreen: { color: "#309535" },
        inputFiledTextColor: {
            color: "#757474"
        },

        // Simple Colors
        primaryPure: "#1F75EC",
        lightGrayPure: "#AEACAC",
        blackPure: "#000000",
        whitePure: "#FFFFFF",
        redPure: "#D64252",
        pureGreen: "#309535"
    },
} as const;

export type ThemeColors = typeof colors;
export default colors;
