// Displaytotal.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Displaytotal from './Displaytotal';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Displaytotal> = {
  title: 'App/Displaytotal',
  component: Displaytotal,
  parameters: {
    layout: 'centered', // Optional parameter to center the component in the Canvas
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
} satisfies Meta<typeof Displaytotal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {},
};

export const Large: Story = {
  args: {},
};

export const Small: Story = {
  args: {},
};
