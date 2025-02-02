import React from "react";
import { CircularProgress } from "@mui/material";

const PageLoader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <CircularProgress />
    </div>
  );
};

export default PageLoader;
