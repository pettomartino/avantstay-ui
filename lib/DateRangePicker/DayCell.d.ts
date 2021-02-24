import { Component } from 'react';
interface DayCellProps {
    dayMoment: any;
    onSelect: (date: Date | string) => void;
    isSelected: boolean;
    isInRange: boolean;
    isFromPreviousMonth?: boolean;
    isPassive: boolean;
    isSpecialDay: boolean;
    isStartEdge: boolean;
    isEndEdge: boolean;
    isSunday: boolean;
    isToday: boolean;
    classNames: {
        [name: string]: boolean;
    };
    tooltip?: any;
}
declare class DayCell extends Component<DayCellProps & any> {
    constructor(props: DayCellProps, context: any);
    handleMouseEvent: (event: MouseEvent) => any;
    handleSelect: (event: MouseEvent) => any;
    getClassNames(classes: any): string;
    render(): JSX.Element;
}
export default DayCell;
