import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <>
      <Form setContacts={setContacts} contacts={contacts}></Form>
      <Contacts contacts={contacts} setContacts={setContacts}></Contacts>
    </>
  );
}

function Contacts(props) {

  function modifyContact(event, i){
     
      props.setContacts(
        props.contacts.map((contact, j) => {
          if (i === j) {
            return { ...contact, [event.target.name]: event.target.value };
          }
          return contact;
        })
      );
    }
  

  return (
    <>
      {props.contacts.map((contact, i) => {
        if (contact.isEditing) {
          return (
            <div className="card" style={{ width: "18rem" }}>
              <button
                onClick={() => {
                  props.setContacts(
                    props.contacts.filter((contact, j) => j !== i)
                  );
                }}
              >
                delete
              </button>
              <button
                onClick={() => {
                  props.setContacts(
                    props.contacts.map((contact, j) => {
                      if (i === j) {
                        return { ...contact, isEditing: false };
                      }
                      return contact;
                    })
                  );
                }}
              >
                Toggle Edit
              </button>

              <div className="card-body">
                <h5 className="card-title">
                  <input
                  name="name"
                    value={contact.name}
                    onChange={(event)=>modifyContact(event, i)}
                  ></input>
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  <input onChange={(event)=>modifyContact(event, i)}  name="address" value={contact.address}></input>
                </h6>
                <p className="card-text">
                  <input onChange={(event)=>modifyContact(event, i)}   name="phone" value={contact.phone}></input>
                </p>
              </div>
            </div>
          );
        } else {
          return (
            <div className="card" style={{ width: "18rem" }}>
              <button
                onClick={() => {
                  props.setContacts(
                    props.contacts.filter((contact, j) => j !== i)
                  );
                }}
              >
                delete
              </button>

              <button
                onClick={() => {
                  props.setContacts(
                    props.contacts.map((contact, j) => {
                      if (i === j) {
                        return { ...contact, isEditing: true };
                      }
                      return contact;
                    })
                  );
                }}
              >
                Toggle Edit
              </button>
              <div className="card-body">
                <h5 className="card-title">{contact.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {contact.address}
                </h6>
                <p className="card-text">{contact.phone}</p>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

function Form(props) {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function submitForm(event) {
    event.preventDefault();

    let newContact = { name, phone, address, isEditing: false };
    props.setContacts([newContact, ...props.contacts]);
    setName("");
    setPhone("");
    setAddress("");
  }

  return (
    <form action="" onSubmit={submitForm}>
      <input
        type="text"
        value={name}
        name="name"
        placeholder="name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        value={address}
        name="address"
        placeholder="address"
        onChange={(event) => setAddress(event.target.value)}
      />
      <input
        type="text"
        value={phone}
        placeholder="phone"
        onChange={(event) => setPhone(event.target.value)}
      />
      <button>submit</button>

      <p>{name}</p>
      <p>{address}</p>
      <p>{phone}</p>
    </form>
  );
}

export default App;
