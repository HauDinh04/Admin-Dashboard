"use client"

import { useEffect, useState } from "react"

import Loader from "@/components/custom ui/Loader"
import CollectionsForm from "@/components/collections/CollectionsForm"


const CollectionDetails = ({ params }: { params: { collectionId: string }}) => {
  const [loading, setLoading] = useState(true)
  const [collectionDetails, setCollectionDetails] = useState<CollectionType | null>(null)

  const getCollectionDetails = async () => {
    try { 
      const res = await fetch(`/api/collections/${params.collectionId}`, {
        method: "GET"
      })
      const data = await res.json()
      setCollectionDetails(data)
      setLoading(false)
    } catch (err) {
      console.log("[collectionId_GET]", err)
    }
  }

  useEffect(() => {
    getCollectionDetails()
  }, [])

  return loading ? <Loader /> : (
    <CollectionsForm initialData={collectionDetails}/>
  )
}

export default CollectionDetails