import * as React from "react";
import { Button } from "@/components/ui/Button";
import { FileDown } from "lucide-react";
import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link href="/resume.pdf" target="_blank">
      <div className="[background:linear-gradient(var(--color-background),var(--color-background))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,theme(colors.indigo.500)_86%,theme(colors.indigo.300)_90%,theme(colors.indigo.500)_94%,theme(colors.slate.600/.48))_border-box] rounded-lg border border-transparent animate-border">
        <Button
          variant="ghost"
          className="bg-transparent hover:bg-background/80 transition-colors border-0 w-full h-full cursor-pointer"
        >
          <span className="relative z-10 font-semibold">Resume</span>
          <FileDown className="relative z-10 ml-2 size-5" />
        </Button>
      </div>
    </Link>
  );
};

export default ResumeButton;