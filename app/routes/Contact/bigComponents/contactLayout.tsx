import { useRef } from "react";


export default function ContactLayout() {

    const nameInput = useRef<HTMLInputElement>(null);
    const emailInput = useRef<HTMLInputElement>(null);
    const textInput = useRef<HTMLTextAreaElement>(null);

    async function submit(e: any): Promise<void> {
        e.preventDefault();

        // const data: {
        //     name: string,
        //     email: string,
        //     message: string

        // } = {
        //     name: nameInput.current?.value || "",
        //     email: emailInput.current?.value || "",
        //     message: textInput.current?.value || "",
        // }

        const data: {
            name: string,
            email: string,
            message: string

        } = {
            name: nameInput.current!.value,
            email: emailInput.current!.value,
            message: textInput.current!.value,
        }

        console.log(JSON.stringify(data));

        try {
            const response = await fetch("https://formspree.io/f/xovnojjj", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Message sent!");
            } else {
                alert("Something went wrong.");
            }
        } catch (error) {
            console.error(error);
            alert("Error sending message.");
        }
    }


    return (
        <>
            <div className="flex justify-between">
                <div>
                    <h2>
                        Find us
                    </h2>
                    <div>stavros</div>
                    <div>mwkos</div>
                    <div>kwstas</div>
                </div>
                <div>
                    <h2>Contact us</h2>
                    <form onSubmit={(e) => submit(e)}>
                        <fieldset>
                            <label htmlFor="">Enter your name</label>
                            <input type="text" name="name" ref={nameInput} />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="">Enter your email</label>
                            <input type="email" name="email" ref={emailInput} />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="">Enter your message</label>
                            <textarea name="text" ref={textInput}>

                            </textarea>
                        </fieldset>
                        <input type="submit" value="Submit" />
                        <input type="reset" value="Reset" />

                    </form>
                </div>
            </div>
        </>
    )
}