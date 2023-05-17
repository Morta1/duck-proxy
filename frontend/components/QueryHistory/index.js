import { Divider, Stack, Typography } from "@mui/material";
import { Fragment } from "react";

const QueryHistory = ({ history, onClick }) => {
  return <Stack gap={2} sx={{ p: 2 }}>
    {history?.map((pastSearchTerm, index) =>
      <Fragment key={pastSearchTerm + index}>
        <Typography sx={{ cursor: 'pointer' }} onClick={() => onClick(pastSearchTerm)}>
          {pastSearchTerm}
        </Typography>
        <Divider/>
      </Fragment>)}
  </Stack>
};

export default QueryHistory;
