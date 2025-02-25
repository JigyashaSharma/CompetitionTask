﻿import React from 'react';
import ReactDOM from 'react-dom/client';
import Cookies from 'js-cookie';
import { Loader, Header, Button, Popup, Grid } from 'semantic-ui-react';
import { LoggedInNavigation } from '../Layout/LoggedInNavigation.jsx';
import TalentCard from './TalentCard.jsx';
import EmployerCard from './EmployerCard.jsx';
import SelectedJob from './SelectedJob.jsx';
import SelectedCompany from './SelectedCompany.jsx';
import { searchOptions, SearchOptions } from './Search/SearchOptions.jsx';
import { BodyWrapper, loaderData } from '../Layout/BodyWrapper.jsx';
import { searchTalentOptions, SearchTalent } from './Search/SearchTalent.jsx';

export default class TalentMatching extends React.Component {
    constructor(props) {
        super(props);

        //this.selectJob = this.selectJob.bind(this);
        //this.selectCompany = this.selectCompany.bind(this);
        //this.closeSelectedCompany = this.closeSelectedCompany.bind(this);
        //this.closeJoblisting = this.closeJoblisting.bind(this);
        //this.handleSelectAndUnselect = this.handleSelectAndUnselect.bind(this);
        //this.loadTalentList = this.loadTalentList.bind(this);
        //this.loadEmployerList = this.loadEmployerList.bind(this);
        //this.loadSuggestionList = this.loadSuggestionList.bind(this);
        //this.loadJobs = this.loadJobs.bind(this);
        //this.saveCompanyTalents = this.saveCompanyTalents.bind(this);
        //this.saveJobTalents = this.saveJobTalents.bind(this);
        //this.loadSelectedJob = this.loadSelectedJob.bind(this);
        //this.updateStateData = this.updateStateData.bind(this);
        //this.loadEmployerFilterList = this.loadEmployerFilterList.bind(this);
        //this.loadTalentFilterList = this.loadTalentFilterList.bind(this);
        //this.handleSearch = this.handleSearch.bind(this);
        //this.saveNotesAndComments = this.saveNotesAndComments.bind(this);

        //this.state = {
        //    searchOptions: searchOptions,
        //    searchTalentOptions: searchTalentOptions,
        //    searchError: "",
        //    selectedCompany: null,
        //    selectedCompanyJobs: [],
        //    employers: [],
        //    filteredEmployers: [],
        //    selectedJob: "",
        //    selectedJobData: null,
        //    selectedTalents: {},
        //    talents: {},
        //    filteredTalents: {},
        //    filteredTalentsLength: 0,
        //    searchMode: false,
        //    talentsLength: 0,
        //    loading: false,
        //    loaderData: loaderData,
        //    //cache for notes and comments so when user unselects the talent the notes/comments are not lost
        //    notesAndCommentsCache: {} 
        //}
        //this.init = this.init.bind(this);
    };

    //init() {
    //    let loaderData = this.state.loaderData;
    //    loaderData.allowedUsers.push("Recruiter");
    //    loaderData.isLoading = false;
    //    this.setState({ loaderData, })

    //    this.loadTalentList();
    //    this.loadEmployerList();
    //}

    //componentWillMount() {
    //    this.init();
    //}

    //componentDidMount() {
    //    $('.menu .item')
    //        .tab();
    //    $('.ui.dropdown').dropdown();
    //    $('.ui.sticky')
    //        .sticky({
    //            context: '#talentList'
    //        });
    //}

    //loadJobs(data) { // url: 'https://talentserviceslisting20250102160519.azurewebsites.net/listing/listing/getEmployerJobs',

    //loadSelectedJob(data) url: 'https://talentserviceslisting20250102160519.azurewebsites.net/listing/listing/getJobForTalentMatching',

    //loadTalentList()  url: 'https://talentservicesprofile20241231134001.azurewebsites.net/profile/profile/getTalentList',

    //loadTalentFilterList() //url: 'https://talentservicesprofile20241231134001.azurewebsites.net/profile/profile/getTalentListFilter',

    //loadEmployerFilterList() //url: 'https://talentservicesprofile20241231134001.azurewebsites.net/profile/profile/getEmployerListFilter',


    // loadEmployerList() // url: 'https://talentservicesprofile20241231134001.azurewebsites.net/profile/profile/getEmployerList',
    //loadSuggestionList   url: 'https://talentservicesprofile20241231134001.azurewebsites.net/profile/profile/getSuggestionList',

   // saveCompanyTalents()   url: 'https://talentservicesprofile20241231134001.azurewebsites.net/profile/profile/addTalentSuggestions',


    //saveJobTalents()    url: 'https://talentservicesprofile20241231134001.azurewebsites.net/profile/profile/addTalentSuggestions',
       

    
       
    
}