import { Container } from "./styles";

interface CurveOutlinedButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "danger" | "warning";
}

export function CurveOutlinedButton({
  variant,
  children,
  ...restProps
}: CurveOutlinedButton) {
  return (
    <Container variant={variant ?? "secondary"} {...restProps}>
      {children}
    </Container>
  );
}
