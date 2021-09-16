import HistorySidebar from './HistorySidebar';

export default {
  title: 'Components/HistorySidebar',
  component: HistorySidebar,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args: any) => <HistorySidebar {...args} />;

export const Default = Template.bind({});
