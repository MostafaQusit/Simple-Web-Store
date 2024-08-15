import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="text-center mb-3"> Contact Page </h1>

        <div>
          {"email: "}
          <Link to="mailto:mostafahmedqusit@gmail.com">mostafahmedqusit@gmail.com</Link>
        </div>

        <div>
          {"Linkedin account: "}
          <Link to="https://www.linkedin.com/in/mostafa-ahmed-qusit">https://www.linkedin.com/in/mostafa-ahmed-qusit</Link>
        </div>

        <div>
          {"GitHub account: "}
          <Link to="https://github.com/MostafaQusit">https://github.com/MostafaQusit</Link>
        </div>

      </div> {/* container */}
    </section>
  )
}

export default Contact