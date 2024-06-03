import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"


export function Contact() {

    const PUBLIC_Key = import.meta.env.VITE_PUBLIC_Key
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const form = useRef()


    const handleSubmit = (event) => {
        event.preventDefault()

        if (name && email && message) {

            emailjs
                .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                    publicKey: PUBLIC_Key
                })
                .then((response) => console.log("Message envoyé! " + response.json))
                .catch((error) => {
                    console.error("Erreur lors de l'envoi de l'email", error)
                })
        } else {
            alert("Veuillez remplir tous les champs demandés !")
        }
    }

    return <>
        <div>
            <form ref={form} onSubmit={handleSubmit}>

                <label htmlFor="name">Nom:</label>
                <input type="text" id="name" name="user_name" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />

                <button type="submit">Envoyer</button>
            </form>
        </div>
    </>
}