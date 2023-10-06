type CarOfTheDayIconProps = {
  className: string;
};

export const CarOfTheDayIcon = ({ className }: CarOfTheDayIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    className={className}
  >
    <filter id="a">
      <feColorMatrix
        in="SourceAlpha"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .4 0"
      />
      <feOffset dy="2" />
      <feGaussianBlur stdDeviation=".5" result="blur" />
      <feBlend in="SourceGraphic" in2="blur" />
    </filter>
    <path
      filter="url(#a)"
      fill="#C03"
      d="m73.14 4.44 3.64 9.33 7.74-6.36 1.75 9.86 8.83-4.73-.2 10.02 9.58-2.92-2.16 9.78 9.97-.99-4.02 9.18 9.97.97-5.73 8.21 9.59 2.9-7.23 6.94 8.84 4.71-8.45 5.4 7.75 6.35-9.33 3.64 6.36 7.74-9.86 1.75 4.73 8.83-10.02-.2 2.92 9.58-9.78-2.16.99 9.97-9.17-4.02-.98 9.97-8.21-5.74-2.9 9.6-6.94-7.24-4.71 8.84-5.4-8.44-6.34 7.75-3.65-9.33-7.73 6.36-1.76-9.86-8.83 4.73.2-10.02-9.57 2.92 2.15-9.79-9.97 1 4.03-9.18-9.98-.97L15 80.61l-9.59-2.9 7.23-6.94-8.84-4.71 8.44-5.4-7.75-6.35 9.34-3.64-6.37-7.74 9.87-1.75-4.74-8.83 10.02.2-2.92-9.58 9.79 2.16-1-9.97 9.18 4.02.97-9.97 8.22 5.74 2.9-9.6 6.93 7.24 4.72-8.84 5.39 8.44 6.35-7.75z"
    />
    <path
      fill="#FFF"
      d="m53.96 90.94-3.4-.54.57-3.68-6.66-1.05-.58 3.68-3.4-.54 1.1-7.03 1.22.2c1.98-3.77 2.32-7.28 3.14-12.1l9.64 1.52-1.95 12.29 1.43.23-1.11 7.02zm-4.15-7.86 1.42-8.97-2-.32c-.52 3.42-.99 6.1-2.52 8.8l3.1.49zm16.23 6-3.83-.6.99-6.24-2.62-.41-.98 6.23-3.83-.6 2.47-15.64 3.83.61-.95 6.05 2.61.42.96-6.05 3.83.6-2.48 15.63zm12.36 1.96-3.83-.6.9-5.66-.86-.14-2.9 5.34-3.99-.63 3.38-5.95c-1.29-.95-1.76-2.5-1.42-4.65.53-3.33 2.27-4.76 5.23-4.29l5.96.95-2.47 15.63zM76 81.87l.65-4.1c-1.53-.26-2.91-.79-3.25 1.47-.4 2.44.64 2.33 2.6 2.63zM38.3 62.42l-3.75-.6c.27-1.64 1.74-11.26 2.07-12.63l-.72 1.78-3.06 6.31-2.43-.38c-.19-1.42-1.16-7.57-1.12-8.88-.13 1.36-1.71 11.07-1.95 12.66l-3.74-.59 3.43-21.65 3.74.59 1.75 12.4 5.5-11.26 3.7.6-3.42 21.65zm12.68 2-3.83-.6.22-1.43c-1.25 1.92-4.87 1.23-5.77-.54-.54-.96-.68-2.24-.42-3.84.44-2.96 2.49-4.34 5.38-3.89l2.07.33c.09-.69.5-2.27.09-2.76-.72-1.03-2.41-.68-2.58.78l-3.65-.58c.48-3.15 3.21-4.65 6.04-4.09 3.3.52 4.7 2.36 4.2 5.53l-1.75 11.09zm-2.97-6.04.2-1.25c-1.47-.21-3.12-.88-3.42 1.3-.47 1.87 1.44 2.67 2.57 1.65.3-.32.52-.9.65-1.7zm21.26 8.94-16.15-2.55 2.47-15.64 3.83.61-1.94 12.29 2.34.37 1.95-12.29 3.83.6-1.95 12.3 2.31.36 1.95-12.29 3.83.61-2.47 15.63zm12.66 2-3.77-.59.88-5.56c.11-1 .54-2.17.58-3.06l-4.86 8.08-3.32-.52 2.48-15.63 3.77.6c-.3 2.14-1.1 6.69-1.46 8.61l4.87-8.08 3.31.53-2.48 15.62zM94.4 71.3l-3.83-.6.99-6.24-2.62-.41-.98 6.23-3.83-.6 2.47-15.64 3.83.61-.96 6.05 2.62.42.96-6.05 3.83.6L94.4 71.3zm12.33 1.96-3.83-.61.22-1.43c-1.25 1.92-4.87 1.22-5.78-.54-.53-.96-.67-2.24-.42-3.84.75-4.31 3.89-4.32 7.46-3.56.08-.68.49-2.29.09-2.76-.72-1.03-2.41-.68-2.58.78l-3.65-.58c.49-3.16 3.2-4.65 6.04-4.1 3.3.53 4.7 2.37 4.2 5.54l-1.75 11.1zm-2.97-6.06.2-1.24c-1.47-.2-3.12-.89-3.42 1.3-.47 1.87 1.43 2.67 2.57 1.65.3-.32.53-.91.65-1.71z"
    />
  </svg>
);
