import { useState } from "react"

export const useAskModal = () => {
    const [isAskOpen, setIsAskOpen] = useState(false)
    const closeAskModal = () => setIsAskOpen(false)
    const openAskModal = () => setIsAskOpen(true)
    return {isAskOpen, closeAskModal, openAskModal}
}

export const useAllocModal = () => {
    const [isAllocOpen, setIsAllocOpen] = useState(false)
    const closeAllocModal = () => setIsAllocOpen(false)
    const openAllocModal = () => setIsAllocOpen(true)
    return {isAllocOpen, closeAllocModal, openAllocModal}
}