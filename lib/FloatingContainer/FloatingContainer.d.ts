/// <reference types="lodash" />
import * as React from 'react';
export declare const FloatingContainerRoot: import("styled-components").StyledComponent<"div", any, {
    left?: number;
    right?: number;
    top?: number;
    transform?: string;
}, never>;
export interface FloatingContainerProps {
    className?: string;
    show?: boolean;
    horizontalAlignment?: 'left' | 'right';
    verticalAlignment?: 'top' | 'bottom';
    onClickOut?: (e: MouseEvent) => void;
    windowResizeDebounceDelay?: number;
}
export interface FloatingContainerState {
    portalElement?: HTMLElement;
}
declare class FloatingContainer extends React.PureComponent<FloatingContainerProps, FloatingContainerState> {
    static defaultProps: {
        show: boolean;
        horizontalAlignment: string;
        verticalAlignment: string;
        windowResizeDebounceDelay: number;
    };
    floatingContainerRef: React.RefObject<HTMLDivElement>;
    positioningRef: React.RefObject<HTMLDivElement>;
    state: {
        portalElement: any;
    };
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: FloatingContainerProps): void;
    componentWillUnmount(): void;
    addWindowListeners: () => void;
    removeWindowListeners: () => void;
    onWindowResize: (() => void) & import("lodash").Cancelable;
    onClickOut: (e: MouseEvent) => void;
    readonly positioning: {
        left?: number;
        right?: number;
        top?: number;
        transform?: string;
    };
    render(): JSX.Element;
}
export default FloatingContainer;
