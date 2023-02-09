import { FlattenSimpleInterpolation } from 'styled-components';

export type FlexDirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type AlignContentType =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'normal'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';
export type AlignSelfType =
  | 'auto'
  | 'normal'
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';
export type AlignItemsType =
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';
export type JustifyContentType =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'normal'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';
export type JustifySelfType =
  | 'auto'
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'left'
  | 'right'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';
export type JustifyItemsType =
  | 'auto'
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'left'
  | 'right'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | 'legacy right'
  | 'legacy left'
  | 'legacy center'
  | 'inherit'
  | 'initial'
  | 'unset';
export type WidthType = string;
export type HeightType = string;
export type FlexType = string;
export type FlexWrapType = 'nowrap' | 'wrap' | 'wrap-reverse' | 'inherit' | 'initial' | 'unset';
export type FlexBasisType =
  | string
  | 'auto'
  | 'fill'
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | 'content'
  | 'inherit'
  | 'initial'
  | 'unset';
export type FlexShrinkType = number;
export type FlexGrowType = number;
export type OrderType = number;
export interface IFlexProps extends React.HTMLAttributes<HTMLDivElement> {
  alignContent?: AlignContentType;
  alignItems?: AlignItemsType;
  alignSelf?: AlignSelfType;
  childMarginBottom?: string;
  childMarginLeft?: string;
  childMarginRight?: string;
  childMarginTop?: string;
  css?: FlattenSimpleInterpolation | string;
  flex?: FlexType;
  flexBasis?: FlexBasisType;
  flexDirection?: FlexDirectionType;
  flexGrow?: FlexGrowType;
  flexShrink?: FlexShrinkType;
  flexWrap?: FlexWrapType;
  gap?: string;
  borderTop?: string;
  borderBottom?: string;
  height?: HeightType;
  justifyContent?: JustifyContentType;
  justifyItems?: JustifyItemsType;
  justifySelf?: JustifySelfType;
  margin?: string;
  maxHeight?: HeightType;
  maxWidth?: WidthType;
  minHeight?: HeightType;
  minWidth?: WidthType;
  order?: OrderType;
  padding?: string;
  width?: WidthType;
}

export interface IStyledFlexProps {
  $alignContent?: IFlexProps['alignContent'];
  $alignItems?: IFlexProps['alignItems'];
  $alignSelf?: IFlexProps['alignSelf'];
  $childMarginBottom?: IFlexProps['childMarginBottom'];
  $childMarginLeft?: IFlexProps['childMarginLeft'];
  $childMarginRight?: IFlexProps['childMarginRight'];
  $childMarginTop?: IFlexProps['childMarginTop'];
  $flex?: IFlexProps['flex'];
  $flexBasis?: IFlexProps['flexBasis'];
  $flexDirection?: IFlexProps['flexDirection'];
  $flexGrow?: IFlexProps['flexGrow'];
  $flexShrink?: IFlexProps['flexShrink'];
  $flexWrap?: IFlexProps['flexWrap'];
  $height?: IFlexProps['height'];
  $gap?: IFlexProps['gap'];
  $borderTop?: IFlexProps['borderTop'];
  $borderBottom?: IFlexProps['borderBottom'];
  $justifyContent?: IFlexProps['justifyContent'];
  $justifyItems?: IFlexProps['justifyItems'];
  $justifySelf?: IFlexProps['justifySelf'];
  $margin?: IFlexProps['margin'];
  $maxHeight?: IFlexProps['maxHeight'];
  $maxWidth?: IFlexProps['maxWidth'];
  $minHeight?: IFlexProps['minHeight'];
  $minWidth?: IFlexProps['minWidth'];
  $order?: IFlexProps['order'];
  $padding?: IFlexProps['padding'];
  $width?: IFlexProps['width'];
  css?: IFlexProps['css'];
}
