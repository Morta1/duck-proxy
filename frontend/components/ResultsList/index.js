import { Link as MuiLink, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Highlighter from "react-highlight-words";


const ResultsList = ({ results, findTerm }) => {
  if (!results) return null;
  if (Array.isArray(results) && results.length === 0) {
    return <Stack direction={'row'} justifyContent={'center'}>
      <Typography>Your search did not match any documents.</Typography>
    </Stack>
  }
  return <Stack gap={3} sx={{ minHeight: 600 }}>
    {results?.map(({ title, url }, index) => (
        <Link legacyBehavior passHref key={index} href={url}>
          <MuiLink target={'_blank'}>
            <Highlighter
              highlightStyle={{ backgroundColor: 'yellow' }}
              textToHighlight={title}
              searchWords={[findTerm]}/>
          </MuiLink>
        </Link>
      )
    )}
  </Stack>
};

export default ResultsList;
