import stylePost from './Post.module.css';
import imgProfile from '../assets/profile.jpeg'

export function Post() {
    return (
        <article className={stylePost.post}>
            <header className={stylePost.author}>
                <div className={stylePost.authorInfo}>
                    <img src={imgProfile} />
                    <div>
                        <strong>Douglas Oliveira</strong>
                        <span>Full Stack Developer</span>
                    </div>
                </div>

                <time title='15 de Maio ás 08:30' dateTime='2024-05-15'> Publicado a 1h</time>
            </header>
            <div className={stylePost.content}>
                <p>
                    <a href="#">Acabei de subir mais um prtojeto </a>
                </p>
            </div>
            
            <form className={stylePost.comentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentario"
                />
                <footer>
                <button type="submit">Publicar</button>
                </footer>
            </form>
            
        </article>
    )
}