import { useContext } from "react"
import AddAPhoto from "../../components/AddAPhoto/AddAPhoto"
import { OpenContext } from "../../context/addPhotoContext"
import * as S from './styles'
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import PostDetails from "../../components/PostDetails/PostDetails"



const Home = () => {

  const { documents: posts, loading } = useFetchDocuments("posts")
  const { openAddPhoto } = useContext(OpenContext)


  return (
    <S.Container>
      <S.MessageHome>
        <p className="topMessage">Click on the image to view it in its actual proportions.</p>
      </S.MessageHome>
      {loading && <p>Loading...</p>}
      <div className="posts-grid">
        {posts && posts.map((post) => (
          <PostDetails key={post.id} post={post} />
        ))}
      </div>
      {openAddPhoto && <AddAPhoto />}
    </S.Container>
  )
}

export default Home