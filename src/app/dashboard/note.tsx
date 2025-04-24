interface NoteCardProps {
    title: string
    body: string
  }
const Note = ({title,body}:NoteCardProps) => {
    return(
    <div className="border-2 border-black/30">
        <h1>{title}</h1>
        <p>{body}</p>
    </div>
    );
}
export default Note;