export const fetchdata = async (chat) => {
    try {
        const response = await fetch('https://chatgpt-server-8x5r.vercel.app/', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${process.env.API_KEY}`
            },
            body: JSON.stringify({
                message : chat.map((message) => message.message).join("\n")
            })
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error Occurred", error)
    }
}