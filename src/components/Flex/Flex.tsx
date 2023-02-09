import { StyledFlex } from "./Flex.styled";
import { IFlexProps } from "./Flex.types";
import { FC } from "react";

export const Flex: FC<IFlexProps> = (props): JSX.Element => {
  const {
    children,
    flexDirection,
    alignContent,
    alignSelf,
    alignItems,
    justifyContent,
    justifySelf,
    justifyItems,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    margin,
    padding,
    flex,
    flexWrap,
    flexBasis,
    flexShrink,
    flexGrow,
    order,
    childMarginRight,
    childMarginLeft,
    childMarginTop,
    childMarginBottom,
    gap,
    borderTop,
    borderBottom,
    ...rest
  } = props;

  return (
    <StyledFlex
      $childMarginRight={childMarginRight}
      $childMarginLeft={childMarginLeft}
      $childMarginTop={childMarginTop}
      $childMarginBottom={childMarginBottom}
      $flexDirection={flexDirection}
      $alignContent={alignContent}
      $alignSelf={alignSelf}
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      $justifySelf={justifySelf}
      $justifyItems={justifyItems}
      $width={width}
      $margin={margin}
      $padding={padding}
      $gap={gap}
      $borderTop={borderTop}
      $borderBottom={borderBottom}
      $minWidth={minWidth}
      $maxWidth={maxWidth}
      $height={height}
      $minHeight={minHeight}
      $maxHeight={maxHeight}
      $flex={flex}
      $flexWrap={flexWrap}
      $flexBasis={flexBasis}
      $flexShrink={flexShrink}
      $flexGrow={flexGrow}
      $order={order}
      {...rest}
    >
      {children}
    </StyledFlex>
  );
};
