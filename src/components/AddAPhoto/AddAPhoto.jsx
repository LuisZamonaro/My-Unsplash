import { useContext, useState } from "react"
import { useInsertDocument } from "../../hooks/useInsertDocument"
import { useAuthValue } from "../../context/authContext"
import * as S from './styles'
import { OpenContext } from "../../context/addPhotoContext"

const AddAPhoto = () => {

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState("")

    const { user } = useAuthValue()

    const { insertDocument, response } = useInsertDocument("posts")

    const {setOpenAddPhoto} = useContext(OpenContext)

    // const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormError("")

        //validate image URL
        try {
            new URL(image)
        } catch (error) {
            setFormError("A imagem precisa ser uma URL.")
            return
        }

        // criar o array de tags
        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

        // checar todos os valores
        if (!title || !image || !tags) {
            setFormError("Por favor, preencha todos os campos.")
            return
        }


        insertDocument({
            title,
            image,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName
        })

        setTitle("")
        setImage("")
        setTags("")
        setOpenAddPhoto(false)
    }

    return (
        <>
         <S.Container>
            <h2>Add a photo</h2>
            <form onSubmit={handleSubmit}>
                <S.InputAreas>
                    <S.LabelArea>
                        <span className="inputFunction">Title:</span>
                        <input type="text" name="title" className="inputsAddPhoto" required placeholder="Think of a good title" onChange={(e) => setTitle(e.target.value)} value={title} />
                    </S.LabelArea>
                    <S.LabelArea>
                        <span className="inputFunction">Photo URL:</span>
                        <input type="text" name="image" required placeholder="Enter the image URL here." onChange={(e) => setImage(e.target.value)} value={image} />
                    </S.LabelArea>
                    <S.LabelArea>
                        <span className="inputFunction">Tags:</span>
                        <input type="text" name="tags" required placeholder="Insert the tags separated by commas." onChange={(e) => setTags(e.target.value)} value={tags} />
                    </S.LabelArea>
                </S.InputAreas>
                <S.RegisterArea>
                    <S.BtnCancel onClick={() => setOpenAddPhoto(false)}>Cancel</S.BtnCancel>
                    {!response.loading && <button className="btnRegister">Submit</button>}
                </S.RegisterArea>
                {response.loading && <button className="btn" disabled>Loading...</button>}
                {(response.error || formError) && (
                    <p className="error">{response.error || formError}</p>
                )}
            </form>
        </S.Container>
        <S.Shadow onClick={() => setOpenAddPhoto(false)}/>
        </>
    )
}

export default AddAPhoto