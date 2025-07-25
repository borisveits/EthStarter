import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="app-wrapper">
      <Container>
        <Head>
          <title>CrowdCoin - Decentralized Crowdfunding</title>
          <meta name="description" content="Create and fund campaigns on the blockchain" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          ></link>
          <style jsx global>{`
            * {
              box-sizing: border-box;
            }
            
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
              min-height: 100vh;
              margin: 0;
              color: #2d3748;
            }
            
            .app-wrapper {
              min-height: 100vh;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              padding: 20px 0;
            }
            
            .ui.container {
              background: rgba(255, 255, 255, 0.95);
              backdrop-filter: blur(10px);
              border-radius: 20px;
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
              padding: 30px !important;
              margin-top: 20px !important;
              margin-bottom: 20px !important;
            }
            
            h1, h2, h3, h4, h5, h6 {
              color: #2d3748 !important;
              font-weight: 600 !important;
              margin-bottom: 1.5rem !important;
            }
            
            h3 {
              font-size: 2rem !important;
              background: linear-gradient(135deg, #667eea, #764ba2);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            
            .ui.button.primary {
              background: linear-gradient(135deg, #667eea, #764ba2) !important;
              border: none !important;
              border-radius: 12px !important;
              padding: 12px 24px !important;
              font-weight: 500 !important;
              transition: all 0.3s ease !important;
              box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3) !important;
            }
            
            .ui.button.primary:hover {
              transform: translateY(-2px) !important;
              box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4) !important;
            }
            
            .ui.button.green {
              background: linear-gradient(135deg, #48bb78, #38a169) !important;
              border: none !important;
              border-radius: 8px !important;
              color: white !important;
            }
            
            .ui.button.teal {
              background: linear-gradient(135deg, #4fd1c7, #38b2ac) !important;
              border: none !important;
              border-radius: 8px !important;
              color: white !important;
            }
            
            .ui.cards > .card {
              border-radius: 16px !important;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
              border: 1px solid rgba(255, 255, 255, 0.2) !important;
              transition: all 0.3s ease !important;
              background: rgba(255, 255, 255, 0.9) !important;
            }
            
            .ui.cards > .card:hover {
              transform: translateY(-5px) !important;
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
            }
            
            .ui.form .field > label {
              color: #4a5568 !important;
              font-weight: 500 !important;
              margin-bottom: 8px !important;
            }
            
            .ui.input > input {
              border-radius: 12px !important;
              border: 2px solid #e2e8f0 !important;
              padding: 12px 16px !important;
              transition: all 0.3s ease !important;
            }
            
            .ui.input > input:focus {
              border-color: #667eea !important;
              box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
            }
            
            .ui.table {
              border-radius: 16px !important;
              overflow: hidden !important;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
              border: none !important;
            }
            
            .ui.table thead th {
              background: linear-gradient(135deg, #667eea, #764ba2) !important;
              color: white !important;
              font-weight: 600 !important;
              padding: 16px !important;
            }
            
            .ui.table tbody tr {
              transition: all 0.2s ease !important;
            }
            
            .ui.table tbody tr:hover {
              background: rgba(102, 126, 234, 0.05) !important;
            }
            
            .ui.message.error {
              border-radius: 12px !important;
              background: #fed7d7 !important;
              border: 1px solid #feb2b2 !important;
              color: #c53030 !important;
            }
            
            .campaign-stats {
              background: rgba(255, 255, 255, 0.9);
              border-radius: 16px;
              padding: 24px;
              margin: 20px 0;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }
            
            .contribute-form {
              background: rgba(255, 255, 255, 0.95);
              border-radius: 16px;
              padding: 24px;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
              border: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .page-header {
              text-align: center;
              margin-bottom: 2rem;
              padding: 2rem 0;
            }
            
            .page-header h3 {
              font-size: 2.5rem !important;
              margin-bottom: 0.5rem !important;
            }
            
            .page-subtitle {
              color: #718096;
              font-size: 1.1rem;
              margin-bottom: 2rem;
            }
            
            .hero-section {
              position: relative;
              padding: 4rem 0;
              margin: -30px -30px 40px -30px;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              border-radius: 20px 20px 0 0;
              overflow: hidden;
            }
            
            .animated-bg {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              opacity: 0.1;
            }
            
            .bg-animation {
              position: absolute;
              top: -50%;
              left: -50%;
              width: 200%;
              height: 200%;
              background: radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px);
              background-size: 50px 50px;
              animation: float 20s ease-in-out infinite;
            }
            
            @keyframes float {
              0%, 100% { transform: translate(0, 0) rotate(0deg); }
              33% { transform: translate(30px, -30px) rotate(120deg); }
              66% { transform: translate(-20px, 20px) rotate(240deg); }
            }
            
            .hero-title {
              font-size: 3.5rem !important;
              color: white !important;
              text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
              margin-bottom: 1rem !important;
            }
            
            .hero-section .page-subtitle {
              color: rgba(255, 255, 255, 0.9);
              font-size: 1.3rem;
              text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            }
            
            .stats-section {
              position: relative;
              background: linear-gradient(135deg, #4c51bf 0%, #553c9a 100%);
              margin: 40px -30px;
              padding: 60px 30px;
              border-radius: 20px;
              overflow: hidden;
            }
            
            .floating-shapes {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              pointer-events: none;
            }
            
            .shape {
              position: absolute;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 50%;
              animation: floatShapes 15s ease-in-out infinite;
            }
            
            .shape-1 {
              width: 80px;
              height: 80px;
              top: 20%;
              left: 10%;
              animation-delay: 0s;
            }
            
            .shape-2 {
              width: 120px;
              height: 120px;
              top: 60%;
              right: 15%;
              animation-delay: 5s;
            }
            
            .shape-3 {
              width: 60px;
              height: 60px;
              bottom: 30%;
              left: 20%;
              animation-delay: 10s;
            }
            
            .shape-4 {
              width: 100px;
              height: 100px;
              top: 10%;
              right: 30%;
              animation-delay: 7s;
            }
            
            @keyframes floatShapes {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(180deg); }
            }
            
            .features-section {
              margin: 60px 0;
              padding: 40px 0;
            }
            
            .features-title {
              text-align: center;
              font-size: 2.5rem !important;
              background: linear-gradient(135deg, #667eea, #764ba2);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              margin-bottom: 3rem !important;
            }
            
            .feature-card {
              background: rgba(255, 255, 255, 0.95);
              border-radius: 20px;
              padding: 40px 30px;
              text-align: center;
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
              border: 1px solid rgba(255, 255, 255, 0.2);
              transition: all 0.3s ease;
              height: 100%;
            }
            
            .feature-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
            }
            
            .feature-icon {
              background: linear-gradient(135deg, #667eea, #764ba2);
              border-radius: 50%;
              width: 100px;
              height: 100px;
              margin: 0 auto 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
            }
            
            .feature-card h3 {
              font-size: 1.5rem !important;
              color: #2d3748 !important;
              margin-bottom: 15px !important;
            }
            
            .feature-card p {
              color: #718096;
              line-height: 1.6;
              font-size: 1rem;
            }
            
            .campaigns-section {
              margin: 60px 0;
            }
            
            .section-title {
              text-align: center;
              font-size: 2.5rem !important;
              background: linear-gradient(135deg, #667eea, #764ba2);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              margin-bottom: 1rem !important;
            }
            
            .section-subtitle {
              text-align: center;
              color: #718096;
              font-size: 1.2rem;
              margin-bottom: 3rem;
            }
            
            .stats-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 20px;
              margin: 20px 0;
            }
            
            .stat-card {
              background: rgba(255, 255, 255, 0.9);
              border-radius: 12px;
              padding: 20px;
              text-align: center;
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
              border: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .stat-number {
              font-size: 2rem;
              font-weight: 700;
              color: #667eea;
              margin-bottom: 8px;
            }
            
            .stat-label {
              color: #718096;
              font-size: 0.9rem;
              font-weight: 500;
            }
          `}</style>
        </Head>
        <Header />
        {props.children}
      </Container>
    </div>
  );
};
export default Layout;
