import { Trash, ThumbsUp } from 'phosphor-react';
import styleComment from './Comment.module.css';
import profile from '../../assets/profile.jpeg';
import { Avatar } from '../avatar/Avatar';

export function Comment({ content, onDeleteComment }) {
  function handeDeleteComment() {
    onDeleteComment(content);
  }
  return (
    <div className={styleComment.comment}>
      <Avatar hasBorder src={profile} alt="" />
      <div className={styleComment.commentBox}>
        <div className={styleComment.commentContent}>
          <header>
            <div className={styleComment.authorAndTime}>
              <strong>Douglas Oliveira</strong>
              <time title="19 de Maio as 08:35" dateTime="2024-05-19">Cerca de 1h atrás</time>
            </div>
            <button onClick={handeDeleteComment} title="Deletar">
              <Trash size={20} />
            </button>
          </header>
          <p>{content.comentario}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir
            {' '}
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
