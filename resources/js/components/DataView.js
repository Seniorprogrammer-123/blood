import * as React from 'react';
import { Scheduler, MonthView } from '@progress/kendo-react-scheduler';
import { sampleData, displayDate } from './events-utc.js';

function DataView() {
    return (
        <>
        <Scheduler
            data={sampleData}
            defaultDate={displayDate}
        >
            <MonthView
                title="Month"
                selectedDateFormat="{0:M}"
                selectedShortDateFormat="{0:M}"
            />
        </Scheduler>
        </>
    )
}
export default DataView;