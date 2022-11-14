import { Container } from "./styles";

interface CurveButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "danger" | "warning";
}

export function CurveButton({ variant, children, ...restProps }: CurveButton) {
  return (
    <Container variant={variant ?? "secondary"} {...restProps}>
      {children}
    </Container>
  );
}
