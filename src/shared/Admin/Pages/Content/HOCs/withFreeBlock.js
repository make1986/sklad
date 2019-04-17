import React from "react";

const withFreeBlock = Component => {
  class WithFreeBlock extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        defaultHeight: "10px"
      };
    }
    componentDidMount() {
      this.setState({ defaultHeight: `${this.block.clientWidth / 2}px` });
    }

    render() {
      const { defaultHeight } = this.state;
      return (
        <React.Fragment>
          <div ref={b => (this.block = b)}>
            <Component {...this.props} defaultHeight={defaultHeight} />
          </div>
        </React.Fragment>
      );
    }
  }
  WithFreeBlock.displayName = `WithFreeBlock(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithFreeBlock;
};

export default withFreeBlock;
