
import './App.css';
import PostsList from './features/posts/PostsList';
import { store } from './app/store';
import { Provider } from 'react-redux';
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <Provider store={store}>
      <main className="App">
      <AddPostForm />
        <PostsList />
       
      </main>
    </Provider>
  );
}

export default App;
