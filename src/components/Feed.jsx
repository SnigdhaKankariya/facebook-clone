import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <Post name="Snigdha" img="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          <Post name="Swayam" img="https://images.pexels.com/photos/639132/pexels-photo-639132.jpeg?auto=compress&cs=tinysrgb&w=600"/>
          <Post name="Sayali" img="https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          <Post name="Sayyam" img="https://images.pexels.com/photos/326259/pexels-photo-326259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </>
      )}
    </Box>
  );
};

export default Feed;

