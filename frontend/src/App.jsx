import { Post } from "./Post";
import { Header } from "./components/header/Header";
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/sidebar/Sidebar";

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Douglas oliveira"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, tenetur. Ea reprehenderit autem ipsa vitae ratione molestias nesciunt sit incidunt velit enim? Quas veniam modi amet nihil itaque! Eveniet, sapiente?"
          />
          <Post
            author="Daniela oliveira"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, tenetur. Ea reprehenderit autem ipsa vitae ratione molestias nesciunt sit incidunt velit enim? Quas veniam modi amet nihil itaque! Eveniet, sapiente?"
          />
        </main>
      </div>
    </div>
  )
}
