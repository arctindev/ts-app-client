import ServiceListItem from './ServiceListItem';

export default {
  title: 'Components/ServiceListItem',
  component: ServiceListItem,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args: any) => <ServiceListItem {...args} />;

export const Default = Template.bind({});
