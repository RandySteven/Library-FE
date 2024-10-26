import { redirect } from "next/dist/server/api-utils"

const ApiBaseHost = `http://localhost:8081`

export const FetchAPI = async (url:string) => {
    let link = ApiBaseHost + url
    const res = await fetch(link, {
        method: 'GET',
        headers: new Headers({
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
    })
    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = res.json()
    return data
}

export const PostJSONAPI = async (url: string, request:any) => {
    let link = ApiBaseHost + url
    try {
        const res = await fetch(link, {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
              'Content-Type': 'application/json',
            },
        });
      
        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status} - ${res.statusText}`);
        }
      
        const data = await res.json();
        console.log(data)
        return data;
    }catch(error) {
        if (error instanceof Error) {
            console.error('Error creating test data:', error.message);
        }
        throw error
    }
}

export const PostFormAPI = async (url : string) => {
    let link = ApiBaseHost + url
}