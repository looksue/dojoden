class studentDirTR extends React.Component {
    render() {
        <tr>
            <td>{this.props.firstName + this.props.secondName}</td>
            <td>{this.props.belt}</td>
            <td>
                {" "}
                <a href="#" className="button btnStudEdit">
                    Edit
                </a>
            </td>
            <td>
                {" "}
                <a href="#" className="button alert btnStudDelete">
                    Delete
                </a>{" "}
            </td>
            <td>
                <div className="switch">
                    <input
                        className="switch-input"
                        id="activeStudent"
                        type="checkbox"
                        name="activeStudent"
                    />
                    <label
                        className="switch-paddle"
                        htmlFor="activeStudent"
                    />
                    <span className="show-for-sr">Active Student</span>
                </div>
            </td>
            <td>
                {" "}
                <a href="#" className="button success btnStudInvoice">
                    Invoice
                </a>{" "}
            </td>
        </tr>
    }
};
