import React, { useMemo } from 'react';
import { SvgXml } from 'react-native-svg';
import { IconList } from '../../../assets/images';

export type IconNames = keyof typeof IconList;

type SvgIconProps = {
  name: IconNames;
  width?: number;
  height?: number;
  color?: string;
};

const AppIcon: React.FC<SvgIconProps> = ({
  name = 'user_m',
  width,
  height,
  color,
}) => {
  const svgMarkup = useMemo(() => {
    const raw = IconList[name];

    if (typeof raw !== 'string') {
      console.warn(`SvgIcon: icon "${name}" is not available.`);
      return null;
    }
    return raw
      .replace(/xmlns:xlink=/g, 'xmlnsXlink=')
      .replace(/xlink:href=/g, 'href=');
  }, [name]);

  if (!svgMarkup) {
    return null;
  }

  return <SvgXml xml={svgMarkup} width={width} height={height} color={color} />;
};

export default AppIcon;
