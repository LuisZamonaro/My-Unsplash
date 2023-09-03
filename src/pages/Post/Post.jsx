import { useParams } from "react-router-dom"
import { useFetchDocument } from "../../hooks/useFetchDocument"
import * as S from './styles'

const Post = () => {

    const { id } = useParams()
    const { document: post, loading } = useFetchDocument("posts", id)


    return (
        <S.Container>
            {loading && <p>Carregando post...</p>}
            {post && (
                <>
                    <h2>This post was created by: {post.createdBy}</h2>
                    <h3>Title: {post.title}</h3>
                    <img className="individualPost" src={post.image} alt={post.title} />
                </>
            )}
        </S.Container>
    )
}

export default Post