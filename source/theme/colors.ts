const colors = {
    light: {
        primary: { backgroundColor: "#1F75EC" },
        primaryLight: { backgroundColor: "#EDF6FF" },
        background: { backgroundColor: "#FFFFFF" },

        red: { backgroundColor: "#D64252" },
        lightRed: { backgroundColor: "#DB566A24" },
        white: { backgroundColor: "#FFFFFF" },

        // Text Colors
        textPrimary: { color: "#000000" },
        textSecondary: { color: "#7C7E80" },
        textWhite: { color: "#FFFFFF" },


        // Simple Colors
        primaryPure: "#1F75EC"

    },
    dark: {
        primary: { backgroundColor: "#1F75EC" },
        primaryLight: { backgroundColor: "#EDF6FF" },
        background: { backgroundColor: "#FFFFFF" },

        red: { backgroundColor: "#D64252" },
        lightRed: { backgroundColor: "#DB566A24" },
        white: { backgroundColor: "#FFFFFF" },


        // Text Colors
        textPrimary: { color: "#000000" },
        textSecondary: { color: "#7C7E80" },
        textWhite: { color: "#FFFFFF" },

        // Simple Colors
        primaryPure: "#1F75EC"
    },
} as const;

export type ThemeColors = typeof colors;
export default colors;
