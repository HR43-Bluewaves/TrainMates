/* eslint-disable react/no-array-index-key */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
// import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import Navbar from '../user-dashboard/Navbar';
import TrainerClasses from './TrainerClasses';

const TrainerProfile = () => {
  const profile = useSelector((state) => state.trainerProfileReducer.profile);

  return (
    <div>
      <Container fluid className="userInformationPage">
        <Navbar />
        <Row className="trainerScroll">
          <Col className="trainerCard">
            <Row>
              <div className="photoContainer">
                <img className="trainerPhoto" src={profile.photo_url} alt="profile" />
              </div>
            </Row>
            <Row className="trainerInformation">
              <div className="trainerNameContainer">
                <p className="trainerName">
                  {profile.first_name}
                  {profile.last_name}
                </p>
              </div>
              <div className="trainerDetails">
                {/* <strong>Gender:</strong>
                {` ${profile.gender}\n`} */}
                <strong>Location:</strong>
                {` ${profile.city}, ${profile.state}`}
                <br />
                <EmailOutlinedIcon />
                {profile.email}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <TrainerClasses />
    </div>
  );
};
export default TrainerProfile;
