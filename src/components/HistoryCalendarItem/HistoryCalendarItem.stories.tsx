import { HistoryCalendarItem } from './HistoryCalendarItem';

export default {
  title: 'Components/HistoryCalendarItem',
  component: HistoryCalendarItem,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args: any) => <HistoryCalendarItem {...args} />;

export const Default = Template.bind({});
