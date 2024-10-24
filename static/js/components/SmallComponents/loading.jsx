import Backdrop from "@mui/material/Backdrop";
import { makeStyles } from "@mui/styles";
import { PropagateLoader } from "react-spinners";

const useStyles = makeStyles(() => ({
  backdrop: {
    zIndex: 220000000,
    color: "#fff",
  },
}));

export default function Loading({ loading }) {
  const classes = useStyles();
  return (
    <div>
      <Backdrop className={classes.backdrop} open={loading}>
        <PropagateLoader color="#F0B90B" size={30} />
      </Backdrop>
    </div>
  );
}
