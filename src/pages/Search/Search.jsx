import { Link } from 'react-router-dom';
import PostDetails from '../../components/PostDetails/PostDetails';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';
import * as S from './styles';

const Search = () => {
    const query = useQuery();
    const search = query.get('q');

    const { documents: posts } = useFetchDocuments('posts', search);

    return (
        <S.Container>
            {posts && posts.length === 0 ? (
                <div className="notFoundPosts">
                    <p>No posts were found for your search...</p>
                    <Link to="/" className="backToHome">
                        Back to home
                    </Link>
                </div>
            ) : (
                <div className="postList">
                    {posts &&
                        posts.map((post) => (
                            <PostDetails key={post.id} post={post} />
                        ))}
                </div>
            )}
        </S.Container>
    );
};

export default Search;
