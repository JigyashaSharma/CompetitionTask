import React from 'react';
import { Button, Modal, Icon, Confirm } from 'semantic-ui-react';
export default class CloseJobConfirmation extends React.Component {
    constructor(props) {
        super(props);
    }

    handleCloseCancel = () => {
        this.props.setCloseConfirm(false);
        this.props.setCloseJobId(null);
    };

    handleCloseConfirm = () => {
        this.props.handleClosejob(this.props.closeJobId);
        this.props.setCloseJobId(null);
        this.props.setCloseConfirm(false);
    };

    render() {
        const openValue = this.props.open;
        return (
            <div>
                <Confirm
                    open={openValue}
                    header='Close the job'
                    content='Are you sure you want to proceed?'
                    onCancel={this.handleCloseCancel}
                    onConfirm={this.handleCloseConfirm}
                />
            </div>
        );
    };
};