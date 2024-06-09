import { Post } from './components/Post';
import imgProfile from './assets/profile.jpeg';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      AvatarUrl: imgProfile,
      name: 'Douglas Oliveira',
      role: 'Dev full stack',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir um novo post' },
    ],
    publishedAt: new Date('2024-05-22 20:00:00'),
  },
  {
    id: 2,
    author: {
      AvatarUrl: imgProfile,
      name: 'Danny Oliveira',
      role: 'Dev full stack',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir um novo post' },
    ],
    publishedAt: new Date('2024-05-22 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post content={post} key={post.id} />
          ))}
        </main>
      </div>
    </div>
  );
}
