import AnimatedGradient from "@/components/animated-gradient";

export function HomeBackground() {
  return (
    <AnimatedGradient
      style={{
        zIndex: 0,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
      }}
      config={{ preset: "Prism", opacity: 0.01 }}
    />
  );
}
