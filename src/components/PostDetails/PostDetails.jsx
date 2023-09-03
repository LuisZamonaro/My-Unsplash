import { Link} from "react-router-dom"
import * as S from './styles'
import { useDeleteDocument } from "../../hooks/useDeleteDocument"

const PostDetails = ({ post }) => {


  const { deleteDocument } = useDeleteDocument("posts")


  return (
    <S.Container>

      <S.PostCotainer>
        <Link to={`/posts/${post.id}`} style={{ maxWidth: '100%' }}>
          
            <img className="imagePost" src={post.image} alt={post.title} />
          
        </Link>
        <h2 className="postTitle">{post.title}</h2>
        <button className="btnDelete" onClick={() => deleteDocument(post.id)}>Delete</button>
      </S.PostCotainer>
    </S.Container>
  )
}

export default PostDetails