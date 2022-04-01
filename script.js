class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="container">
        <h1 class="text-center my-4"></h1>
        <div class="row">
          <div class="col-12">
            <table class="table table-responsive">
              <thead>
                <th scope="col">Name</th>
                <th scope="col">Shares Owned</th>
                <th scope="col">Cost per share ($)</th>
                <th scope="col">Market Price ($)</th>
                <th scope="col">Market Value ($)</th>
                <th scope="col">Unrealized Gain/Loss ($)</th>
                <th scope="col"></th>
              </thead>
            </table>
            <tbody></tbody>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Portfolio />, document.getElementById("root"));
