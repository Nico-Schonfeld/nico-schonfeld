"use client";

import { motion, useReducedMotion } from "motion/react";
import { createContext, useContext } from "react";

import { cn } from "@/lib/utils";

const widths = {
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
} as const;

const hatchHeights = {
  sm: "0.5rem",
  md: "0.875rem",
  lg: "1.5rem",
  xl: "2.5rem",
} as const;

const column = "w-full max-w-(--construction-max,48rem)";
const ease = [0.22, 1, 0.36, 1] as const;

export type ConstructionWidth = keyof typeof widths;
export type LineVariant = "solid" | "dashed" | "dotted";
export type HatchHeight = keyof typeof hatchHeights;

type LineSettings = {
  variant: LineVariant;
  color: string;
  thickness: number;
  animate: boolean;
  duration: number;
};

const ConstructionContext = createContext<LineSettings>({
  variant: "solid",
  color: "var(--construction-line, rgb(0 0 0 / 0.12))",
  thickness: 1,
  animate: true,
  duration: 0.9,
});

function resolveWidth(maxWidth: ConstructionWidth | (string & {})) {
  return maxWidth in widths ? widths[maxWidth as ConstructionWidth] : maxWidth;
}

function resolveHeight(height: HatchHeight | (string & {})) {
  return height in hatchHeights ? hatchHeights[height as HatchHeight] : height;
}

function linePaint(
  variant: LineVariant,
  color: string,
  axis: "x" | "y",
): React.CSSProperties {
  if (variant === "solid") return { backgroundColor: color };

  const angle = axis === "x" ? "90deg" : "180deg";
  const [dash, gap] = variant === "dashed" ? [12, 8] : [2, 6];

  return {
    backgroundImage: `repeating-linear-gradient(${angle}, ${color} 0 ${dash}px, transparent ${dash}px ${dash + gap}px)`,
  };
}

function useLineSettings(overrides: Partial<LineSettings> = {}) {
  const context = useContext(ConstructionContext);
  const reduce = useReducedMotion();

  return {
    variant: overrides.variant ?? context.variant,
    color: overrides.color ?? context.color,
    thickness: overrides.thickness ?? context.thickness,
    duration: overrides.duration ?? context.duration,
    animate: (overrides.animate ?? context.animate) && reduce !== true,
  };
}

function DrawnLine({
  axis,
  className,
  delay = 0,
  variant,
  color,
  thickness,
  animate,
  duration,
}: {
  axis: "x" | "y";
  className?: string;
  delay?: number;
} & Partial<LineSettings>) {
  const settings = useLineSettings({
    variant,
    color,
    thickness,
    animate,
    duration,
  });

  return (
    <motion.div
      aria-hidden
      className={cn("h-full w-full", className)}
      style={{
        ...linePaint(settings.variant, settings.color, axis),
        transformOrigin: axis === "x" ? "center" : "top",
      }}
      initial={
        settings.animate
          ? axis === "x"
            ? { scaleX: 0 }
            : { scaleY: 0 }
          : false
      }
      animate={axis === "x" ? { scaleX: 1 } : { scaleY: 1 }}
      transition={{ duration: settings.duration, delay, ease }}
    />
  );
}

function Construction({
  maxWidth = "3xl",
  variant = "solid",
  background = "#ffffff",
  darkBackground = "#090909",
  foreground = "#000000",
  darkForeground = "#ffffff",
  color = "rgb(0 0 0 / 0.12)",
  darkColor = "rgb(255 255 255 / 0.1)",
  thickness = 1,
  animate = true,
  duration = 0.9,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  maxWidth?: ConstructionWidth | (string & {});
  variant?: LineVariant;
  /** Fondo en modo claro. */
  background?: string;
  /** Fondo cuando un ancestro tiene la clase `dark`. */
  darkBackground?: string;
  /** Color del texto en modo claro. */
  foreground?: string;
  /** Color del texto cuando un ancestro tiene la clase `dark`. */
  darkForeground?: string;
  /** Color de las líneas en modo claro. */
  color?: string;
  /** Color de las líneas cuando un ancestro tiene la clase `dark`. */
  darkColor?: string;
  thickness?: number;
  animate?: boolean;
  duration?: number;
}) {
  return (
    <ConstructionContext.Provider
      value={{
        variant,
        color: "var(--construction-line)",
        thickness,
        animate,
        duration,
      }}
    >
      <div
        data-slot="construction"
        data-variant={variant}
        className={cn("relative min-h-screen overflow-x-clip", className)}
        style={
          {
            ...style,
            "--construction-max": resolveWidth(maxWidth),
            "--construction-bg": background,
            "--construction-bg-dark": darkBackground,
            "--construction-fg": foreground,
            "--construction-fg-dark": darkForeground,
            "--construction-line-base": color,
            "--construction-line-dark": darkColor,
          } as React.CSSProperties
        }
        {...props}
      >
        <div
          data-slot="construction-guides"
          className={cn(
            "pointer-events-none absolute inset-y-0 left-1/2 z-20 -translate-x-1/2",
            column,
          )}
        >
          <div
            className="absolute inset-y-0 left-0"
            style={{ width: thickness }}
          >
            <DrawnLine axis="y" delay={0} />
          </div>
          <div
            className="absolute inset-y-0 right-0"
            style={{ width: thickness }}
          >
            <DrawnLine axis="y" delay={0.08} />
          </div>
        </div>
        {children}
      </div>
    </ConstructionContext.Provider>
  );
}

const frameTags = {
  section: "section",
  nav: "nav",
  header: "header",
  main: "main",
  footer: "footer",
  aside: "aside",
  div: "div",
} as const;

type FrameTag = keyof typeof frameTags;

type FrameProps = React.ComponentProps<"div"> & {
  as: FrameTag;
  slot: string;
  padding?: string | false;
  delay?: number;
  animate?: boolean;
};

function Frame({
  as,
  slot,
  padding = "px-4 py-4",
  delay = 0.16,
  animate = false,
  className,
  children,
  ...props
}: FrameProps) {
  const settings = useLineSettings({ animate });
  const Tag = frameTags[as];
  const frameClass = cn("mx-auto h-auto", column, padding, className);

  if (!settings.animate) {
    return (
      <Tag data-slot={slot} className={frameClass} {...props}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag data-slot={slot} {...props}>
      <motion.div
        className={frameClass}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: settings.duration * 0.7,
          delay,
          ease,
        }}
      >
        {children}
      </motion.div>
    </Tag>
  );
}

type FrameComponentProps = Omit<FrameProps, "as" | "slot">;

function Section(props: FrameComponentProps) {
  return <Frame as="section" slot="construction-section" {...props} />;
}

function Navbar(props: FrameComponentProps) {
  return <Frame as="nav" slot="construction-navbar" {...props} />;
}

function Header(props: FrameComponentProps) {
  return <Frame as="header" slot="construction-header" {...props} />;
}

function Main(props: FrameComponentProps) {
  return <Frame as="main" slot="construction-main" {...props} />;
}

function Footer(props: FrameComponentProps) {
  return <Frame as="footer" slot="construction-footer" {...props} />;
}

function Aside(props: FrameComponentProps) {
  return <Frame as="aside" slot="construction-aside" {...props} />;
}

function Div(props: FrameComponentProps) {
  return <Frame as="div" slot="construction-div" {...props} />;
}

function BleedLine({
  variant,
  color,
  thickness,
  animate,
  duration,
  delay = 0.2,
  className,
  ...props
}: React.ComponentProps<"div"> &
  Partial<LineSettings> & {
    delay?: number;
  }) {
  const settings = useLineSettings({
    variant,
    color,
    thickness,
    animate,
    duration,
  });

  return (
    <div
      data-slot="bleed-line"
      data-variant={settings.variant}
      className={cn("relative", className)}
      style={{ height: settings.thickness }}
      {...props}
    >
      <div
        className="absolute top-0 left-1/2 w-screen -translate-x-1/2"
        style={{ height: settings.thickness }}
      >
        <DrawnLine
          axis="x"
          delay={delay}
          variant={settings.variant}
          color={settings.color}
          thickness={settings.thickness}
          animate={settings.animate}
          duration={settings.duration}
        />
      </div>
    </div>
  );
}

function HatchBand({
  height = "md",
  gap = 4,
  stripe = 1,
  variant,
  color,
  thickness,
  animate,
  duration,
  delay = 0.28,
  className,
  ...props
}: React.ComponentProps<"div"> &
  Partial<LineSettings> & {
    height?: HatchHeight | (string & {});
    gap?: number;
    stripe?: number;
    delay?: number;
  }) {
  const settings = useLineSettings({
    variant,
    color,
    thickness,
    animate,
    duration,
  });
  const bandHeight = resolveHeight(height);

  return (
    <div
      data-slot="hatch-band"
      data-variant={settings.variant}
      className={cn("relative", className)}
      style={{ height: bandHeight }}
      {...props}
    >
      <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2">
        <motion.div
          aria-hidden
          className="h-full w-full origin-center"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent 0 ${gap}px, ${settings.color} ${gap}px ${gap + stripe}px)`,
          }}
          initial={settings.animate ? { scaleX: 0, opacity: 0 } : false}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: settings.duration, delay, ease }}
        />
      </div>
      <div
        className="absolute top-0 left-1/2 w-screen -translate-x-1/2"
        style={{ height: settings.thickness }}
      >
        <DrawnLine
          axis="x"
          delay={delay}
          variant={settings.variant}
          color={settings.color}
          thickness={settings.thickness}
          animate={settings.animate}
          duration={settings.duration}
        />
      </div>
      <div
        className="absolute bottom-0 left-1/2 w-screen -translate-x-1/2"
        style={{ height: settings.thickness }}
      >
        <DrawnLine
          axis="x"
          delay={delay}
          variant={settings.variant}
          color={settings.color}
          thickness={settings.thickness}
          animate={settings.animate}
          duration={settings.duration}
        />
      </div>
    </div>
  );
}

function HatchFill({
  gap = 4,
  stripe = 1,
  variant,
  color,
  animate,
  duration,
  delay = 0.28,
  className,
  ...props
}: React.ComponentProps<"div"> &
  Partial<LineSettings> & {
    gap?: number;
    stripe?: number;
    delay?: number;
  }) {
  const settings = useLineSettings({
    variant,
    color,
    animate,
    duration,
  });

  return (
    <div
      data-slot="hatch-fill"
      aria-hidden
      className={cn("relative h-full w-full overflow-hidden", className)}
      {...props}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent 0 ${gap}px, ${settings.color} ${gap}px ${gap + stripe}px)`,
        }}
        initial={settings.animate ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: settings.duration, delay, ease }}
      />
    </div>
  );
}

export {
  Aside,
  BleedLine,
  Construction,
  Div,
  Footer,
  HatchBand,
  HatchFill,
  Header,
  Main,
  Navbar,
  Section,
};
