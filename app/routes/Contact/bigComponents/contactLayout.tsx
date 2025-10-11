import { useState } from "react";
import { Form, redirect } from "react-router";
import type { Route } from "./+types/contactLayout";

export async function clientAction({ request }: Route.ClientActionArgs) {

    let formData = await request.formData();
    let name = formData.get("name");
    let email = formData.get("email");

    console.log(name);
    console.log(formData);

    let errorsArray: string[] = [];

    if (!email?.toString().includes("_")) {
        errorsArray.push("Invalid email address");
        return errorsArray;
    }

    try {
        const response = await fetch("https://formspree.io/f/xovnojjj", {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: formData,
        });
        if (response.ok) {
            alert("Message sent!");
        }
    } catch (error) {
        console.error(error);
        alert("Error sending message.");
    }

    return redirect("/");
}

export default function ContactLayout({ actionData }: Route.ComponentProps) {
    return (<>
        <h2>Contact us</h2>
        <Form method="post">
            <fieldset>
                <label htmlFor="">Enter your name</label>
                <input type="text" name="name" />
            </fieldset>
            <fieldset>
                <label htmlFor="">Enter your email</label>
                <input type="email" name="email" />
            </fieldset>
            <fieldset>
                <label htmlFor="">Enter your message</label>
                <textarea name="text" >
                </textarea>
            </fieldset>
            {actionData && (
                <p style={{ color: "red" }}>{actionData[0]}</p>
            )}
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
        </Form>
    </>)
}