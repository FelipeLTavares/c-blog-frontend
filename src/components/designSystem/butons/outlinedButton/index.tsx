import { Container } from "./styles";

interface OutlinedButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "danger" | "warning";
}

export function OutlinedButton({
  variant,
  children,
  ...restProps
}: OutlinedButton) {
  return (
    <Container variant={variant ?? "secondary"} {...restProps}>
      {children}
    </Container>
  );
}
