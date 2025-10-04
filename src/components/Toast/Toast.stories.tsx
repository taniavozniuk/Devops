import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast.js";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    message: "Success toast!",
    type: "success",
    duration: 3000,
    showCloseButton: true,
  },
};

export const Error: Story = {
  args: {
    message: "Error toast!",
    type: "error",
    duration: 4000,
    showCloseButton: true,
  },
};

export const Info: Story = {
  args: {
    message: "Info toast",
    type: "info",
    duration: 2000,
    showCloseButton: false,
  },
};

export const Warning: Story = {
  args: {
    message: "Warning toast",
    type: "warning",
    duration: 5000,
    showCloseButton: true,
  },
};
