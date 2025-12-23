import React, { useState } from "react";

// Move submitData outside the component
async function submitData(formData) {
  const errors = {};

  if (!formData.name || formData.name.trim() === "") {
    errors.name = "Name is required";
  }

  if (!formData.email || formData.email.trim() === "") {
    errors.email = "Valid email is required";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { success: true };
}

function UseActionRegister() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [result, setResult] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    const res = await submitData(formData);
    setResult(res);
    setIsPending(false);
if (res.success) {
    setFormData({ name: "", email: "" });
  }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="form-control"
        />
        {result?.errors?.name && (
          <p style={{ color: "red" }}>{result.errors.name}</p>
        )}
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="form-control"
        />
        {result?.errors?.email && (
          <p style={{ color: "red" }}>{result.errors.email}</p>
        )}
      </div>

      <button type="submit" className="btn btn-success" disabled={isPending}>
        {isPending ? "Saving..." : "Submit"}
      </button>

      {result?.success && (
        <p style={{ color: "green" }}>Form submitted successfully!{}</p>
      )}
    </form>
  );
}

export default UseActionRegister;
