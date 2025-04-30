import { useTheme } from "@/popup/context/ThemeContext";
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      className="p-1 border-2 border-transparent hover:border-gray-600 hover:rounded-md box-border transition-all duration-150"
    >
      {theme ? <SunIcon /> : <MoonIcon />}
    </div>
  );
};

export default ThemeToggle;
