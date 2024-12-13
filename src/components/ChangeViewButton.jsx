import {
  Button,
  Dialog,
  DialogTrigger,
  Popover,
  ToggleButtonGroup,
  ToggleButton,
} from "react-aria-components";

import ViewRightLeftIcon from "../assets/icons/view-right-left.svg?react";

function ChangeViewButton() {
  return (
    <DialogTrigger>
      <Button
        isDisabled
        className="my-2 mr-4 flex cursor-pointer items-center gap-2 rounded bg-white/24 px-4 py-2 font-semibold text-white/87 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/87 focus-visible:outline-solid"
      >
        <ViewRightLeftIcon />
        Settings
      </Button>
      <Popover>
        <Dialog>
          <ToggleButtonGroup>
            <ToggleButton id="left">Left</ToggleButton>
            <ToggleButton id="center">Center</ToggleButton>
            <ToggleButton id="right">Right</ToggleButton>
          </ToggleButtonGroup>
        </Dialog>
      </Popover>
    </DialogTrigger>
  );
}

export default ChangeViewButton;
