import { Dimensions, PixelRatio, Platform } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base design guideline (e.g., iPhone 13 / Pixel 5)
const guidelineBaseWidth = 390;
const guidelineBaseHeight = 840;


// Detect if device is a tablet (rough check)
const isTablet = SCREEN_WIDTH >= 768;

// Scale horizontally based on screen width
export const scale = (size: number) => {
    const scaledSize = (SCREEN_WIDTH / guidelineBaseWidth) * size;
    return isTablet ? scaledSize * 1.2 : scaledSize;
}

// Scale vertically based on screen height
export const scaleVertical = (size: number) => {
    const scaledHeight = (SCREEN_HEIGHT / guidelineBaseHeight) * size;
    return isTablet ? scaledHeight * 1.15 : scaledHeight
}

// Moderate scaling (less aggressive, good for font sizes)
export const moderateScale = (size: number, factor = 0.5) => {
    const scaled = scale(size)
    const adjusted = scaled + (scaled - size) * factor;
    return isTablet ? adjusted * 1.1 : adjusted;
}

// Normalize font size across platforms and device types
export const normalizeFonts = (size: number) => {
    const newSize = moderateScale(size);
    const scaled = isTablet ? newSize * 1.1 : newSize;

    if (Platform.OS === "ios") {
        return Math.round(PixelRatio.roundToNearestPixel(scaled))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(scaled)) - 1;
    }
}

// quick tablet check if needed elsewhere
export const isTabletDevice = isTablet;