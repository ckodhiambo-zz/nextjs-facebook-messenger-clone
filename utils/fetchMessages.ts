import { Message } from "../typings";

//Thos function makes a request to our API getMessages Request
const fetcher = async () => {
    const res = await fetch("/api/getMessages");

    const data = await res.json();   

    const messages: Message[] = data.messages;

    return messages;
};

export default fetcher;