import './assets/css/global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

export function App() {

  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Fabricio Marques"
            content="Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor." />
        </main>
      </div>
    </>
  )
}