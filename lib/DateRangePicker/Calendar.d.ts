import * as React from 'react';
import { AnyDate, DateRange } from './DateRangePicker';
export interface CalendarProps {
    showMonthArrow: boolean;
    disableDaysBeforeToday: boolean;
    lang: string;
    sets: string;
    range: {
        startDate: any;
        endDate: any;
    };
    minDate: any;
    maxDate: any;
    date: any;
    offset: any;
    shownDate: any;
    format: string;
    oldRange: DateRange;
    firstDayOfWeek: number;
    onChange: () => void;
    onInit: (d: AnyDate) => void;
    link: boolean | {
        startDate: any;
        endDate: any;
    };
    linkCB: () => void;
    specialDays: Array<any>;
    classNames: any;
    locale: string;
    dateTooltip?: any;
}
export interface CalendarState {
    date: AnyDate;
    shownDate: AnyDate;
    firstDayOfWeek: number;
}
declare class Calendar extends React.Component<any, CalendarState> {
    static defaultProps: {
        format: string;
        showMonthArrow: boolean;
        disableDaysBeforeToday: boolean;
        classNames: {};
        specialDays: any[];
    };
    constructor(props: CalendarProps, context: any);
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: CalendarProps): void;
    getShownDate(): AnyDate;
    handleSelect(newDate: AnyDate): void;
    changeMonth(direction: any, event: MouseEvent): any;
    renderMonthAndYear(classes: any): JSX.Element;
    renderWeekdays(classes: any): any[];
    renderDays(classes: any): JSX.Element[];
    render(): JSX.Element;
}
export default Calendar;
