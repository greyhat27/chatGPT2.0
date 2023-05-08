export const fetchdata = async (chat) => {
    try {
        const response = await fetch('https://chatgpt-server-e6n0eck13-greyhat27.vercel.app/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
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