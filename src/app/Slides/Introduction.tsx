import { Box, Typography } from "@mui/material";

const Introduction = () => {
  return (
    <section>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
          gap: 3,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "4rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#111",
          }}
        >
          REVEAL-JS
        </Typography>

        <Typography
          sx={{
            mt: 4,
            color: "rgba(0,0,0,0.3)",
            fontSize: "0.85rem",
          }}
        >
          Aloïs GUITTON
        </Typography>
      </Box>
    </section>
  );
};

export default Introduction;
