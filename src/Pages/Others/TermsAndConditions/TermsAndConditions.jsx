import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div>
      <h3>Here is our terms and conditions</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In rem
        voluptate, quasi doloribus repudiandae maxime eius natus ullam tempora!
        Quis, eveniet autem sequi ratione deleniti eos veniam incidunt assumenda
        eius enim. Sequi sapiente ex ipsa, nemo eum dignissimos veritatis,
        placeat sint vel eveniet fugit nobis modi similique magnam maiores a
        perspiciatis? Possimus reiciendis perferendis expedita placeat
        praesentium. Labore, quos, aut inventore perferendis nihil aliquam,
        assumenda velit esse corrupti quia eligendi optio nemo repellat nam sint
        architecto non praesentium. Veritatis neque beatae, consequatur
        voluptate incidunt fugit at eaque rerum voluptatum velit aliquid,
        aliquam atque asperiores tempora sint totam. Ullam, molestiae numquam?
      </p>
      <p>
        Go back to registration <Link to="/register">Registration</Link>
      </p>
    </div>
  );
};

export default TermsAndConditions;
