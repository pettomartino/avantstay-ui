import * as React from 'react';
export declare type ItemProps = {
    icon?: React.ReactNode;
    label: string;
    route?: string;
    searchable?: string;
    disabled?: boolean;
    action?: () => void;
};
declare type DropDownMenuProps = {
    className?: string;
    trigger?: React.ReactNode;
    children?: React.ReactNode;
    title?: React.ReactNode;
    position: 'right' | 'left';
    items: Array<ItemProps>;
    onTrigger?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    disableSearch?: boolean;
};
export declare function _DropDownMenu(props: DropDownMenuProps): JSX.Element;
declare const DropDownMenu: React.MemoExoticComponent<typeof _DropDownMenu>;
export default DropDownMenu;
