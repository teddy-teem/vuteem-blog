import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let json = await response.json();
  // console.log(json);
  return json;

  //det som returneras här, kommer att bli vår action.payload
});


const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "init"
  },
  extraReducers(builder) {
    // omit posts loading reducers
    builder.addCase(getPosts.fulfilled, (state, action) => {
      // We can directly add the new post object to our posts array
      state.posts = action.payload;
      state.status="Fetched";
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      // We can directly add the new post object to our posts array
      state.status="Failed";
    });
    builder.addCase(getPosts.pending, (state, action) => {
      // We can directly add the new post object to our posts array
      state.status="Pending...";
    });
  },
  reducers: undefined
});

export default postsSlice.reducer;
