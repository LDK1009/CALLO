"use client";

import { SnackbarProvider } from "notistack";

const SnackbarProviderComponent = () => {
  return (
    <>
      <SnackbarProvider 
        autoHideDuration={3000}
      />
    </>
  );
};

export default SnackbarProviderComponent;
