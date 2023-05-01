import "./global.css";
import styles from "./App.module.css";

import Header from "./components/Header";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";

import { PostType } from "./components/Post";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/andradeleo.png",
      name: "Leonardo Andrade",
      role: "FullStack developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋🏼" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "#novoprojeto" },
    ],
    publishedAt: new Date("2023-04-27 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋🏼" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "#novoprojeto" },
    ],
    publishedAt: new Date("2023-04-29 20:00:00"),
  },
];

export default function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </>
  );
}
