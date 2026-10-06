"use client";

import { useCallback, useRef, type ComponentProps } from "react";
import { differenceInMonths, parse } from "date-fns";
import { BriefcaseBusinessIcon, InfinityIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";

import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import type { ChevronsUpDownIconHandle } from "@/components/chevrons-up-down-icon";
import { ChevronsUpDownIcon } from "@/components/chevrons-up-down-icon";

export type ExperiencePositionItemType = {
  /** Unique identifier for the position */
  id: string;
  /** The job title or position name */
  title: string;
  /**
   * Employment period of the position.
   * Use "MM.YYYY" or "YYYY" format. Omit `end` for current roles.
   */
  employmentPeriod: {
    /** Start date (e.g., "10.2022" or "2020"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
  /** The type of employment (e.g., "Full-time", "Part-time", "Contract") */
  employmentType?: string;
  /** A brief description of the position or responsibilities */
  description?: string;
  /** An icon representing the position */
  icon?: React.ReactElement;
  /** A list of skills associated with the position */
  skills?: string[];
  /** Indicates if the position details are expanded in the UI */
  isExpanded?: boolean;
};

export type ExperienceItemType = {
  /** Unique identifier for the experience item */
  id: string;
  /** Name of the company where the experience was gained */
  companyName: string;
  /** URL or path to the company's logo image */
  companyLogo?: string;
  /** URL to the company's website. */
  companyWebsite?: string;
  /**
   * List of positions held at the company
   * @fumadocsHref #experiencepositionitemtype
   * */
  positions: ExperiencePositionItemType[];
  /** Indicates if this is the user's current employer */
  isCurrentEmployer?: boolean;
};

export type WorkExperienceProps = {
  className?: string;
  /** @fumadocsHref #experienceitemtype */
  experiences: ExperienceItemType[];
};

export function WorkExperience({
  className,
  experiences,
}: WorkExperienceProps) {
  return (
    <div className={cn("bg-background px-0 text-foreground", className)}>
      {experiences.map((experience, index) => (
        <ExperienceItem
          key={experience.id}
          experience={experience}
          isFirst={index === 0}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
}

export type ExperienceItemProps = {
  experience: ExperienceItemType;
  isFirst?: boolean;
  isLast?: boolean;
};

const timelineLine =
  "pointer-events-none absolute left-1/2 w-px -translate-x-1/2 bg-foreground/25";

export function ExperienceItem({
  experience,
  isFirst = false,
  isLast = false,
}: ExperienceItemProps) {
  return (
    <div>
      <div className="grid grid-cols-[1.5rem_minmax(0,1fr)] items-start gap-x-3">
        <div className="relative flex items-start justify-center self-stretch">
          <span
            aria-hidden
            className={cn(
              timelineLine,
              isFirst ? "top-3" : "top-0",
              "bottom-0",
            )}
          />
          <div className="relative z-10 flex size-6 items-center justify-center bg-background">
            {experience.companyLogo ? (
              <img
                src={experience.companyLogo}
                alt=""
                className="size-6 rounded-full"
              />
            ) : (
              <span className="size-2 rounded-full bg-foreground/70" />
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 pb-4">
          <h3 className="text-lg/snug font-semibold">
            {experience.companyWebsite ? (
              <a
                className="link"
                href={experience.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.companyName}
              </a>
            ) : (
              experience.companyName
            )}
          </h3>

          {experience.isCurrentEmployer && (
            <span
              className="relative flex items-center justify-center"
              aria-label="Trabajo actual"
            >
              <span className="absolute inline-flex size-3 animate-ping rounded-full bg-green-500 opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-green-500" />
            </span>
          )}
        </div>
      </div>

      {experience.positions.map((position, index) => (
        <ExperiencePositionItem
          key={position.id}
          position={position}
          isLast={isLast && index === experience.positions.length - 1}
        />
      ))}
    </div>
  );
}

export type ExperiencePositionItemProps = {
  position: ExperiencePositionItemType;
};

export function ExperiencePositionItem({
  position,
  isLast = false,
}: ExperiencePositionItemProps & { isLast?: boolean }) {
  const chevronsUpDownIconRef = useRef<ChevronsUpDownIconHandle>(null);

  const handleOpenChange = useCallback((open: boolean) => {
    const controls = chevronsUpDownIconRef.current;
    if (!controls) return;

    if (open) {
      controls.startAnimation();
    } else {
      controls.stopAnimation();
    }
  }, []);

  const { start, end } = position.employmentPeriod;
  const isOngoing = !end;
  const duration = formatDuration(start, end);

  return (
    <Collapsible
      className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-3"
      defaultOpen={position.isExpanded}
      onOpenChange={handleOpenChange}
      disabled={!position.description}
    >
      <div className="relative flex items-start justify-center self-stretch">
        <span
          aria-hidden
          className={cn(timelineLine, isLast ? "top-0 h-3" : "inset-y-0")}
        />
        <div
          className={cn(
            "relative z-10 flex size-6 items-center justify-center rounded-lg",
            "bg-muted text-muted-foreground",
            "border border-muted-foreground/15 ring-1 ring-line ring-offset-1 ring-offset-background",
            "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          )}
        >
          {position.icon ?? <BriefcaseBusinessIcon />}
        </div>
      </div>

      <div className={cn("min-w-0", !isLast && "pb-6")}>
        <CollapsibleTrigger
          className={cn(
            "group/experience-position not-prose block w-full text-left select-none",
            "relative before:absolute before:-inset-x-2 before:-top-1 before:-bottom-1.5 before:rounded-lg hover:before:bg-muted/30",
            "data-disabled:before:content-none",
          )}
        >
          <div className="relative z-1 mb-1 flex items-start gap-3 text-base">
            <h4 className="flex-1 font-medium text-balance text-foreground">
              {position.title}
            </h4>

            <div className="shrink-0 text-muted-foreground group-data-disabled/experience-position:hidden [&_svg]:h-lh [&_svg]:w-4">
              <ChevronsUpDownIcon ref={chevronsUpDownIconRef} duration={0.15} />
            </div>
          </div>

          {/* Separators are aria-hidden: a dl may only expose dt/dd groups, and these dividers are decorative. */}
          <dl className="relative z-1 flex items-center gap-2 text-sm text-muted-foreground">
            {position.employmentType && (
              <>
                <div>
                  <dt className="sr-only">Employment Type</dt>
                  <dd>{position.employmentType}</dd>
                </div>

                <Separator
                  className="data-vertical:h-4 data-vertical:self-center"
                  orientation="vertical"
                  aria-hidden
                />
              </>
            )}

            <div>
              <dt className="sr-only">Employment Period</dt>
              <dd className="flex items-center gap-0.5 tabular-nums">
                <span>{start}</span>
                <span className="font-mono">—</span>
                {isOngoing ? (
                  <InfinityIcon
                    className="size-4.5 translate-y-[0.5px]"
                    aria-label="Present"
                  />
                ) : (
                  <span>{end}</span>
                )}
              </dd>
            </div>

            {duration && (
              <>
                <Separator
                  className="data-vertical:h-4 data-vertical:self-center"
                  orientation="vertical"
                  aria-hidden
                />
                <div>
                  <dt className="sr-only">Duration</dt>

                  <dd className="tabular-nums">{duration}</dd>
                </div>
              </>
            )}
          </dl>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden">
          {position.description && (
            <Prose className="pt-2">
              <ReactMarkdown>{position.description}</ReactMarkdown>
            </Prose>
          )}
        </CollapsibleContent>

        {Array.isArray(position.skills) && position.skills.length > 0 && (
          <ul className="not-prose flex flex-wrap gap-1.5 pt-3">
            {position.skills.map((skill, index) => (
              <li key={index} className="flex">
                <Skill>{skill}</Skill>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Collapsible>
  );
}

function Prose({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "prose max-w-none prose-ncdai prose-zinc dark:prose-invert",
        className,
      )}
      {...props}
    />
  );
}

function Skill({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border bg-muted/50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

function formatDuration(start: string, end?: string): string {
  const startHasMonth = start.includes(".");
  const endHasMonth = end ? end.includes(".") : true;

  // Both year-only: granularity is years, no month arithmetic needed.
  if (!startHasMonth && end && !endHasMonth) {
    const years = parseInt(end, 10) - parseInt(start, 10);
    if (years <= 0) {
      return "";
    }
    return formatYears(years);
  }

  const startDate = parsePeriodDate(start, "first");
  const endDate = end ? parsePeriodDate(end, "last") : new Date();

  // +1 to count both the start and end months inclusively.
  const totalMonths = differenceInMonths(endDate, startDate) + 1;
  if (totalMonths <= 0) {
    return "";
  }

  if (totalMonths < 12) {
    return formatMonths(totalMonths);
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (months === 0) {
    return formatYears(years);
  }
  return `${formatYears(years)} ${formatMonths(months)}`;
}

function formatYears(years: number) {
  return years === 1 ? "1 año" : `${years} años`;
}

function formatMonths(months: number) {
  return months === 1 ? "1 mes" : `${months} meses`;
}

function parsePeriodDate(str: string, fallbackMonth: "first" | "last"): Date {
  if (str.includes(".")) {
    return parse(str, "MM.yyyy", new Date());
  }
  return parse(
    `${fallbackMonth === "last" ? "12" : "01"}.${str}`,
    "MM.yyyy",
    new Date(),
  );
}
