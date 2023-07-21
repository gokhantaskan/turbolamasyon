import styled from "@emotion/styled";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";

const AppButton = styled(LoadingButton)(() => ({}));

export const Button = ({ children, ...rest }: LoadingButtonProps) => {
  return <AppButton {...rest}>{children}</AppButton>;
};
