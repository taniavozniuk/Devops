import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Sidebar } from "../components/Sidebar/Sidebar.js";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Closed: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
  },
};

export const Open: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
};

export const Toggleable: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ padding: "1rem" }}>
        <button
          style={{
            padding: "8px 16px",
            marginBottom: "1rem",
            cursor: "pointer",
          }}
          onClick={() => setOpen(true)}
        >
          Open Sidebar
        </button>
        <Sidebar isOpen={open} onClose={() => setOpen(false)} />
      </div>
    );
  },
};