import React from 'react';
import { Button, Modal, Icon, Confirm } from 'semantic-ui-react';
export default class CloseJobConfirmation extends React.Component {
    constructor(props) {
        super(props);
    }

    handleCloseCancel = () => {
        console.log("handleCloseCancel CloseJobConfirmation");
        this.props.setCloseConfirm(false);
        this.props.setCloseJobId(null);
    };

    handleCloseConfirm = () => {
         console.log("handleCloseConfirm CloseJobConfirmation");
        this.props.handleClosejob(this.props.closeJobId);
        this.props.setCloseJobId(null);
        this.props.setCloseConfirm(false);
    };

    render() {
        { console.log("close modal", this.props.open) }
        const openValue = this.props.open;
        //const openValue = true;
        return (
            <div>
                <Confirm
                    open={openValue}
                    header='Close the job'
                    content='Are you sure you want to proceed?'
                    onCancel={this.handleCloseCancel}
                    onConfirm={this.handleCloseConfirm}
                />
                {console.log("/outside Modal")}
            </div>
        );
    };
};