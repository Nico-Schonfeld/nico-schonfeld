import type { CSSProperties, ReactNode } from "react"

import { cn } from "@/lib/utils"

type SkillIconProps = {
  className?: string
}

const skills = [
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "React", Icon: ReactIcon },
  { name: "React Native", Icon: ReactIcon },
  { name: "Expo", Icon: ExpoIcon },
  { name: "Tailwind CSS", Icon: TailwindIcon },
  { name: "shadcn/ui", Icon: ShadcnIcon },
  { name: "Next.js", Icon: NextIcon },
  { name: "Express.js", Icon: ExpressIcon },
  { name: "APIs REST", Icon: RestIcon },
  { name: "MySQL", Icon: MysqlIcon },
  { name: "Prisma", Icon: PrismaIcon },
  { name: "Git", Icon: GitIcon },
  { name: "Docker", Icon: DockerIcon },
  { name: "Scrum", Icon: ScrumIcon },
  { name: "Jira", Icon: JiraIcon },
  { name: "Confluence", Icon: ConfluenceIcon },
  { name: "Bitbucket", Icon: BitbucketIcon },
] as const

export function Skills({ className }: { className?: string }) {
  return (
    <SkillPills
      names={skills.map((skill) => skill.name)}
      className={cn("gap-2", className)}
      pillClassName="px-2.5 py-1 text-sm"
      iconClassName="size-4"
    />
  )
}

export function SkillPills({
  names,
  className,
  pillClassName,
  iconClassName = "size-3.5",
}: {
  names: readonly string[]
  className?: string
  pillClassName?: string
  iconClassName?: string
}) {
  const selected = names.flatMap((name) => {
    const skill = skills.find((item) => item.name === name)
    return skill ? [skill] : []
  })

  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {selected.map((skill) => (
        <li key={skill.name}>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-foreground/5 px-2 py-0.5 text-xs text-foreground",
              pillClassName,
            )}
          >
            <skill.Icon className={cn("shrink-0", iconClassName)} />
            {skill.name}
          </span>
        </li>
      ))}
    </ul>
  )
}

function BrandIcon({
  className,
  color,
  darkColor,
  children,
}: SkillIconProps & {
  color: string
  darkColor?: string
  children: ReactNode
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("text-(--skill) dark:text-(--skill-dark)", className)}
      style={
        {
          "--skill": color,
          "--skill-dark": darkColor ?? color,
        } as CSSProperties
      }
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

function TypeScriptIcon({ className }: SkillIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="3" fill="#3178C6" />
      <path
        fill="#fff"
        d="M13.2 10.2h6.4v1.35h-2.5V19h-1.45v-7.45h-2.45v-1.35zM4.4 10.2h4.9v1.35H7.55v1.15h2.15c1.55 0 2.45.75 2.45 2.05 0 1.35-.95 2.2-2.6 2.2H4.4V15.6h2.15c.75 0 1.15-.35 1.15-.95s-.4-.95-1.15-.95H4.4v-3.5z"
      />
    </svg>
  )
}

function ReactIcon({ className }: SkillIconProps) {
  return (
    <BrandIcon className={className} color="#61DAFB">
      <circle cx="12" cy="12" r="2.1" fill="currentColor" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="3.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="3.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="3.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        transform="rotate(120 12 12)"
      />
    </BrandIcon>
  )
}

function ExpoIcon({ className }: SkillIconProps) {
  return (
    <BrandIcon className={className} color="#000000" darkColor="#ffffff">
      <path
        fill="currentColor"
        d="M12.3 2.2c.5 2.4.2 4.3-1 5.6-1.1 1.2-2.7 1.8-4.8 1.7 1.4 1.6 3.4 2.4 5.8 2.2 2.6-.2 4.6-1.6 5.8-4.1-1.7 3.8-1.2 7.2 1.4 10.1-3.4-1.2-6.1-.6-8.2 1.7-2 2.2-2.8 5-2.3 8.4-.4-3.2 0-5.9 1.2-8.1 1.3-2.3 3.4-3.8 6.3-4.4-2.6.2-4.7-.4-6.4-1.8-1.6-1.3-2.5-3.2-2.6-5.6 1.9.3 3.5-.1 4.8-1.3 1.2-1.1 1.8-2.6 1.9-4.4z"
      />
    </BrandIcon>
  )
}

function TailwindIcon({ className }: SkillIconProps) {
  return (
    <BrandIcon className={className} color="#06B6D4">
      <path
        fill="currentColor"
        d="M12 6c-2.7 0-4.4 1.3-5.2 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.8 1.9 1.4.9 1 2 2.1 4.3 2.1 2.7 0 4.4-1.3 5.2-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.8-1.9-1.4C15.4 7.1 14.3 6 12 6zM6.8 12c-2.7 0-4.4 1.3-5.2 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.8 1.9 1.4.9 1 2 2.1 4.3 2.1 2.7 0 4.4-1.3 5.2-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.8-1.9-1.4-.9-1-2-2.1-4.3-2.1z"
      />
    </BrandIcon>
  )
}

function ShadcnIcon({ className }: SkillIconProps) {
  return (
    <BrandIcon className={className} color="#000000" darkColor="#ffffff">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        d="M16 4 7 20"
      />
    </BrandIcon>
  )
}

function NextIcon({ className }: SkillIconProps) {
  return (
    <BrandIcon className={className} color="#000000" darkColor="#ffffff">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.7 14.3h-1.6l-4.3-6.3v6.3H9.3V7.7h1.6l4.3 6.3V7.7h1.5z"
      />
    </BrandIcon>
  )
}

function ExpressIcon({ className }: SkillIconProps) {
  return (
    <BrandIcon className={className} color="#000000" darkColor="#ffffff">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        d="M4 16.5 8.2 7.5h1.2L5.2 16.5M9.2 16.5l4.2-9h1.2l-4.2 9M14.4 16.5l4.2-9h1.2l-4.2 9"
      />
    </BrandIcon>
  )
}

function RestIcon({ className }: SkillIconProps) {
  return (
    <BrandIcon className={className} color="#0F766E">
      <path
        fill="currentColor"
        d="M8.2 6.2 3 12l5.2 5.8 1.2-1.1L5.3 12l4.1-4.7-1.2-1.1zm7.6 0-1.2 1.1L18.7 12l-4.1 4.7 1.2 1.1L21 12l-5.2-5.8zM13.4 4h-1.6l-1.2 16h1.6l1.2-16z"
      />
    </BrandIcon>
  )
}

function MysqlIcon({ className }: SkillIconProps) {
  return (
    <BrandIcon className={className} color="#00758F">
      <path
        fill="currentColor"
        d="M12.2 3.2c.8.7 1.2 1.8 1 3-.4.2-.9.5-1.2.9-.6-.8-1.5-1.2-2.5-1.1-1.6.1-2.7 1.5-2.6 3.1.1 1.2.8 2.2 1.8 2.7-.2.7-.2 1.5 0 2.2-1.2.3-2.1 1.2-2.4 2.4-.2 1 .1 1.8.7 2.4.4-.9 1.2-1.5 2.2-1.6 1.1-.1 2 .6 2.4 1.5.6-.2 1-.7 1.2-1.3.2-.8.1-1.6-.3-2.3.9-.6 1.5-1.6 1.5-2.7 0-.4-.1-.8-.2-1.2 1-.4 1.7-1.3 1.8-2.4.2-1.6-.9-3.1-2.4-3.4.2-.8.1-1.7-.4-2.4-.2.1-.4.2-.6.2z"
      />
    </BrandIcon>
  )
}

function PrismaIcon({ className }: SkillIconProps) {
  return (
    <BrandIcon className={className} color="#5A67D8">
      <path
        fill="currentColor"
        d="M12.4 2.2 19.8 18c.3.7-.4 1.4-1.1 1.1L4.2 13.6c-.7-.3-.6-1.3.1-1.5L11 10.4 12.4 2.2z"
      />
    </BrandIcon>
  )
}

function GitIcon({ className }: SkillIconProps) {
  return (
    <BrandIcon className={className} color="#F05032">
      <path
        fill="currentColor"
        d="M21.6 11.2 12.8 2.4a1.6 1.6 0 0 0-2.3 0l-1.8 1.8 2.3 2.3a1.9 1.9 0 0 1 2.4 2.4l2.2 2.2a1.9 1.9 0 1 1-1.1 1.1l-2.1-2.1v5.5a1.9 1.9 0 1 1-1.6 0V9.9a1.9 1.9 0 0 1-1-2.5L7.4 5 2.4 10a1.6 1.6 0 0 0 0 2.3l8.8 8.8a1.6 1.6 0 0 0 2.3 0l8.1-8.1a1.6 1.6 0 0 0 0-2.3z"
      />
    </BrandIcon>
  )
}

function DockerIcon({ className }: SkillIconProps) {
  return (
    <BrandIcon className={className} color="#2496ED">
      <path
        fill="currentColor"
        d="M13.2 7.2h2.2v2.1h-2.2V7.2zm-2.7 0h2.2v2.1h-2.2V7.2zm-2.7 0h2.2v2.1H7.8V7.2zm5.4-2.6h2.2v2.1h-2.2V4.6zM7.8 9.8h2.2v2.1H7.8V9.8zm-2.7 0h2.2v2.1H5.1V9.8zm-2.6 0h2.2v2.1H2.5V9.8zm10.7 0h2.2v2.1h-2.2V9.8zM22 12.2c-.6-.4-2-.6-3.1-.3-.1-.9-.7-1.7-1.5-2.2l-.5-.3-.4.4c-.4.4-.5 1-.3 1.8-.8.4-2.6 1-2.6 3.4 0 .1 1.6 3.2 7.2 3.2 4.4 0 6.7-2.1 6.7-3.9 0-1.3-1.1-2-5.5-2.1z"
      />
    </BrandIcon>
  )
}

function ScrumIcon({ className }: SkillIconProps) {
  return (
    <BrandIcon className={className} color="#6DB33F">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 8a7 7 0 0 0-12.2-2.2L5 7.5M5 4.5v3h3M5 16a7 7 0 0 0 12.2 2.2L19 16.5M19 19.5v-3h-3"
      />
    </BrandIcon>
  )
}

function JiraIcon({ className }: SkillIconProps) {
  return (
    <BrandIcon className={className} color="#2684FF">
      <path
        fill="currentColor"
        d="M12.2 2.5 4.6 10.1a2.2 2.2 0 0 0 0 3.1l7.6 7.6 3.2-3.2-5.5-5.5 5.5-5.5-3.2-3.1zm1.6 6.1 3.4 3.4-3.4 3.4 1.6 1.6 5-5-5-5-1.6 1.6z"
      />
    </BrandIcon>
  )
}

function ConfluenceIcon({ className }: SkillIconProps) {
  return (
    <BrandIcon className={className} color="#1868DB">
      <path
        fill="currentColor"
        d="M3.2 16.8c-.3.5-.2 1.1.3 1.4l4.2 2.5c.5.3 1.1.2 1.4-.3.8-1.4 1.8-2.4 3.2-2.8l5.2-1.5c.6-.2.9-.8.7-1.4-.2-.6-.8-.9-1.4-.7l-5.2 1.5c-2.2.6-3.8 2.2-4.8 4.1-.2-.2-.4-.3-.6-.5L4.6 16.5c-.5-.3-1.1-.2-1.4.3zm17.6-9.6c.3-.5.2-1.1-.3-1.4l-4.2-2.5c-.5-.3-1.1-.2-1.4.3-.8 1.4-1.8 2.4-3.2 2.8L6.5 7.9c-.6.2-.9.8-.7 1.4.2.6.8.9 1.4.7l5.2-1.5c2.2-.6 3.8-2.2 4.8-4.1.2.2.4.3.6.5l2.1 1.2c.5.3 1.1.2 1.4-.3z"
      />
    </BrandIcon>
  )
}

function BitbucketIcon({ className }: SkillIconProps) {
  return (
    <BrandIcon className={className} color="#2684FF">
      <path
        fill="currentColor"
        d="M3.2 3.5c-.5 0-.8.4-.8.9l2.4 14.6c.1.5.5.9 1 .9h12.5c.4 0 .8-.3.9-.7l2.4-14.8c.1-.5-.3-.9-.8-.9H3.2zm9.6 10.2H9.1l-1-5.4h7.7l-1 5.4z"
      />
    </BrandIcon>
  )
}
