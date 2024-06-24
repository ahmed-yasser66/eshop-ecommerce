import { memo, useEffect, useState } from "react";
import {
  MenuDownIcon,
  LightThemeIcon,
  DarkModeIcon,
  AutoDetectIcon,
  CheckIcon,
} from "../../assets/Icons";
import Modal from "../Modal";
const ThemeToggle = ({ position }) => {
  const Themepreference = localStorage.getItem("theme");
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [currentTheme, setCurrentTheme] = useState(Themepreference || "auto");

  useEffect(() => {
    if (Themepreference && currentTheme !== Themepreference) {
      setCurrentTheme(Themepreference);
      return;
    }
    switch (currentTheme.toLowerCase()) {
      case "dark":
        document.documentElement.setAttribute("data-theme", "dark");
        break;
      case "light":
        document.documentElement.removeAttribute("data-theme");
        break;
      case "auto":
        isDarkMode
          ? document.documentElement.setAttribute("data-theme", "dark")
          : document.documentElement.removeAttribute("data-theme");
    }
  }, [currentTheme]);

  const themeSwitchers = [
    {
      icon: <LightThemeIcon size={[26, 26]} />,
      title: "Light",
    },
    {
      icon: <DarkModeIcon size={[26, 26]} />,
      title: "Dark",
    },
    {
      icon: <AutoDetectIcon size={[26, 26]} />,
      title: "Auto",
    },
  ];

  function handleSwitcherChange(title) {
    title = title.toLowerCase();
    setCurrentTheme(title);
    localStorage.setItem("theme", title);
  }
  return (
    <Modal>
      <Modal.ToggleButton name="theme-toggle">
        <div className="flex items-center cursor-pointer relative" data-toggle>
          {themeSwitchers.map((switcher) => {
            const { icon, title } = switcher;
            if (title.toLowerCase() === currentTheme.toLowerCase()) {
              return (
                <span key={title + "msw"} className="pointer-events-none">
                  {icon}
                </span>
              );
            }
          })}

          <MenuDownIcon size={[23, 23]} />
        </div>
      </Modal.ToggleButton>
      <Modal.Window name="theme-toggle" position={position}>
        <ul className="bg-[--color-primary] border-4 border-[--color-secondary] p-2 rounded-lg z-20 shadow-xl">
          {themeSwitchers.map((switcher) => {
            const { icon, title } = switcher;
            return (
              <li
                key={title}
                onClick={() => handleSwitcherChange(title)}
                aria-label="theme toggle button"
                role="button"
              >
                <Modal.ToggleButton
                  name="theme-toggle"
                  classes={`flex cursor-pointer items-center gap-x-3 text-sm text-[--text-color] w-32 p-1 rounded-lg ${currentTheme.toLowerCase() === title.toLowerCase() ? "bg-electric-violet-600 text-white" : "hover:bg-[--color-secondary]"}`}
                >
                  {icon}
                  {title}
                  {currentTheme.toLowerCase() === title.toLowerCase() ? (
                    <CheckIcon size={[18, 18]} />
                  ) : null}
                </Modal.ToggleButton>
              </li>
            );
          })}
        </ul>
      </Modal.Window>
    </Modal>
  );
};

export default memo(ThemeToggle);
