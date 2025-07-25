import React, { Component } from "react";
import { Card, Button, Grid, Statistic, Icon } from "semantic-ui-react";
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

    renderStats() {
        const totalCampaigns = this.props.campaigns.length;
        return (
            <div className="stats-section">
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                </div>
                <Grid columns={3} stackable textAlign="center">
                    <Grid.Column>
                        <Statistic inverted>
                            <Statistic.Value>
                                <Icon name="rocket" />
                                {totalCampaigns}
                            </Statistic.Value>
                            <Statistic.Label>Active Campaigns</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                        <Statistic inverted>
                            <Statistic.Value>
                                <Icon name="ethereum" />
                                100+
                            </Statistic.Value>
                            <Statistic.Label>ETH Raised</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                        <Statistic inverted>
                            <Statistic.Value>
                                <Icon name="users" />
                                500+
                            </Statistic.Value>
                            <Statistic.Label>Contributors</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }

    renderFeatures() {
        const features = [
            {
                icon: "shield",
                title: "Secure & Transparent",
                description: "All transactions are recorded on the blockchain for complete transparency"
            },
            {
                icon: "handshake",
                title: "Community Driven",
                description: "Contributors vote on how funds are spent, ensuring accountability"
            },
            {
                icon: "globe",
                title: "Global Access",
                description: "Anyone, anywhere can contribute to campaigns using cryptocurrency"
            }
        ];

        return (
            <div className="features-section">
                <h2 className="features-title">Why Choose CrowdCoin?</h2>
                <Grid columns={3} stackable>
                    {features.map((feature, index) => (
                        <Grid.Column key={index}>
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <Icon name={feature.icon} size="huge" />
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </Grid.Column>
                    ))}
                </Grid>
            </div>
        );
    }
    renderCampaigns() 
    {
        const items = this.props.campaigns.map((address) => 
        {
            return {
                header: address,
                meta: "🔗 Campaign Address",
                description: (
                    <div style={{ marginTop: "12px" }}>
                        <div style={{ 
                            fontSize: "0.9rem", 
                            color: "#718096", 
                            marginBottom: "12px" 
                        }}>
                            Click to view campaign details, contribute, and track progress
                        </div>
                    <Link route={`/campaigns/${address}`}>
                        <a style={{
                            background: "linear-gradient(135deg, #667eea, #764ba2)",
                            color: "white",
                            padding: "8px 16px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontWeight: "500",
                            display: "inline-block",
                            transition: "all 0.3s ease",
                            boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)"
                        }}>
                            👁️ View Campaign
                        </a>
                    </Link>
                </div>
                ),
                fluid: true,
                style: { 
                    background: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)"
                }
            };
        });
        return <Card.Group items={items} />;
    }
    render() 
    {
        return (
        <Layout>
            <div className="hero-section">
                <div className="animated-bg">
                    <div className="bg-animation"></div>
                </div>
            <div className="page-header">
                    <h1 className="hero-title">🌟 Decentralized Crowdfunding</h1>
                <p className="page-subtitle">
                        Fund the future with blockchain technology. Transparent, secure, and community-driven.
                </p>
                <Link route="/campaigns/new">
                    <a>
                    <Button
                            content="🚀 Launch Your Project"
                        icon="add circle"
                        primary
                        size="large"
                        style={{
                            fontSize: "1.1rem",
                                padding: "16px 32px",
                                boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)"
                        }}
                    />
                    </a>
                </Link>
            </div>
            </div>

            {this.renderStats()}
            {this.renderFeatures()}
            
            <div className="campaigns-section">
                <h2 className="section-title">🎯 Active Campaigns</h2>
                <p className="section-subtitle">
                    Discover and support innovative projects from creators around the world
                </p>
            {this.renderCampaigns()}
            </div>
        </Layout>
        );
    }
}

export default CampaignIndex;
