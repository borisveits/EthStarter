import React, { Component } from "react";
import RequestRow from "../../../components/RequestRow";
import { Button, Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import Layout from "../../../components/Layout";
import Campaign from "../../../ethereum/campaign";

class RequestIndex extends Component 
{
    static async getInitialProps
    (
        props
    )
    {
        const { address } = props.query;
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call();
        const approversCount = await campaign.methods.approversCount().call();
        
        const requests = await Promise.all(
            Array(parseInt(requestCount))
            .fill()
            .map((element, index) => 
            {
                return campaign.methods.requests(index).call();
            })
        );

        return { address, requests, requestCount, approversCount };
    }

    renderRows()
    {
        return this.props.requests.map((request, index) =>
        {
            return <RequestRow
                key={index}
                id={index}
                request={request}
                address={this.props.address}
                approversCount={this.props.approversCount}
            />;
        });
    }

    render() 
    {
        const { Header, Row, HeaderCell, Body } = Table;

        return (
            <Layout>
                <div className="page-header">
                    <h3>📋 Spending Requests</h3>
                    <p className="page-subtitle">
                        Review and approve how campaign funds will be spent
                    </p>
                    <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary
                                size="large"
                                style={{ 
                                    marginBottom: 20,
                                    fontSize: "1.1rem",
                                    padding: "14px 28px"
                                }}>
                            ➕ Add New Request
                        </Button>
                    </a>
                    </Link>
                </div>
                
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>🔢 ID</HeaderCell>
                            <HeaderCell>📝 Description</HeaderCell>
                            <HeaderCell>💰 Amount</HeaderCell>
                            <HeaderCell>👤 Recipient</HeaderCell>
                            <HeaderCell>✅ Approvals</HeaderCell>
                            <HeaderCell>👍 Approve</HeaderCell>
                            <HeaderCell>🎯 Finalize</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRows()}
                    </Body>
                </Table>

                <div style={{ 
                    textAlign: "center", 
                    marginTop: "20px",
                    padding: "16px",
                    background: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "12px",
                    color: "#4a5568",
                    fontWeight: "500"
                }}>
                    📊 Found {this.props.requestCount} spending requests
                </div>
            </Layout>
        );
    }
}

export default RequestIndex;
