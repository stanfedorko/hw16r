import React, { useState } from "react";
import Female from "../../img/female.png";
import Male from "../../img/male.png";

export default function Contact(props) {
  const { contact } = props;
  const [isHide, setIsHide] = useState(true);

  return (
    <div className="media contact-card" onClick={() => setIsHide(!isHide)}>

      {contact.gender ? (
        <img className="contact-icon" src={contact.gender === "female" ? Female : Male} alt="" />
      ) : null} 
      <div className="media-body">
        <h6 className="contact-card-info"><span>First name:</span> {contact.firstName} </h6>
        {isHide ? null : (
          <>
            <p className="h6 contact-card-info"><span>Last name:</span> {contact.lastName}</p>
            <p className="h6 contact-card-info"><span>Number:</span> {contact.phone}</p>
            {contact.gender ? (
              <p className="h6 contact-card-info"><span>Gender:</span> {contact.gender}</p>
            ) : null}
          </>
        )}
      </div>

    </div>
  );
}