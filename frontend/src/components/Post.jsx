import { useState } from 'react';
import stylePost from './Post.module.css';
import { Comment } from './comment/Comment';
import { Avatar } from './avatar/Avatar';

export function Post({ content }) {
  const [comments, setComments] = useState([
    {
      id: 1,
      comentario: 'comentario padrão',
    },
    {
      id: 2,
      comentario: 'comentario padrão2',
    },
  ]);

  function handleNewComment(e) {
    e.preventDefault();
    const newComment = e.target.comment.value;
    setComments([...comments, newComment]);
    e.target.comment.value = '';
  }

  function deleteComment(deletedComment) {
    const removecomment = comments.filter((comment) => comment !== deletedComment);

    setComments(removecomment);
  }

  return (
    <div className={stylePost.post}>
      <article key={content.id} className={stylePost.post}>
        <header className={stylePost.author}>
          <div className={stylePost.authorInfo}>
            <Avatar hasBorder={false} src={content.author.AvatarUrl} />
            <div>
              <strong>{content.author.name}</strong>
              <span>{content.author.role}</span>
            </div>
          </div>
          <time
            title={content.publishedAt.toDateString()}
            dateTime={content.publishedAt.toISOString()}
          >
            {`Publicado em ${content.publishedAt.toLocaleString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}`}
          </time>
        </header>
        <div className={stylePost.content}>
          {content.content.map((allPost) => (
            <p key={allPost}>{allPost.content}</p>
          ))}
        </div>
        <form onSubmit={handleNewComment} className={stylePost.comentForm}>
          <strong>Deixe o seu feedback</strong>
          <textarea
            name="comment"
            placeholder="Deixe um comentario"
          />
          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>
        <div className={stylePost.commentList}>
          {comments.map((comment) => (
            <Comment
              content={comment}
              key={comment}
              onDeleteComment={deleteComment}
            />
          ))}
        </div>
      </article>
    </div>
  );
}
