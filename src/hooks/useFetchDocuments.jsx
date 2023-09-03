import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot, where } from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setloading] = useState(null)

    async function loadData() {
        setloading(true)
        const collectionRef = collection(db, docCollection)

        try {
            let q 

            if(search) {
                q = query(collectionRef, where("tagsArray", "array-contains", search), orderBy("createdAt", "desc"))
            } else {
                q = query(collectionRef, orderBy('createdAt', 'desc'))
            }
            onSnapshot(q, (querySnapshot) => {
                setDocuments(
                    querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }))
                )
            })
            setloading(false)
        } catch (error) {
            console.log(error)
            setError(error.message)
            setloading(false)
        }
    }

    useEffect(() => {
        loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [docCollection, search])

    return {documents, loading, error}
}