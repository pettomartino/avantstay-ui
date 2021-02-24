import React from 'react';
interface IProps extends React.HTMLProps<HTMLDivElement> {
    alt?: string;
    className?: string;
    src?: string;
    size: number;
    solid?: boolean;
    style?: React.CSSProperties;
}
declare function _Avatar({ alt, className, size, src, solid, style, ...otherProps }: IProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof _Avatar>;
export default _default;
