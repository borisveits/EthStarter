import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

const Header = () => {
  return (
    <Menu style={{ 
      marginTop: "0px", 
      marginBottom: "30px",
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      borderRadius: "16px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
    }}>
      <Link route="/">
        <a className="item" style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}>
          🚀 CrowdCoin
        </a>
      </Link>
      <Menu.Menu position="right">
        <Link route="/">
          <a className="item" style={{
            fontWeight: "500",
            color: "#4a5568"
          }}>
            📋 Campaigns
          </a>
        </Link>

        <Link route="/campaigns/new">
          <a className="item" style={{
            fontWeight: "600",
            color: "#667eea",
            fontSize: "1.2rem"
          }}>
            ➕ Create
          </a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
