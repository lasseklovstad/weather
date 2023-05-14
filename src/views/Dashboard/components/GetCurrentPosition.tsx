import {
  Alert,
  AlertTitle,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";
import { Position } from "../../../types/positionTypes";
import { useGetCurrentPosition } from "../../../utils/useGetCurrentPosition";

type GetCurrentPositionProps = {
  children: (position: Position) => ReactElement;
};

export const GetCurrentPosition = ({ children }: GetCurrentPositionProps) => {
  const { position, positionError, isLoadingPosition } =
    useGetCurrentPosition();

  if (isLoadingPosition) {
    return (
      <Box display="flex" gap={2}>
        <CircularProgress size={25} />
        <Typography>Loading position...</Typography>
      </Box>
    );
  }
  if (positionError) {
    return (
      <Alert severity="error">
        <AlertTitle>Something went wrong while finding position</AlertTitle>
        {positionError}
      </Alert>
    );
  }

  if (position) {
    return children(position);
  }

  return null;
};
