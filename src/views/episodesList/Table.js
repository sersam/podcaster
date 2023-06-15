import React from "react";
import { Link } from "react-router-dom";

import moment from "moment";

import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const millisToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return seconds == 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

const formatDate = (dateInMilis) => {
  return moment(dateInMilis).format("L");
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Table = ({ episodes }) => {
  return (
    <div className="episodes-list-table">
      <TableContainer component={Paper}>
        <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {episodes.map((podcast) => (
              <StyledTableRow
                key={podcast.trackName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  <Link to={`episode/${podcast.trackId}`}>
                    {podcast.trackName}
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="left">
                  {formatDate(podcast.releaseDate)}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {millisToMinutesAndSeconds(podcast.trackTimeMillis)}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </div>
  );
};

export default Table;
