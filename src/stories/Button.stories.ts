import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "../app/components/Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
    size: "sm",
    backgroundColor: "primary",
  },
};

export const Sucess: Story = {
  args: {
    label: "Button",
    size: "md",
    backgroundColor: "sucess",
  },
};

export const Danger: Story = {
  args: {
    label: "Button",
    size: "lg",
    backgroundColor: "danger",
  },
};
