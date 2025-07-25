import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

class CampaignNew extends Component 
{
    state = 
    {
        minimumContribution: "",
        errorMessage: "",
        loading: false,
    };

    onSubmit = async (event) => 
    {
        event.preventDefault();
        this.setState({ loading: true, errorMessage: "" });

        try 
        {
            const accounts = await web3.eth.getAccounts();
            await factory.methods
                .createCampaign(this.state.minimumContribution)
                .send(
                {
                    from: accounts[0],
                });

            Router.pushRoute("/");
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
            <div className="page-header">
                <h3>🚀 Create New Campaign</h3>
                <p className="page-subtitle">
                    Launch your project and start raising funds on the blockchain
                </p>
            </div>
            
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
                <label>💎 Minimum Contribution</label>
                <Input
                label="wei"
                labelPosition="right"
                value={this.state.minimumContribution}
                onChange={(event) =>
                    this.setState({ minimumContribution: event.target.value })
                }
                placeholder="Enter minimum contribution in wei"
                />
                <div style={{ 
                    fontSize: "0.9rem", 
                    color: "#718096", 
                    marginTop: "8px" 
                }}>
                    This is the minimum amount contributors must send to participate
                </div>
            </Form.Field>
            <Message error header="Oops!" content={this.state.errorMessage} />
            <Button 
                loading={this.state.loading} 
                primary
                size="large"
                style={{
                    fontSize: "1.1rem",
                    padding: "14px 28px",
                    marginTop: "20px"
                }}
            >
                🎯 Create Campaign
            </Button>
            </Form>
        </Layout>
        );
    }
}

export default CampaignNew;
