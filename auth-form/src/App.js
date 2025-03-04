import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Validation function
  const validateForm = () => {
    let newErrors = {};

    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email format";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="container">
      <h2>User Authentication</h2>

      {isLoggedIn ? (
        <h3 className="success">✅ Login Successful! Welcome, {formData.email} 🎉</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈 Hide" : "👁 Show"}
            </span>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label>Remember Me</label>
          </div>

          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default App;
