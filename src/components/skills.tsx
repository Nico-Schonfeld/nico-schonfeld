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
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {names.map((name) => {
        const skill = skills.find((item) => item.name === name)

        return (
          <li key={name}>
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-foreground/5 px-2 py-0.5 text-xs text-foreground",
                pillClassName,
              )}
            >
              {skill ? (
                <skill.Icon className={cn("shrink-0", iconClassName)} />
              ) : null}
              {name}
            </span>
          </li>
        )
      })}
    </ul>
  )
}

function BrandIcon({
  className,
  color,
  darkColor,
  viewBox = "0 0 24 24",
  children,
}: SkillIconProps & {
  color: string
  darkColor?: string
  viewBox?: string
  children: ReactNode
}) {
  return (
    <svg
      viewBox={viewBox}
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
        d="M0 20.084c.043.53.23 1.063.718 1.778.58.849 1.576 1.315 2.303.567.49-.505 5.794-9.776 8.35-13.29a.761.761 0 011.248 0c2.556 3.514 7.86 12.785 8.35 13.29.727.748 1.723.282 2.303-.567.57-.835.728-1.42.728-2.046 0-.426-8.26-15.798-9.092-17.078-.8-1.23-1.044-1.498-2.397-1.542h-1.032c-1.353.044-1.597.311-2.398 1.542C8.267 3.991.33 18.758 0 19.77Z"
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
        fill="currentColor"
        d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"
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
    <BrandIcon className={className} color="#00758F" viewBox="0 0 128 128">
      <path
        fill="currentColor"
        d="M117.688 98.242c-6.973-.191-12.297.461-16.852 2.379-1.293.547-3.355.559-3.566 2.18.711.746.82 1.859 1.387 2.777 1.086 1.754 2.922 4.113 4.559 5.352 1.789 1.348 3.633 2.793 5.551 3.961 3.414 2.082 7.223 3.27 10.504 5.352 1.938 1.23 3.859 2.777 5.75 4.164.934.684 1.563 1.75 2.773 2.18v-.195c-.637-.812-.801-1.93-1.387-2.777l-2.578-2.578c-2.52-3.344-5.719-6.281-9.117-8.719-2.711-1.949-8.781-4.578-9.91-7.73l-.199-.199c1.922-.219 4.172-.914 5.949-1.391 2.98-.797 5.645-.59 8.719-1.387l4.164-1.187v-.793c-1.555-1.594-2.664-3.707-4.359-5.152-4.441-3.781-9.285-7.555-14.273-10.703-2.766-1.746-6.184-2.883-9.117-4.363-.988-.496-2.719-.758-3.371-1.586-1.539-1.961-2.379-4.449-3.566-6.738-2.488-4.793-4.93-10.023-7.137-15.066-1.504-3.437-2.484-6.828-4.359-9.91-9-14.797-18.687-23.73-33.695-32.508-3.195-1.867-7.039-2.605-11.102-3.57l-6.543-.395c-1.332-.555-2.715-2.184-3.965-2.977C16.977 3.52 4.223-3.312.539 5.672-1.785 11.34 4.016 16.871 6.09 19.746c1.457 2.012 3.32 4.273 4.359 6.539.688 1.492.805 2.984 1.391 4.559 1.438 3.883 2.695 8.109 4.559 11.695.941 1.816 1.98 3.727 3.172 5.352.727.996 1.98 1.438 2.18 2.973-1.227 1.715-1.297 4.375-1.984 6.543-3.098 9.77-1.926 21.91 2.578 29.137 1.383 2.223 4.641 6.98 9.117 5.156 3.918-1.598 3.043-6.539 4.164-10.902.254-.988.098-1.715.594-2.379v.199l3.57 7.133c2.641 4.254 7.324 8.699 11.297 11.699 2.059 1.555 3.68 4.242 6.344 5.152v-.199h-.199c-.516-.805-1.324-1.137-1.98-1.781-1.551-1.523-3.277-3.414-4.559-5.156-3.613-4.902-6.805-10.27-9.711-15.855-1.391-2.668-2.598-5.609-3.77-8.324-.453-1.047-.445-2.633-1.387-3.172-1.281 1.988-3.172 3.598-4.164 5.945-1.582 3.754-1.789 8.336-2.375 13.082-.348.125-.195.039-.398.199-2.762-.668-3.73-3.508-4.758-5.949-2.594-6.164-3.078-16.09-.793-23.191.59-1.836 3.262-7.617 2.18-9.316-.516-1.691-2.219-2.672-3.172-3.965-1.18-1.598-2.355-3.703-3.172-5.551-2.125-4.805-3.113-10.203-5.352-15.062-1.07-2.324-2.875-4.676-4.359-6.738-1.645-2.289-3.484-3.977-4.758-6.742-.453-.984-1.066-2.559-.398-3.566.215-.684.516-.969 1.191-1.191 1.148-.887 4.352.297 5.547.793 3.18 1.32 5.832 2.578 8.527 4.363 1.289.855 2.598 2.512 4.16 2.973h1.785c2.789.641 5.914.195 8.523.988 4.609 1.402 8.738 3.582 12.488 5.949 11.422 7.215 20.766 17.48 27.156 29.734 1.027 1.973 1.473 3.852 2.379 5.945 1.824 4.219 4.125 8.559 5.941 12.688 1.816 4.113 3.582 8.27 6.148 11.695 1.348 1.801 6.551 2.766 8.918 3.766 1.66.699 4.379 1.43 5.949 2.379 3 1.809 5.906 3.965 8.723 5.945 1.402.992 5.73 3.168 5.945 4.957zm-88.605-75.52c-1.453-.027-2.48.156-3.566.395v.199h.195c.695 1.422 1.918 2.34 2.777 3.566l1.98 4.164.199-.195c1.227-.867 1.789-2.25 1.781-4.363-.492-.52-.562-1.164-.992-1.785-.562-.824-1.66-1.289-2.375-1.98z"
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
        d="M.87 18.257c-.248.382-.53.875-.763 1.245a.764.764 0 0 0 .255 1.04l4.965 3.054a.764.764 0 0 0 1.058-.26c.199-.332.454-.763.733-1.221 1.967-3.247 3.945-2.853 7.508-1.146l4.957 2.337a.764.764 0 0 0 1.028-.382l2.364-5.346a.764.764 0 0 0-.382-1 599.851 599.851 0 0 1-4.965-2.361C10.911 10.97 5.224 11.185.87 18.257zM23.131 5.743c.249-.405.531-.875.764-1.25a.764.764 0 0 0-.256-1.034L18.675.404a.764.764 0 0 0-1.058.26c-.195.335-.451.763-.734 1.225-1.966 3.246-3.945 2.85-7.508 1.146L4.437.694a.764.764 0 0 0-1.027.382L1.046 6.422a.764.764 0 0 0 .382 1c1.039.49 3.105 1.467 4.965 2.361 6.698 3.246 12.392 3.029 16.738-4.04z"
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
