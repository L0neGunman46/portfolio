import Image from "next/image";
import { Badge } from "./ui/Badge";
import { skillLogoSchema } from "@/libs/schemas";
import data from "@/app/data/skills.json";
import { Tooltip } from "./ui/Tooltip";

type Skill = {
  name: string;
  icon: string;
  label: string;
};

export default function SkillsComp() {
  const skills: Skill[] = skillLogoSchema.parse(data).skills;

  return (
    <section className="grid auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {skills.map((skill) => (
        <Badge
          key={skill.name}
          className="bg-card text-card-foreground border-border hover:bg-accent hover:text-accent-foreground flex h-full w-full items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm shadow-sm transition-colors duration-200"
        >
          <div className="flex min-w-0 items-center gap-2">
            <Image
              src={skill.icon}
              alt={`${skill.label} icon`}
              width={16}
              height={16}
              className="size-4 flex-shrink-0"
              priority
            />
            <Tooltip label={skill.label}>
              <span className="truncate font-medium">{skill.label}</span>
            </Tooltip>
          </div>
        </Badge>
      ))}
    </section>
  );
}
