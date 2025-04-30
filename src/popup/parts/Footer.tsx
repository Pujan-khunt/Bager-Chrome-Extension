import { Separator } from "@/components/ui/separator";
import { useVersion } from "../hooks/useVersion";

const Footer: React.FC = () => {
  const version = useVersion();

  return (
    <>
      <div className="text-white absolute bottom-0 w-full bg-[#1a1a1a] h-8 flex px-4 items-center">
        <Separator className="absolute top-0" />
        {/* Version - Left */}
        <div className="grow text-white">Bager v{version}</div>

        {/* Github Link & Feedback Form - Right*/}
        <div className="flex">
          <a href="https://www.github.com/Pujan-khunt/bager-chrome-extension">Github</a>
          <span className="mx-2">&middot;</span>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc3_FFf2_llbPoQH8GZYBMisAhOPvx4QarwTVA8ymIHg73Jog/viewform?usp=dialog">Feedback</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
