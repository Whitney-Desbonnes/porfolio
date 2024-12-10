import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";


export default function Contact() {
    // state (état, données)
    const formInputs = [
        {id:1, value:"nom", name: "lastname", type:"text", tag:"input"},
        {id:2, value:"prénom", name: "name", type:"text", tag:"input"},
        {id:3, value:"adresse mail", name: "mail", type:"text", tag:"input"},
    ]

    // comportements
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d499efb9-01ac-46ee-a56e-059da29f9768");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };

    // render / rendu
    return (
        <FormStyled onSubmit={onSubmit}>
            <h2>Me contacter</h2>

            <h3>Par téléphone</h3>
            <div className="contact">
                <BsFillTelephoneFill /> <a href="tel:0647832076">06 47 83 20 76</a>
            </div>
            

            <h3>Par mail</h3>
            <div className="contact">
            <IoIosMail /> <a href="mailto:whitney.desbonnes@gmail.com">whitney.desbonnes@gmail.com</a>
            </div>
            
            {formInputs.map(formInput => (
                <div className="input-box" key={formInput.id}>
                    <label htmlFor={formInput.name}>{formInput.value}</label>
                    <input type={formInput.type} name={formInput.name} id={formInput.name} placeholder={`Entrez votre ${formInput.value}`}  required />
                </div>
            ))}

            <div className="input-box">
                <label htmlFor="message">Votre message</label>
                <textarea name="message" id="message" placeholder="Entrez votre message" required />
            </div>

            <button type="submit">Envoyer</button>
        </FormStyled>
    )
}

const FormStyled = styled.form`
    background-color: var(--bgc-links);
    padding: 20px;
    border-radius: 5px;

    h2 {
        margin-bottom: 20px;
    }

    h3 {
        margin-top: 30px;
    }

    div {
        margin-bottom: 20px;
    }

    .contact {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
    }

    .input-box {
        display: flex;
        flex-direction: column;
        align-items: baseline;

        label::first-letter {
            text-transform: capitalize;
        }

        input {
            width: 100%;
            max-width: 300px;
            padding: 10px;
            color: var(--color-links);
            border-radius: 5px;
            border: 1px solid var(--color-links);
        }

        textarea {
            width: 100%;
            height: 200px;
            padding: 10px;
            color: var(--color-links);
            border-radius: 5px;
            border: 1px solid var(--color-links);
        }
    }

    button[type="submit"] {
        background-color: var(--color-links);
        border: none;
        color: var(--secondary-text);
        padding: 10px 20px;
        border-radius: 5px;
        width: 100%;
        max-width: 300px;
        cursor: pointer;
    }


`