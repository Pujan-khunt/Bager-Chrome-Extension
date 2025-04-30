import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { useVersion } from "../hooks/useVersion";

const Footer: React.FC = () => {
  const { version, loading, error } = useVersion();

  return (
    <>
      <div className="text-white absolute bottom-0 w-full bg-[#1a1a1a] h-8 flex px-4 items-center">
        <Separator className="absolute top-0 left-0" />
        {/* Version - Left */}
        <Version loading={loading} error={error} version={version} />

        {/* Github Link & Feedback Form - Right*/}
        <div className="flex">
          <a
            href="https://www.github.com/Pujan-khunt/bager-chrome-extension"
            target="_blank"
          >Github</a>
          <span className="mx-2">&middot;</span>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc3_FFf2_llbPoQH8GZYBMisAhOPvx4QarwTVA8ymIHg73Jog/viewform?usp=dialog"
            target="_blank"
          >Feedback</a>
        </div>
      </div>
    </>
  );
};

type VersionProps = {
  loading: boolean,
  error: string | null,
  version: string
}

const Version: React.FC<VersionProps> = ({ loading, error, version }: VersionProps) => {
  return (
    <div className="grow text-white">
      {loading
        ? <span className="text-sm">Loading version...</span>
        : error
          ? <VersionErrorMessage errorMessage={error} />
          : <span>Bager v{version}</span>
      }
    </div>
  );
};

type VersionErrorMessageProps = {
  errorMessage: string,
  className?: string
}

const VersionErrorMessage: React.FC<VersionErrorMessageProps> = ({ errorMessage }: VersionErrorMessageProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger className="text-sm bg-gray-800 cursor-pointer my-2 rounded-lg">
        Hover to see error message
      </HoverCardTrigger>
      {/* Adjust colors based on dark/light mode */}
      <HoverCardContent>
        Error Fetching Version: {errorMessage}
      </HoverCardContent>
    </HoverCard>
  );
};

export default Footer;
