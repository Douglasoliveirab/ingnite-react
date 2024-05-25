import stylePost from './Post.module.css';
import { Comment } from './comment/Comment';
import { Avatar } from './avatar/Avatar';
import { useState } from 'react';


export function Post({content}) {
    const [comments, setComments] = useState([
        1,
        2,
    ]);
    

    function handleCreateNewComment(e){
        e.preventDefault();
        setComments([...comments, comments.length + 1]);
        console.log(comments)
    }

    return (
        <div className={stylePost.post}>
            {content.map(post => (
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
                    <form onSubmit={handleCreateNewComment} className={stylePost.comentForm}>
                        <strong>Deixe o seu feedback</strong>
                        <textarea
                            placeholder="Deixe um comentario"
                        />
                        <footer>
                            <button type="submit">Publicar</button>
                        </footer>
                    </form>
                    <div className={stylePost.commentList}>
                        {comments.map(comment => {
                          return <Comment key={comment}/>
                        })}
                    </div>
                </article>
            ))}
        </div>
    );
}
