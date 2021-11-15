import { Box, BoxProps, styled } from "@mui/material";
import clsx from "clsx";
import React from "react";

const StyledBox = styled(Box)<{
  textTransformStyle?: any;
  ellipsis?: boolean;
}>(({ textTransformStyle, ellipsis }) => ({
  textTransform: textTransformStyle || "none",
  whiteSpace: ellipsis ? "nowrap" : "normal",
  overflow: ellipsis ? "hidden" : "",
  textOverflow: ellipsis ? "ellipsis" : "",
}));

type Props = {
  ellipsis?: boolean;
  textTransform?:
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "initial"
    | "inherit";
};

export const H1: React.FC<BoxProps & Props> = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      component="h1"
      mb={0}
      mt={0}
      fontSize="28px"
      fontWeight="600"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const H2: React.FC<BoxProps & Props> = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      component="h2"
      mb={0}
      mt={0}
      fontSize="24px"
      fontWeight="600"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const H3: React.FC<BoxProps & Props> = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      component="h3"
      mb={0}
      mt={0}
      fontSize="18px"
      fontWeight="600"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const H4: React.FC<BoxProps & Props> = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="h4"
      mb={0}
      mt={0}
      fontSize="16px"
      fontWeight="500"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const H5: React.FC<BoxProps & Props> = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="h5"
      mb={0}
      mt={0}
      fontSize="14px"
      fontWeight="600"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const H6: React.FC<BoxProps & Props> = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="h6"
      mb={0}
      mt={0}
      fontSize="13px"
      fontWeight="600"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const Paragraph: React.FC<BoxProps & Props> = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="p"
      mb={0}
      mt={0}
      fontSize="14px"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const Small: React.FC<BoxProps & Props> = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="small"
      fontSize="12px"
      fontWeight="500"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const Span: React.FC<BoxProps & Props> = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="span"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export const Tiny: React.FC<BoxProps & Props> = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="small"
      fontSize="11px"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};
