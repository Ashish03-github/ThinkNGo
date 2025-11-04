const colors = {
    light: {
        primary: { backgroundColor: "#1F75EC" },
        primaryLight: { backgroundColor: "#EDF6FF" },
        background: { backgroundColor: "#FFFFFF" },

        textPrimary: { color: "#000000" },
        textSecondary: { color: "#7C7E80" },

        red: { backgroundColor: "#D64252" },
        lightRed: { backgroundColor: "#DB566A24" },
        white: { backgroundColor: "#FFFFFF" },
    },
    dark: {
        primary: { backgroundColor: "#1F75EC" },
        primaryLight: { backgroundColor: "#EDF6FF" },
        background: { backgroundColor: "#FFFFFF" },

        textPrimary: { color: "#000000" },
        textSecondary: { color: "#7C7E80" },

        red: { backgroundColor: "#D64252" },
        lightRed: { backgroundColor: "#DB566A24" },
        white: { backgroundColor: "#FFFFFF" },
    },
} as const;

export type ThemeColors = typeof colors;
export default colors;
