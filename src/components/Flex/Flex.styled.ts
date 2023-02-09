import { IStyledFlexProps } from "./Flex.types";
import styled, { css } from "styled-components";

export const StyledFlex = styled.div<IStyledFlexProps>`
  display: flex;

  ${({ $borderTop }) => {
    if ($borderTop)
      return css`
        border-top: ${$borderTop};
      `;
  }};

  ${({ $borderBottom }) => {
    if ($borderBottom)
      return css`
        border-bottom: ${$borderBottom};
      `;
  }};

  ${({ $gap }) => {
    if ($gap)
      return css`
        gap: ${$gap};
      `;
  }};

  ${({ $margin }) => {
    if ($margin)
      return css`
        margin: ${$margin};
      `;
  }};
  ${({ $padding }) => {
    if ($padding)
      return css`
        padding: ${$padding};
      `;
  }};
  ${({ $flexDirection }) => {
    if ($flexDirection)
      return css`
        flex-direction: ${$flexDirection};
      `;
  }};
  ${({ $alignContent }) => {
    if ($alignContent)
      return css`
        align-content: ${$alignContent};
      `;
  }};
  ${({ $alignSelf }) => {
    if ($alignSelf)
      return css`
        align-self: ${$alignSelf};
      `;
  }};
  ${({ $alignItems }) => {
    if ($alignItems)
      return css`
        align-items: ${$alignItems};
      `;
  }};
  ${({ $justifyContent }) => {
    if ($justifyContent)
      return css`
        justify-content: ${$justifyContent};
      `;
  }};
  ${({ $justifySelf }) => {
    if ($justifySelf)
      return css`
        justify-self: ${$justifySelf};
      `;
  }};
  ${({ $justifyItems }) => {
    if ($justifyItems)
      return css`
        justify-items: ${$justifyItems};
      `;
  }};
  ${({ $width }) => {
    if ($width)
      return css`
        width: ${$width};
      `;
  }};
  ${({ $minWidth }) => {
    if ($minWidth)
      return css`
        min-width: ${$minWidth};
      `;
  }};
  ${({ $maxWidth }) => {
    if ($maxWidth)
      return css`
        max-width: ${$maxWidth};
      `;
  }};
  ${({ $height }) => {
    if ($height)
      return css`
        height: ${$height};
      `;
  }};
  ${({ $minHeight }) => {
    if ($minHeight)
      return css`
        min-height: ${$minHeight};
      `;
  }};
  ${({ $maxHeight }) => {
    if ($maxHeight)
      return css`
        max-height: ${$maxHeight};
      `;
  }};
  ${({ $flex }) => {
    if ($flex)
      return css`
        flex: ${$flex};
      `;
  }};
  ${({ $flexWrap }) => {
    if ($flexWrap)
      return css`
        flex-wrap: ${$flexWrap};
      `;
  }};
  ${({ $flexBasis }) => {
    if ($flexBasis)
      return css`
        flex-basis: ${$flexBasis};
      `;
  }};
  ${({ $flexShrink }) => {
    if ($flexShrink)
      return css`
        flex-shrink: ${$flexShrink};
      `;
  }};
  ${({ $flexGrow }) => {
    if ($flexGrow)
      return css`
        flex-grow: ${$flexGrow};
      `;
  }};

  ${({ $order }) => {
    if ($order)
      return css`
        order: ${$order};
      `;
  }};

  ${({ $childMarginRight }) => {
    if ($childMarginRight)
      return css`
        > * {
          margin-right: ${$childMarginRight};
          &:last-child {
            margin-right: 0;
          }
        }
      `;
  }};

  ${({ $childMarginLeft }) => {
    if ($childMarginLeft)
      return css`
        > * {
          margin-left: ${$childMarginLeft};
          &:last-child {
            margin-left: 0;
          }
        }
      `;
  }};

  ${({ $childMarginTop }) => {
    if ($childMarginTop)
      return css`
        > * {
          margin-top: ${$childMarginTop};
          &:last-child {
            margin-top: 0;
          }
        }
      `;
  }};
  ${({ $childMarginBottom }) => {
    if ($childMarginBottom)
      return css`
        > * {
          margin-bottom: ${$childMarginBottom};
          &:last-child {
            margin-bottom: 0;
          }
        }
      `;
  }}; ;
`;
