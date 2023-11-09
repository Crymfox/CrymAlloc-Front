import client from "./api"

export const createAlloc = async (data: Object) => client({
    method: 'POST',
    url: '/alloc/create',
    data
})

export const deleteAlloc = async (id: number) => client({
    method: 'DELETE',
    url: `/alloc/delete/${id}`
})