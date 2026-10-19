import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "react-email";

const siteUrl = "https://nicoschonfeld.com";
const fontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
};

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  const replyHref = `mailto:${email}`;

  return (
    <Html lang="es">
      <Head />
      <Preview>Mensaje de {name}</Preview>
      <Body style={body}>
        <Container style={card}>
          <Section style={hatch}>
            <Text style={hatchSpacer}>&nbsp;</Text>
          </Section>

          <Section style={content}>
            <Text style={mark}>NS</Text>
            <Text style={title}>Nuevo mensaje</Text>
            <Text style={line}>&nbsp;</Text>
            <Text style={intro}>
              Llegó desde el formulario de nicoschonfeld.com. Al responder, el
              correo le llega a {name}.
            </Text>

            <Text style={label}>Nombre</Text>
            <Text style={value}>{name}</Text>

            <Text style={label}>Correo</Text>
            <Link href={replyHref} style={mailLink}>
              {email}
            </Link>

            <Text style={label}>Mensaje</Text>
            <Text style={messageText}>{message}</Text>

            <Link href={replyHref} style={button}>
              Responder
            </Link>
          </Section>

          <Section style={hatch}>
            <Text style={hatchSpacer}>&nbsp;</Text>
          </Section>

          <Section style={footer}>
            <Link href={siteUrl} style={footerLink}>
              nicoschonfeld.com
            </Link>
            <Text style={footerMeta}>
              <Link
                href="https://www.linkedin.com/in/nicoschonfeld/"
                style={footerLink}
              >
                LinkedIn
              </Link>
              {" · "}
              <Link href="https://github.com/nico-schonfeld" style={footerLink}>
                GitHub
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body: React.CSSProperties = {
  margin: 0,
  backgroundColor: "#090909",
  fontFamily,
};

const card: React.CSSProperties = {
  width: "100%",
  maxWidth: "640px",
  margin: "0 auto",
  backgroundColor: "#090909",
};

const hatch: React.CSSProperties = {
  height: "40px",
  backgroundColor: "#090909",
  backgroundImage:
    "repeating-linear-gradient(-45deg, transparent 0 4px, rgba(255,255,255,0.1) 4px 5px)",
  borderTop: "1px solid rgba(255,255,255,0.12)",
  borderBottom: "1px solid rgba(255,255,255,0.12)",
};

const hatchSpacer: React.CSSProperties = {
  margin: 0,
  fontSize: "1px",
  lineHeight: "40px",
};

const content: React.CSSProperties = {
  padding: "48px 24px 40px",
};

const mark: React.CSSProperties = {
  margin: "0 0 28px",
  color: "#ffffff",
  fontFamily,
  fontSize: "13px",
  fontWeight: 700,
  letterSpacing: "0.14em",
};

const title: React.CSSProperties = {
  margin: 0,
  color: "#ffffff",
  fontFamily,
  fontSize: "24px",
  fontWeight: 600,
  letterSpacing: "-0.02em",
  lineHeight: "32px",
};

const line: React.CSSProperties = {
  margin: "16px 0 0",
  borderTop: "1px solid rgba(255,255,255,0.12)",
  fontSize: "1px",
  lineHeight: "1px",
};

const intro: React.CSSProperties = {
  margin: "16px 0 0",
  color: "#b5b5bf",
  fontFamily,
  fontSize: "14px",
  lineHeight: "22px",
};

const label: React.CSSProperties = {
  margin: "28px 0 0",
  color: "#a1a1a1",
  fontFamily,
  fontSize: "12px",
  fontWeight: 600,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
};

const value: React.CSSProperties = {
  margin: "6px 0 0",
  color: "#ffffff",
  fontFamily,
  fontSize: "16px",
  lineHeight: "24px",
};

const mailLink: React.CSSProperties = {
  display: "inline-block",
  margin: "6px 0 0",
  color: "#ffffff",
  fontFamily,
  fontSize: "16px",
  lineHeight: "24px",
  textDecoration: "underline",
};

const messageText: React.CSSProperties = {
  margin: "6px 0 0",
  color: "#ffffff",
  fontFamily,
  fontSize: "16px",
  lineHeight: "24px",
  whiteSpace: "pre-wrap",
};

const button: React.CSSProperties = {
  display: "inline-block",
  margin: "32px 0 0",
  padding: "12px 18px",
  backgroundColor: "#ffffff",
  borderRadius: "6px",
  color: "#090909",
  fontFamily,
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "20px",
  textDecoration: "none",
};

const footer: React.CSSProperties = {
  padding: "28px 24px 36px",
};

const footerLink: React.CSSProperties = {
  color: "#a1a1a1",
  fontFamily,
  fontSize: "13px",
  lineHeight: "20px",
  textDecoration: "underline",
};

const footerMeta: React.CSSProperties = {
  margin: "8px 0 0",
  color: "#a1a1a1",
  fontFamily,
  fontSize: "13px",
  lineHeight: "20px",
};
