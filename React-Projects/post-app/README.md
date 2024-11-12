# Redux Posts App

A React application for creating, editing, and interacting with posts using modern state management and optimistic updates.

## Features

- Create new posts
- Edit existing posts
- Add reactions to posts with optimistic updates
- Cached API responses for improved performance
- Normalized data structure using Redux Entity Adapter

## Tech Stack

- **React** - Frontend framework
- **Redux Toolkit** - State management
- **RTK Query** - API calls and data fetching
- **Redux Entity Adapter** - Data normalization

## Architecture

### State Management
The application uses Redux Toolkit for efficient state management with the following key features:

- **Normalized State**: Posts data is normalized using Redux Entity Adapter, providing a flat and efficient data structure
- **Cached Responses**: RTK Query handles API caching to minimize unnecessary network requests
- **Optimistic Updates**: Reactions are updated immediately in the UI and rolled back if the API call fails

### Data Flow

1. **Posts Fetching**:
   - RTK Query handles API calls with automatic caching
   - Responses are normalized using Entity Adapter
   - Cached data is automatically invalidated when needed

2. **Post Operations**:
   - Create: New posts are added to the normalized store
   - Edit: Updates are managed through Entity Adapter's helpers
   - React: Optimistic updates using `onQueryStarted` callback

### Optimistic Updates Implementation

```javascript
// Example of optimistic update for reactions
addReaction: builder.mutation({
  query: ({ postId, reaction }) => ({
    url: `posts/${postId}/reactions`,
    method: 'POST',
    body: { reaction }
  }),
  onQueryStarted: async ({ postId, reaction }, { dispatch, queryFulfilled }) => {
    // Optimistic update
    dispatch(
      postsAdapter.updateOne({
        id: postId,
        changes: {
          reactions: {
            ...post.reactions,
            [reaction]: post.reactions[reaction] + 1
          }
        }
      })
    )
    
    try {
      await queryFulfilled
    } catch {
      // Revert on failure
      dispatch(
        postsAdapter.updateOne({
          id: postId,
          changes: {
            reactions: {
              ...post.reactions,
              [reaction]: post.reactions[reaction] - 1
            }
          }
        })
      )
    }
  }
})
```

## Setup and Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd social-posts-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Project Structure

```
src/
├── app/
│   ├── store.js         # Redux store configuration
│   └── api.js           # RTK Query API definitions
├── features/
│   └── posts/
│       ├── postsSlice.js    # Posts reducer and actions
│       ├── PostsList.js     # Posts list component
│       ├── AddPostForm.js   # Create post form
│       └── EditPostForm.js  # Edit post form
└── components/
    └── common/          # Shared components
```

## Usage

### Creating a Post
```javascript
const dispatch = useDispatch()
const [addNewPost] = useAddNewPostMutation()

const handleSubmit = async (postData) => {
  try {
    await addNewPost(postData).unwrap()
  } catch (err) {
    console.error('Failed to save the post', err)
  }
}
```

### Adding a Reaction
```javascript
const [addReaction] = useAddReactionMutation()

const onReactionClick = async (postId, reaction) => {
  await addReaction({ postId, reaction })
}
```

## Best Practices

1. **Data Normalization**:
   - Use Entity Adapter for consistent data structure
   - Maintain relationships between entities
   - Avoid data duplication

2. **Optimistic Updates**:
   - Implement proper error handling
   - Revert changes on API failure
   - Maintain consistent UI state

3. **Performance**:
   - Leverage RTK Query caching
   - Use memoization for expensive computations
   - Implement proper loading states

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.