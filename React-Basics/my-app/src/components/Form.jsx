
import { useState } from "react";
/**
 * This is a React functional component that represents the form.
 * @returns {JSX.Element} The form component.
 */
export default function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

/**
 * This function handles the change event of the input field.
 * @param {Event} e - The event object.
 */
    function handleFirstName(e) {
        setFirstName(e.target.value);
    };

    function handleLastName(e) {
        setLastName(e.target.value);
    };

    function HandleSubmit(e){
        e.preventDefault();
        console.log(firstName, lastName);
    };


    return (
        <div>
            <h1>Form Component</h1>
            <form onSubmit={HandleSubmit} >
                <label>
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={handleFirstName}
                    />
                </label>
                <label>
                    LastName:
                    <input
                        type="text"
                        value={lastName}
                        onChange={handleLastName}
                    />

                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};