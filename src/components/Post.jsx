import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {

    const [comment, setComment] = useState([
        "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor."
    ])

    const [newComment, setNewComment] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: "Há"
    })

    function handleCreateNewComment(e) {
        e.preventDefault();
        setComment([...comment, newComment])
        setNewComment('')
    }

    function handleNewCommentChange(e) {
        setNewComment(e.target.value);
    }

    function deleteComment(commentToDelete) {
        const commentWithoutDeletedOne = comment.filter(comment => {
            return comment !== commentToDelete
        })

        setComment(commentWithoutDeletedOne)

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
                return <p key={line.content}>{line.content}</p>;
            } else if (line.type === 'link') {
                return <p key={line.content}><a href="#">{line.content}</a></p>
            }
            })}
        </div>

        <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
            <strong>Deixe seu feedback</strong>

            <textarea
                onChange={handleNewCommentChange}
                name="comment"
                placeholder="Deixe um comentário"
                value={newComment}
            />

            <footer>
                <button type="submit">Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            {comment.map(comment => {
                return (
                    <Comment 
                        content={comment} 
                        key={comment} 
                        onDeleteComment={deleteComment}
                    />
                )
            })
            }
        </div>
       </article>
    );
    
}