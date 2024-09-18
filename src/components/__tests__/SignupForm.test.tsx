import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SignupForm from "../SignupForm";

describe("SignupForm", () => {
  test("renders SignupForm and submits data", () => {
    render(<SignupForm />);

    const usernameInput = screen.getByLabelText(/username/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /sign up/i });

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    expect(usernameInput).toHaveValue("testuser");
    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });

    test("shows validation error when fields are empty", () => {
      render(<SignupForm />);

      const submitButton = screen.getByRole("button", { name: /sign up/i });
      fireEvent.click(submitButton);

      // Assuming you have validation logic that shows an error message
      expect(screen.getByText(/username is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    });

    test("shows error message for invalid email", () => {
      render(<SignupForm />);

      const usernameInput = screen.getByLabelText(/username/i);
      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/password/i);
      const submitButton = screen.getByRole("button", { name: /sign up/i });

      fireEvent.change(usernameInput, { target: { value: "testuser" } });
      fireEvent.change(emailInput, { target: { value: "invalid-email" } });
      fireEvent.change(passwordInput, { target: { value: "password123" } });
      fireEvent.click(submitButton);

      // Assuming you have validation logic that shows an error message
      expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
    });
});
