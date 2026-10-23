import { Moon, Sun } from "lucide-react";

const ThemeButton = ({ theme, onTheme }) => {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-button"
      onClick={onTheme}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
};

export default ThemeButton;