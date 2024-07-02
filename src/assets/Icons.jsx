export function AccountIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={34}
      height={34}
      fill="currentColor"
      data-toggle
      className="pointer-events-none"
    >
      <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.9 7.9 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.93 7.93 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11" />
    </svg>
  );
}
export function CartIcon({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size[0]}
      height={size[1]}
      fill="currentColor"
    >
      <path d="M19 20c0 1.11-.89 2-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2s-.89-2-2-2m.2-3.37-.03.12c0 .14.11.25.25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2h3.27l.94 2H20c.55 0 1 .45 1 1 0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1zM8.5 11H10V9H7.56zM11 9v2h3V9zm3-1V6h-3v2zm3.11 1H15v2h1zm1.67-3H15v2h2.67zM6.14 6l.94 2H10V6z" />
    </svg>
  );
}
export function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
    >
      <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z" />
    </svg>
  );
}
export function Star({ className }) {
  return (
    <svg
      fill="currentColor"
      width="16"
      height="16"
      viewBox="0 0 1920 1920"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M1915.918 737.475c-10.955-33.543-42.014-56.131-77.364-56.131h-612.029l-189.063-582.1v-.112C1026.394 65.588 995.335 43 959.984 43c-35.237 0-66.41 22.588-77.365 56.245L693.443 681.344H81.415c-35.35 0-66.41 22.588-77.365 56.131s.79 70.137 29.478 91.03l495.247 359.831-189.177 582.212c-10.955 33.657 1.13 70.25 29.817 90.918 14.23 10.278 30.946 15.487 47.66 15.487 16.716 0 33.432-5.21 47.775-15.6l495.134-359.718 495.021 359.718c28.574 20.781 67.087 20.781 95.662.113 28.687-20.668 40.658-57.261 29.703-91.03l-189.176-582.1 495.36-359.83c28.574-20.894 40.433-57.487 29.364-91.03" />
    </svg>
  );
}
export function Facebook() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M14 6h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-3a5 5 0 0 0-5 5v3H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7h2.22a1 1 0 0 0 1-.76l.5-2a1 1 0 0 0-1-1.24H13V7a1 1 0 0 1 1-1" />
    </svg>
  );
}
export function Instagram() {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="3.328"
      className="size-6"
      fill="currentColor"
    >
      <g strokeWidth={0} />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <path d="M128 84a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44Zm0 80a36 36 0 1 1 36-36 36.04 36.04 0 0 1-36 36Zm44-132H84a52.06 52.06 0 0 0-52 52v88a52.06 52.06 0 0 0 52 52h88a52.06 52.06 0 0 0 52-52V84a52.06 52.06 0 0 0-52-52Zm44 140a44.05 44.05 0 0 1-44 44H84a44.05 44.05 0 0 1-44-44V84a44.05 44.05 0 0 1 44-44h88a44.05 44.05 0 0 1 44 44Zm-28-96a8 8 0 1 1-8-8 8.01 8.01 0 0 1 8 8Z" />
    </svg>
  );
}
export function Tiktok() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="size-6"
      fill="currentColor"
    >
      <path d="M19.589 6.686a4.79 4.79 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.2 8.2 0 0 0 4.773 1.526V6.79a5 5 0 0 1-1.003-.104" />
    </svg>
  );
}
export function X() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="currentColor"
    >
      <path d="M10.571 7.737 16.715.75H15.26L9.922 6.816 5.663.75H.75l6.442 9.173L.75 17.25h1.455l5.633-6.407 4.5 6.407h4.912zm-1.994 2.266-.654-.913L2.73 1.824h2.235L9.157 7.69l.652.914 5.449 7.625h-2.237z" />
    </svg>
  );
}
export function YouTube() {
  return (
    <svg
      width={26}
      height={26}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.478 3.399c.6.161 1.072.634 1.234 1.234C15 5.728 15 8 15 8s0 2.272-.288 3.367a1.75 1.75 0 0 1-1.234 1.234C12.382 12.89 8 12.89 8 12.89s-4.382 0-5.478-.289a1.75 1.75 0 0 1-1.234-1.234C1 10.283 1 8 1 8s0-2.272.288-3.367c.162-.6.635-1.073 1.234-1.234C3.618 3.11 8 3.11 8 3.11s4.382 0 5.478.289m-3.24 4.612-3.645 2.1V5.9z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export function LightThemeIcon({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size[0]}
      height={size[1]}
      className="pointer-events-none"
    >
      <path d="m3.55 19.09 1.41 1.41 1.8-1.79-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71 1.8 1.79 1.41-1.41-1.79-1.8M20.45 5l-1.41-1.4-1.8 1.79 1.42 1.42M13 1h-2v3h2M6.76 5.39 4.96 3.6 3.55 5l1.79 1.81zM1 13h3v-2H1m12 9h-2v3h2" />
    </svg>
  );
}
export function DarkModeIcon({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size[0]}
      height={size[1]}
      className="pointer-events-none"
    >
      <path d="m17.75 4.09-2.53 1.94.91 3.06-2.63-1.81-2.63 1.81.91-3.06-2.53-1.94L12.44 4l1.06-3 1.06 3zm3.5 6.91-1.64 1.25.59 1.98-1.7-1.17-1.7 1.17.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95zm-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14.4-.4.82-.76 1.27-1.08.75-.53 1.93.36 1.85 1.19-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82-2.81 3.14-2.7 7.96.31 10.98 3.02 3.01 7.84 3.12 10.98.31" />
    </svg>
  );
}
export function AutoDetectIcon({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size[0]}
      height={size[1]}
      className="pointer-events-none"
    >
      <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8 8 8 0 0 1-8 8z" />
    </svg>
  );
}
export function MenuDownIcon({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size[0]}
      height={size[1]}
      className="pointer-events-none"
    >
      <path d="m7 10 5 5 5-5z" />
    </svg>
  );
}
export function CheckIcon({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size[0]}
      height={size[1]}
    >
      <path d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59z" />
    </svg>
  );
}
