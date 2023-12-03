export enum SCREEN_SIZE_PX {
  mobile = 375,
  tablet = 768,
  desktop = 1200,
}

export const MEDIA_DEVICE_SIZE = {
  mobile: `(min-width: ${SCREEN_SIZE_PX.mobile}px)`,
  tablet: `(min-width: ${SCREEN_SIZE_PX.tablet}px)`,
  desktop: `(min-width: ${SCREEN_SIZE_PX.desktop}px)`,
};
