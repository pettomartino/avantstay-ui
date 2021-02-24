import React from 'react';
export declare type Fit = 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
export declare type Gravity = 'center' | 'entropy' | 'attention' | 'north' | 'northeast' | 'east' | 'southeast' | 'south' | 'southwest' | 'west' | 'northwest';
export declare type ImgLiteRef = React.Ref<HTMLDivElement> | React.Ref<HTMLImageElement>;
export interface ImgLiteThumbnailOptions {
    density?: number;
    fit?: Fit;
    gravity?: Gravity;
    height?: number;
    quality?: number;
    sharpen?: string;
    sizingStep?: number;
    useOriginalFile?: boolean;
    width?: number;
}
