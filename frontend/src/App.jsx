import { Post } from "./components/Post";
import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import './global.css';
import styles from './App.module.css';

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}
