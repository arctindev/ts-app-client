import ServiceListSuspence from './ServiceListSuspence';

export default {
  title: 'Components/ServiceListSuspence',
  component: ServiceListSuspence,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args: any) => <ServiceListSuspence {...args} />;

export const Default = Template.bind({});
