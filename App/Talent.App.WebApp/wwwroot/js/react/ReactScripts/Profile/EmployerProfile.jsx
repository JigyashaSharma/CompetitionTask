﻿import React from 'react';
import Cookies from 'js-cookie';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { FormErrors } from '../Form/FormErrors.jsx';
import FormItemWrapper from '../Form/FormItemWrapper.jsx';
import { Name } from './Name.jsx';
import { Description } from './Description.jsx';
import { Toggle } from './Toggle.jsx';
import AuthenticatingBanner from '../Layout/Banner/AuthenticatingBanner.jsx';
import { LoggedInNavigation } from '../Layout/LoggedInNavigation.jsx';
import { IndividualDetailSection, CompanyDetailSection } from './ContactDetail.jsx';
import { BodyWrapper, loaderData } from '../Layout/BodyWrapper.jsx';

export default class EmployeeProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employerData: {
                skills: []
            },
            formErrors: { firstName: '', lastName: '', primaryPhone: '', primaryEmail: '', companyName: '', companyEmail: '', companyPhone: ''},
            nameValid: false,
            emailValid: false,
            formValid: true,
            loaderData: loaderData
        };

        this.loadData = this.loadData.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.validateField = this.validateField.bind(this);
        this.errorClass = this.errorClass.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
        this.updateForComponentId = this.updateForComponentId.bind(this);
        this.updateWithoutSave = this.updateWithoutSave.bind(this);
        this.updateAndSaveData = this.updateAndSaveData.bind(this);
        this.saveData = this.saveData.bind(this);
        this.init = this.init.bind(this);
    };

    init() {
        let loaderData = this.state.loaderData;
        loaderData.allowedUsers.push("Employer");
        loaderData.allowedUsers.push("Recruiter");
        loaderData.isLoading = false;
        this.setState({ loaderData, })
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        var cookies = Cookies.get('talentAuthToken');
        const apiUrl = process.env.REACT_APP_PROFILE_API_URL;
        const link = `${apiUrl}/profile/profile/getEmployerProfile`;
        $.ajax({
            url: link,
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': 'application/json'
            },
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res) {
                let employerData = null;
                if (res.employer) {
                    employerData = res.employer
                    //console.log("employerData", employerData)
                }
                this.updateWithoutSave(employerData)
            }.bind(this),
            error: function (res) {
                console.log(res.status)
            }
        }) 
        this.init()
    }

    updateForComponentId(componentId, newValues) {
        let data = {};
        data[componentId] = newValues;
        this.updateAndSaveData(data)
    }

    //updates component's state without saving data
    updateWithoutSave(newData) {
        let newSD = Object.assign({}, this.state.employerData, newData)
        this.setState({
            employerData: newSD
        })
    }

    //updates component's state and saves data
    updateAndSaveData(newData) {
        let newSD = Object.assign({}, this.state.employerData, newData)
        this.setState({
            employerData: newSD
        }, this.saveData)
    }

    handleUserInput(event) {

        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        if (event.target.type === 'checkbox') {
            this.setState({
                [name]: value
            })
        }
        else {
            this.setState({
                [name]: value
            }, () => { this.validateField(name, value) })
        }
    };

    validateField(fieldName, value) {

        let fieldValidationErrors = this.state.formErrors;
        let valid;
        //let emailValid = this.state.emailValid;
        //let nameValid = this.state.nameValid;
        var formValid = this.state.formValid;
        switch (fieldName) {
            case 'primaryEmail':
                valid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.primaryEmail = valid ? '' : ' is invalid';
                formValid = valid != null;
                break;
            case 'firstName':
                valid = value.match(/^\w+$/);
                fieldValidationErrors.firstName = valid ? '' : ' is invalid';
                formValid = valid != null;
                break;
            case 'lastName':
                valid = value.match(/^\w+$/);
                fieldValidationErrors.lastName = valid ? '' : ' is invalid';
                formValid = valid != null;
                break;
            case 'primaryPhone':
                valid = value.match(/^\d+$/);
                //valid = /^\d+$/.test(value);
                fieldValidationErrors.primaryPhone = valid ? '' : ' is invalid';
                formValid = valid != null;
                break;
            case 'companyName':
                valid = value.match(/^\w+$/);
                fieldValidationErrors.companyName = valid ? '' : ' is invalid';
                formValid = valid != null;
                break;
            case 'companyEmail':
                valid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.companyEmail = valid ? '' : ' is invalid';
                formValid = valid != null;
                break;
            case 'companyPhone':
                valid = value.match(/^\d+$/);
                fieldValidationErrors.companyPhone = valid ? '' : ' is invalid';
                formValid = valid != null;
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            //emailValid: emailValid,
            //nameValid: nameValid,
            formValid: formValid
        }, this.validateForm);
    }

    errorClass(error) {
        return (error.length === 0 ? false : true);
    }

    isFormValid() {
        return this.state.formValid == false ? 'error' : '';
    }

    saveData() {

        var cookies = Cookies.get('talentAuthToken');

        const apiUrl = process.env.REACT_APP_PROFILE_API_URL;
        const link = `${apiUrl}/profile/profile/saveEmployerProfile`;
        $.ajax({
            url: link,
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': 'application/json'
            },
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(this.state.employerData),
            success: function (res) {
                if (res.success) {
                    TalentUtil.notification.show("Employer details saved successfully", "success", null, null);
                }
                else {
                    TalentUtil.notification.show("Error while saving Employer details", "error", null, null);
                }
            }.bind(this),
            error: function (res) {
                TalentUtil.notification.show("Error while saving Employer details", "error", null, null);
            }.bind(this)
        })
    }

    render() {
        return (
            <BodyWrapper loaderData={this.state.loaderData} reload={this.loadData}>
                <section className="page-body">
                    <div className="ui container">
                        <div className="ui container">
                            <div className="profile">
                                <form className="ui form">
                                    <div className="ui grid">
                                        <FormItemWrapper
                                            title='Primary Contact Details'
                                            tooltip='Enter your primary contact details'
                                        >
                                            <IndividualDetailSection
                                                controlFunc={this.updateForComponentId}
                                                details={this.state.employerData.primaryContact}
                                                componentId='primaryContact'
                                                validateFunc={this.validateField}
                                                formValid={this.state.formValid}
                                                formErrors={this.state.formErrors}
                                            />
                                        </FormItemWrapper>

                                        <FormItemWrapper
                                            title='Company Contact Details'
                                            tooltip='Enter your company contact details'
                                        >
                                            <CompanyDetailSection
                                                controlFunc={this.updateForComponentId}
                                                details={this.state.employerData.companyContact}
                                                componentId='companyContact'
                                                validateFunc={this.validateField}
                                                formValid={this.state.formValid}
                                                formErrors={this.state.formErrors}
                                            />
                                        </FormItemWrapper>
                                     
                                        <FormItemWrapper
                                            title='Display profile'
                                            tooltip='Toggle company profile visibility in the employer feed.'
                                            hideSegment={true}
                                        >
                                            <Toggle
                                                updateStateData={this.updateWithoutSave}
                                                displayProfile={this.state.employerData.displayProfile}
                                            />
                                        </FormItemWrapper>
                                        <div className="sixteen wide column">
                                            <div>
                                                <input type="button" className="ui button right floated" onClick={() => window.history.go(-1)} value="Cancel"></input>
                                                <input type="button" className="ui teal button right floated" onClick={this.saveData} value="Save"></input>
                                            </div>
                                        </div >
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </BodyWrapper>
        )
    }
}
