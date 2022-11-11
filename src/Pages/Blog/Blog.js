import React from "react";

const Blog = () => {
  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-4xl text-center font-semibold">
        Difference between SQL and NoSQ
      </h2>
      <p className="text-xl">
        SQL is the programming language used to interface with relational
        databases. (Relational databases model data as records in rows and
        tables with logical links between them). NoSQL is a class of DBMs that
        are non-relational and generally do not use SQL.
      </p>
      <h2 className="text-4xl text-center font-semibold">
        What is JWT, and how does it work?
      </h2>
      <p className="text-xl">
        What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard
        (RFC 7519) for securely transmitting information between parties as JSON
        object. It is compact, readable and digitally signed using a private
        key/ or a public key pair by the Identity Provider(IdP
      </p>
      <h2 className="text-4xl text-center font-semibold">
        What is the difference between javascript and NodeJS
      </h2>
      <p className="text-xl">
        JavaScript is a simple programming language that can be used with any
        browser that has the JavaScript Engine installed. Node. js, on the other
        hand, is an interpreter or execution environment for the JavaScript
        programming language.
      </p>
      <h2 className="text-4xl text-center font-semibold">
        How does NodeJS handle multiple requests at the same time?
      </h2>
      <p className="text-xl">
        NodeJS receives multiple client requests and places them into
        EventQueue. NodeJS is built with the concept of event-driven
        architecture. NodeJS has its own EventLoop which is an infinite loop
        that receives requests and processes them.
      </p>
    </div>
  );
};

export default Blog;
