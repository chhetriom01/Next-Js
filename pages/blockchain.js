import React, { Component } from "react";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import { Button, Table } from "semantic-ui-react";

class BlockChain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { dataList } = this.props.data;
    console.log(dataList);

    return (
      <Layout>
        <div>
          <h1>BlockChain</h1>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>S.N</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Organization</Table.HeaderCell>
                <Table.HeaderCell>Content</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {dataList &&
                dataList.length > 0 &&
                dataList.map((element, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>{element}</Table.Cell>
                    <Table.Cell>{element}</Table.Cell>
                    <Table.Cell>{element}</Table.Cell>
                    <Table.Cell>
                      {/* <Link to="/admin/testimonial/listtestimonial/testimonialedit/${id}"> */}
                      <Button
                        basic
                        color="green"
                        onClick={() => this.onEdit(element._id)}
                      >
                        Edit
                      </Button>
                      {/* </Link> */}

                      <Button
                        basic
                        color="red"
                        onClick={() => this.onDelete(element._id)}
                      >
                        Delete
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
            
          </Table>
        </div>
      </Layout>
    );
  }
}

export default BlockChain;

BlockChain.getInitialProps = async function() {
  const res = await fetch("http://localhost:4000/api/blog");
  const data = await res.json();
  return data;
};
