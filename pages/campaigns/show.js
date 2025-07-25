import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";

class CampaignShow extends Component 
{
    static async getInitialProps
    (
        props
    ) 
    {
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();

        return {
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4],
        };
    }

    renderCards() 
    {
        const 
        {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount,
        } = this.props;

        const items = [
        {
            header: manager,
            meta: "Address of Manager",
            description:
            "The manager created this campaign and can create requests to withdraw money",
            style: { overflowWrap: "break-word" },
        },
        {
            header: minimumContribution,
            meta: "Minimum Contribution (wei)",
            description:
            "You must contribute at least this much wei to become an approver",
        },
        {
            header: requestsCount,
            meta: "Number of Requests",
            description:
            "A request tries to withdraw money from the contract. Requests must be approved by approvers",
        },
        {
            header: approversCount,
            meta: "Number of Approvers",
            description:
            "Number of people who have already donated to this campaign",
        },
        {
            header: web3.utils.fromWei(balance, "ether"),
            meta: "Campaign Balance (ether)",
            description:
            "The balance is how much money this campaign has left to spend.",
        },
        ];

        return <Card.Group items={items} />;
    }

    render() 
    {
        return (
        <Layout>
            <div className="page-header">
                <h3>💼 Campaign Details</h3>
                <p className="page-subtitle">
                    Review campaign information and contribute to support this project
                </p>
            </div>
            
            <Grid>
            <Grid.Row>
                <Grid.Column width={10}>
                    <div className="campaign-stats">
                        {this.renderCards()}
                    </div>
                </Grid.Column>
                <Grid.Column width={6}>
                    <div className="contribute-form">
                        <h4 style={{ 
                            color: "#4a5568", 
                            marginBottom: "20px",
                            fontSize: "1.3rem"
                        }}>
                            💰 Contribute to Campaign
                        </h4>
                        <ContributeForm address={this.props.address} />
                    </div>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <Link route={`/campaigns/${this.props.address}/requests`}>
                            <a>
                            <Button 
                                primary 
                                size="large"
                                style={{
                                    fontSize: "1.1rem",
                                    padding: "14px 28px"
                                }}
                            >
                                📋 View Spending Requests
                            </Button>
                            </a>
                        </Link>
                    </div>
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </Layout>
        );
    }
}

export default CampaignShow;
