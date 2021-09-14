import { Label, LabelProps } from './Label';
import { Story } from '@storybook/react';

export default {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    labelText: {
      defaultValue: 'This is default label mate',
      control: 'text',
    },
  },
};

const Template: Story<LabelProps> = (args) => (
  <>
    <Label {...args} />
    <Label {...args} />
    <Label {...args} />
    <Label {...args} />
  </>
);

export const Default = Template.bind({});

export const SettingsMenu = Template.bind({});
SettingsMenu.args = {
  classConfig: 'isSettingsMenu',
};
