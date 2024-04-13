import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';
export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);
  function handleDeleteComment() {
    console.log('delete comment');
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/leogeison.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Léo Geison</strong>
              <time
                title="02 de Abril às 22:12h"
                dateTime="2024-04-02 22:12:40"
              >
                cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp /> Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
