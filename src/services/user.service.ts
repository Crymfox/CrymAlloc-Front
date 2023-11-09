import client from "./api"

type ProfileProps = {
    firstName: string,
    lastName: string,
    username: string,
    phoneNumber: string
}

export const getProfile = async () => await client({
    method: 'get',
    url: `/user/search/${localStorage.getItem("id")}`
})

export const postProfile = async (data: ProfileProps) => client({
    method: 'put',
    url: `/user/update/${localStorage.getItem("id")}`,
    data
})

export const deleteAccount = async () => client({
    method: 'delete',
    url: `/user/delete/${localStorage.getItem("id")}`
})

export const getHistoryById = async () => client({
    method: 'get',
    url: `/user/history/${localStorage.getItem("id")}`
})