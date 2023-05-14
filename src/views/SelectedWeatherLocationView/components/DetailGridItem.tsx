import { Typography, Box } from "@mui/material";

type DetailGridItemProps = {
  name: string;
  details: string;
};

export const DetailGridItem = ({ name, details }: DetailGridItemProps) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={1}>
      <Typography>{name}</Typography>
      <Typography variant="h5" component="div">
        {details}
      </Typography>
    </Box>
  );
};
