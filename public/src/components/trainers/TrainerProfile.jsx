/* eslint-disable react/no-array-index-key */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../user-dashboard/Navbar';

const useStyles = makeStyles((theme) => ({
  clickableIcon: {
    color: 'black',
    '&:hover': {
      color: 'blue',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 250,
    },
  },
}));

const TrainerProfile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const style = useStyles();
  const profile = useSelector((state) => state.trainerProfileReducer.profile);
  const classes = useSelector((state) => state.classesReducer.classes);
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
                <EmailOutlinedIcon className={style.clickableIcon} />
                {profile.email}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="trainerClasses">
        {classes.map((course, index) => (
          <div key={index}>
            {course.teacher_id === profile.trainer_id ? (
              <Row className="trainerClassScroll">
                <Col className="classCard">
                  <Row className="classPhotoContainer">
                    <img className="classPhoto" src={course.photo_url} alt="classes" />
                  </Row>
                  <Row className="classInformation">
                    <div className="classNameContainer">
                      <p className="className">{course.class_name}</p>
                    </div>
                  </Row>
                  <Row className="textContainer">
                    <div className="text">
                      <p>{course.description}</p>
                    </div>
                  </Row>
                  <Button
                    className="detailButton"
                    onClick={() => {
                      dispatch({ type: 'session', session: course });
                      history.push('/class-info');
                    }}
                  >
                    Details
                  </Button>
                </Col>
              </Row>
            ) : null}
          </div>
        ))}
      </Container>
    </div>
  );
};
export default TrainerProfile;
