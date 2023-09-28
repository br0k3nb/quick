import { Dispatch, SetStateAction } from 'react';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';

type DrawerProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CustomDrawer({ open, setOpen }: DrawerProps) {
  return (
    <SwipeableDrawer
        anchor={'left'}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
    >
        {"ifasdiofdajs"}
    </SwipeableDrawer>
  );
}