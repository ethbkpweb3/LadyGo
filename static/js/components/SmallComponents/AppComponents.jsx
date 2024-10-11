import { Alert, Box, Snackbar } from "@mui/material";
import { Button } from "@mui/material";

export function ToastNotify({ alertState, setAlertState }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={alertState.open}
      autoHideDuration={10000}
      key={"top center"}
      onClose={() => setAlertState({ ...alertState, open: false })}
    >
      <Alert
        onClose={() => setAlertState({ ...alertState, open: false })}
        severity={alertState.severity}
      >
        {alertState.message}
      </Alert>
    </Snackbar>
  );
}

export function StyledButton({ children, ...props }) {
  return (
    <>
      <Button
        {...props}
        sx={{
          color: "#1B1C22",
          background: "linear-gradient(271.68deg, #F0B90B 0%, #E8749E 100%)",
          fontSize: "18px",
          fontFamily: "Poppins",
          fontWeight: "600",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          textTransform: "capitalize",
          borderRadius: "16px",
          height: "44px",
          width: props.width,
          "&.Mui-disabled": {
            color: "#979EA7",
          },
          "&:hover": {
            background: "linear-gradient(271.68deg, #F0B90B 0%, #E8749E 100%)",
          },
        }}
      >
        {children}
      </Button>
    </>
  );
}
export function StyledBtn({ children, ...props }) {
  return (
    <>
      <Button
        {...props}
        sx={{
          color: "#1B1C22",
          background:
            "linear-gradient(273.16deg, #F0B90B 20.63%, #E8749E 75.15%)  padding-box, linear-gradient(90deg, #F0B90B 0%, #FFFFFF 100%) border-box",
          fontSize: "18px",
          fontFamily: "Poppins",
          fontWeight: "600",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          textTransform: "capitalize",
          borderRadius: "14px",
          height: "50px",
          width: props.width,
          border: " 3px solid transparent",
          "&.Mui-disabled": {
            color: "#979EA7",
          },
          "&:hover": {
            background:
              "linear-gradient(273.16deg, #F0B90B 20.63%, #E8749E 75.15%) padding-box, linear-gradient(90deg, #F0B90B 0%, #FFFFFF 100%) border-box",
          },
        }}
      >
        {children}
      </Button>
    </>
  );
}
export function StyledText({ children, ...props }) {
  return (
    <>
      <Box
        {...props}
        sx={{
          color: "#FFFFFF",
          fontSize: { xs: "13px", md: "16px" },
          fontFamily: "Poppins",
          fontWeight: "600",
          mr: props.mr,
        }}
      >
        {children}
      </Box>
    </>
  );
}
export function StyledTitle({ children, ...props }) {
  return (
    <>
      <Box
        {...props}
        sx={{
          color: "#000000",
          fontSize: "40px",
          //   fontFamily: "Josefin Sans",
          fontWeight: "700",
          mr: props.mr,
        }}
      >
        {children}
      </Box>
    </>
  );
}
