import React, { Component } from "react";
import { Form, Button, Message, Input } from "semantic-ui-react";
import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";
import { Link, Router } from "../../../routes";
import Layout from "../../../components/Layout";

class RequestNew extends Component 
{
    state = {
        value: "",
        description: "",
        recipient: "",
        errorMessage: "",
        loading: false
    };

    static async getInitialProps
    (
        props
    ) 
    {
        const { address } = props.query;

        return { address };
    }

    onSubmit = async (event) => 
    {
        event.preventDefault();

        const campaign = Campaign(this.props.address);
        const { description, value, recipient } = this.state;

        this.setState({ loading: true, errorMessage: "" });

        try 
        {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods
                .createRequest(description, 
                               web3.utils.toWei(value, "ether"), 
                               recipient)
                .send({ from: accounts[0] });

            Router.pushRoute(`/campaigns/${this.props.address}/requests`);
        } 
        catch (err) 
        {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false });
    };

    render() 
    {
        return (
            <Layout>
                <Link route={`/campaigns/${this.props.address}/requests`}>
                    <a style={{
                        color: "#667eea",
                        textDecoration: "none",
                        fontWeight: "500",
                        fontSize: "1rem",
                        marginBottom: "20px",
                        display: "inline-block"
                    }}>
                        ← Back to Requests
                    </a>
                </Link>
                
                <div className="page-header">
                    <h3>📝 Create Spending Request</h3>
                    <p className="page-subtitle">
                        Request approval to spend campaign funds for project expenses
                    </p>
                </div>
                
                <Form onSubmit={this.onSubmit} 
                      error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>📝 Description</label>
                        <Input
                        value={this.state.description}
                        onChange={(event) =>
                            this.setState({ description: event.target.value })
                        }
                        placeholder="Describe what this request is for"
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>💰 Value in Ether</label>
                        <Input
                        value={this.state.value}
                        onChange={(event) => 
                            this.setState({ value: event.target.value })}
                        placeholder="Amount in ETH"
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>👤 Recipient Address</label>
                        <Input
                        value={this.state.recipient}
                        onChange={(event) =>
                            this.setState({ recipient: event.target.value })
                        }
                        placeholder="0x..."
                        />
                        <div style={{ 
                            fontSize: "0.9rem", 
                            color: "#718096", 
                            marginTop: "8px" 
                        }}>
                            The Ethereum address that will receive the funds
                        </div>
                    </Form.Field>
                    <Message error header="Oops!" 
                                   content={this.state.errorMessage} />
                    <Button 
                        primary 
                        loading={this.state.loading}
                        size="large"
                        style={{
                            fontSize: "1.1rem",
                            padding: "14px 28px",
                            marginTop: "20px"
                        }}
                    >
                        🎯 Create Request
                    </Button>
                </Form>
            </Layout>
        );
    }
}

export default RequestNew;
