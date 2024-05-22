import stylePost from './Post.module.css';
import imgProfile from '../assets/profile.jpeg';
import { Comment } from './comment/Comment';
import { Avatar } from './avatar/Avatar';

const posts = [
    {
        id: 1,
        author: {
            AvatarUrl: imgProfile,
            name: 'Douglas Oliveira',
            role: 'Dev full stack'
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
            role: 'Dev full stack'
        },
        content: [
            { type: 'paragraph', content: 'Fala galera' },
            { type: 'paragraph', content: 'Acabei de subir um novo post' },
        ],
        publishedAt: new Date('2024-05-22 20:00:00'),
    }
];

export function Post() {
    return (
        <div className={stylePost.post}>
            {posts.map(post => (
                <article key={post.id} className={stylePost.post}>
                    <header className={stylePost.author}>
                        <div className={stylePost.authorInfo}>
                            <Avatar hasBorder={false} src={post.author.AvatarUrl} />
                            <div>
                                <strong>{post.author.name}</strong>
                                <span>{post.author.role}</span>
                            </div>
                        </div>
                        <time title={post.publishedAt.toDateString()} dateTime={post.publishedAt.toISOString()}>
                            {`Publicado em ${post.publishedAt.toLocaleString('pt-BR', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}`}
                        </time>
                    </header>
                    <div className={stylePost.content}>

                        {post.content.map((content, index) => (
                            <p key={index}>
                                {content.content}
                            </p>
                        ))}

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
                    <div className={stylePost.commentList}>
                        <Comment />
                    </div>
                </article>
            ))}
        </div>
    );
}
