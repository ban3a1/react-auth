import { React, useState } from "react";

import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Dashboard(props) {
  const [error, setError] = useState();
  const { currentUser, logout } = useAuth();
  const nav = useNavigate;

  async function handleLogout() {
    setError("");

    try {
      await logout();
      nav("/login");
    } catch (e) {
      setError(e.message.replace("Firebase:", "").split("(")[0]);
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
}

export default Dashboard;
