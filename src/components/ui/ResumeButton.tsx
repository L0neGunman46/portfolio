import * as React from "react";
import { Button } from "@/components/ui/Button";
import { FileDown } from "lucide-react";
import Link from "next/link";
import { Tooltip } from "./Tooltip";

const ResumeButton = () => {
  return (
    <Tooltip label="Download Resume">
      <Link href="/resume.pdf" target="_blank">
        <div className="animate-border cursor-pointer rounded-lg border border-transparent [background:linear-gradient(var(--color-background),var(--color-background))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,theme(colors.indigo.500)_86%,theme(colors.indigo.300)_90%,theme(colors.indigo.500)_94%,theme(colors.slate.600/.48))_border-box]">
          <Button
            variant="ghost"
            className="hover:bg-background/80 h-full w-full cursor-pointer border-0 bg-transparent transition-colors"
          >
            <span className="relative z-10 font-semibold">Resume</span>
            <FileDown className="relative z-10 ml-2 size-5" />
          </Button>
        </div>
      </Link>
    </Tooltip>
  );
};

export default ResumeButton;
