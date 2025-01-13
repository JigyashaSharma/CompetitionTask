import * as Cookies from 'js-cookie';
import React from 'react';
import { Icon, Card, Button, Pagination, Container, Divider, Label } from 'semantic-ui-react';
import styles from "./JobStyle.module.css";
import moment from 'moment';
import CloseJobConfirmation from './CloseJobConfirmation.jsx';

export default class DisplayJobs extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            closeConfirm: false,
            closeJobId: null
        }
    }

    checkExpiration = (date) => {
        if (date.isBefore(moment(), 'day')) {
            return 'Expired'; // Display expired text
        }
        else {
            return null;
        }
    };

    handleCopy = (jobId) => {
        this.props.handleCopyClick(jobId);
    };

    handleEdit = (jobId) => {
        this.props.handleEditClick(jobId);
    };

    handleClose = (jobId) => {
        this.setCloseConfirm(true);
        this.setCloseJobId(jobId);
    };

    setCloseJobId = (id) => {
        this.setState({
            closeJobId: id
        })
    };

    setCloseConfirm = (confirm) => {
        this.setState({
            closeConfirm: confirm
        });
    };

    render() {
        const pagedJobs = this.props.paginatedJobs;

        if (!Array.isArray(pagedJobs)) {
            return;
        }
        console.log("styles check: ",styles);  
        return (
            <Container>
                <Card.Group>
                    {pagedJobs.map((job) => (
                        <Card key={job.id} className={styles.cardMargin} >
                            <Card.Content className="eight wide computer eight wide tablet sixteen wide mobile column">
                                <Card.Header>{job.title}</Card.Header>
                                {/* ... your card content ... */}
                                <a class="ui black right ribbon label">
                                    <Icon name='user' size='small' />
                                    {job.noOfSuggestions}
                                </a>
                                <Card.Meta>{job.location.city}, &nbsp; {job.location.country}</Card.Meta>
                                <Card.Description>{job.summary}</Card.Description>
                            </Card.Content>

                            {/* Line at the bottom of the card */}
                            <div className="ui divider"></div>
                            <div className="ui grid">
                                <div className={`three wide column ${styles.expireJobMargin}`}>
                                    {/* "Expired" label on the left side */}
                                    {this.checkExpiration(job.expiryDate) && (
                                        <Label color="red" size="tiny">
                                            Expired
                                        </Label>
                                    )}
                                </div>

                                <div className="twelve wide right aligned column">
                                    {/* Buttons on the right side */}
                                    <Button.Group divided className={styles.buttonGroup}>
                                        {!job.status && (<Button className={`basic outline blue ${styles.customTinyButtonStyle}`}
                                            onClick={() => this.handleClose(job.id)} >
                                            <Icon name="close" /> Close
                                        </Button>
                                        )}
                                        <Button className={`basic outline blue ${styles.customTinyButtonStyle}`}
                                            onClick={() => this.handleEdit(job.id)} >
                                            <Icon name="edit" /> Edit
                                        </Button>
                                        <Button className={`basic outline blue ${styles.customTinyButtonStyle} ${styles.buttonRightMargin}`}
                                            onClick={() => this.handleCopy(job.id)} >
                                            <Icon name="copy" />  Copy
                                        </Button>
                                    </Button.Group>
                                </div>
                            </div>
                        </Card>
                    ))}
                </Card.Group>
                <div>
                    <CloseJobConfirmation
                        open={this.state.closeConfirm}
                        handleClosejob={this.props.handleClosejob}
                        setCloseConfirm={this.setCloseConfirm} closeJobId={this.state.closeJobId}
                        setCloseJobId={this.setCloseJobId}
                    />
                </div>
            </Container>
        );
    }
};