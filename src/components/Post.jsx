import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {

    const [comment, setComment] = useState([
        1,2
    ])

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: "Há"
    })

    function handleCreateNewComment(e) {
        e.preventDefault();

        setComment([...comment, (comment.length+1)])

        // alert(comment)
    }

    return (
       <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar 
                    className={styles.avatar}
                    src={author.avatarUrl} />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time dateTime={publishedAt.toISOString()} title={publishedDateFormatted}>
               {publishedDateRelativeToNow}
            </time>
        </header>

        <div className={styles.content}>
            {content.map(line => {
            if (line.type === 'paragraph') {
                return <p>{line.content}</p>;
            } else if (line.type === 'link') {
                return <p><a href="#">{line.content}</a></p>
            }
            })}
        </div>

        <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
            <strong>Deixe seu feedback</strong>

            <textarea
            placeholder="Deixe um comentário"
            />

            <footer>
                <button type="submit">Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            {comment.map(comment => {
                return <Comment />
            })
            }
        </div>
       </article>
    );
    
}