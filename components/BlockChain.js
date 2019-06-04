class BlockChain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props, "<<<<<<<<<BlockChain>>>>>>");

    return (
      <div>
        <h1>BlockChain</h1>
      </div>
    );
  }
}

export default BlockChain;
