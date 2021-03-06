import React from "react";

import Profile from './Profile'
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {


    componentDidMount() {

        let userId = this.props.match.params.userId;
        // let location = this.props.match.params.location
        if (!userId){
            userId = 2
        }
        axios.get(`https://rsocial-network.samuraijs.com/api/1.0/profile/r` + userId )
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);