import { Container } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "danger" | "warning";
}

export function Button({ variant, children, ...restProps }: ButtonProps) {
  return (
    <Container variant={variant ?? "secondary"} {...restProps}>
      {children}
    </Container>
  );
}
