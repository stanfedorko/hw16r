import React, { Component } from "react";
import { contacts } from "../../data/ContactsList";
import Contact from "./Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import './contacts.css';

class Contacts extends Component {
  state = {
    contacts,
    search: "",
    male: true,
    female: true,
    unknown: true,
  };

  filterByGender = () => {};

  handleSearchChange = (e) => {
    e.persist();
    this.setState((state) => ({
      search: e.target.value,
    }));
  };

  handleGender = (e) => {
    e.persist();
    this.setState((state) => ({
      [e.target.name]: e.target.checked,
    }));
  };

  render() {
    const { search, female, male, unknown } = this.state;

    return (
      <div className="container">
        <div className="contact-book bg-warning">
          <form className="contact-book-form">
            <input
              type="text"
              value={search}
              onChange={this.handleSearchChange}
              className="input"
            />

            <div className="checkbox-container d-flex justify-content-around">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked={female} name="female" onChange={this.handleGender} />
                <label className="form-check-label" htmlFor="inlineCheckbox1">female</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" checked={male} name="male" onChange={this.handleGender} />
                <label className="form-check-label" htmlFor="inlineCheckbox2">male</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" checked={unknown} name="unknown" onChange={this.handleGender} />
                <label className="form-check-label" htmlFor="inlineCheckbox3">unknown</label>
              </div>
            </div>
          </form>

          {contacts
            .filter(
              (contact) =>
                (!search ||
                  contact.lastName
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  contact.firstName
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  contact.phone.includes(search)) &&
                (contact.gender
                  ? (female && contact.gender === "female") ||
                    (male && contact.gender === "male")
                  : unknown)
            )
            .map((contact) => (
              <Contact key={contact.lastName} contact={contact} />
            ))}
        </div>
      </div>
    );
  }
}

export default Contacts;