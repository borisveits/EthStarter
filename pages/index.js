import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";

class CampaignIndex extends Component 
{
    static async getInitialProps() 
    {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };
    }
    renderCampaigns() 
    {
        const items = this.props.campaigns.map((address) => 
        {
            return {
                header: address,
                meta: "Campaign Address",
                description: (
                <div style={{ marginTop: "12px" }}>
                    <Link route={`/campaigns/${address}`}>
                        <a style={{
                            background: "linear-gradient(135deg, #667eea, #764ba2)",
                            color: "white",
                            padding: "8px 16px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontWeight: "500",
                            display: "inline-block",
                            transition: "all 0.3s ease"
                        }}>
                            👁️ View Campaign
                        </a>
                    </Link>
                </div>
                ),
                fluid: true,
                style: { 
                    background: "rgba(255, 255, 255, 0.9)",
                    border: "1px solid rgba(255, 255, 255, 0.2)"
                }
            };
        });
        return <Card.Group items={items} />;
    }
    render() 
    {
        return (
        <Layout>
            <div className="page-header">
                <h3>🌟 Open Campaigns</h3>
                <p className="page-subtitle">
                    Discover and support innovative projects on the blockchain
                </p>
                <Link route="/campaigns/new">
                    <a>
                    <Button
                        content="🚀 Create New Campaign"
                        icon="add circle"
                        primary
                        size="large"
                        style={{
                            fontSize: "1.1rem",
                            padding: "14px 28px"
                        }}
                    />
                    </a>
                </Link>
            </div>
            
            <div style={{ marginTop: "40px" }}>
            {this.renderCampaigns()}
            </div>
        </Layout>
        );
    }
}

export default CampaignIndex;
