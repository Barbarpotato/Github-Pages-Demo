export const PostData = async (reqBody) => {
    const response = await fetch(`http://localhost:3000/Form`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody)
    })
    return response.json()
}