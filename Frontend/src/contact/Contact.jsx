import { useRef } from "react"
import emailjs from "@emailjs/browser"


export function Contact() {

    const PUBLIC_Key = import.meta.env.VITE_PUBLIC_Key
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID

    const form = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(SERVICE_ID, TEMPLATE_ID, form.current, {
            publicKey: PUBLIC_Key
        })

        emailjs
            .sendForm( SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_Key
            })
            .then((response) => console.log("Message envoyé! " + response.json))
            .catch((error) => {
                console.error("Erreur lors de l'envoi de l'email", error)
            })

    }
    return <>
        <div>
            <form ref={form} onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    </>
}