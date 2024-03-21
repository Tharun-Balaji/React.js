import "./App.css";
import PostsList from "./features/posts/PostsList";
import { store } from "./app/store";
import { Provider } from "react-redux";
import AddPostForm from "./features/posts/AddPostForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePostPage from "./features/posts/SinglePostPage";
import Layout from "./components/Layout";
import EditPostForm from "./features/posts/EditPostForm";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PostsList />} />

            <Route path="post">
              <Route index element={<AddPostForm />} />
              <Route path=":postId" element={<SinglePostPage />} />
              <Route path="edit/:postId" element={<EditPostForm />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
