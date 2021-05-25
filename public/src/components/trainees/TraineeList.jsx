/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const TraineeList = ({ trainee, searchValue }) => (
  <React.Fragment key={trainee.user_id}>
    <Card style={{ width: '18rem' }}>
      <a
        target="_blank"
        // href={artist.external_urls.spotify}
        rel="noopener noreferrer"
        className="card-image-link"
      >
        {!(trainee.photo_url.length === 0) ? (
          <Card.Img
            variant="top"
            src={trainee.photo_url}
            alt=""
          />
        ) : (
          <img src="https://images.squarespace-cdn.com/content/v1/56f0daad2eeb8185c4081072/1612054331700-DGU19S5YUCJCESFCP4QO/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/julian+rt+bomber.jpg?format=1000w" alt="" />
        )}
      </a>
      <Card.Body>
        <Card.Title>{`${trainee.first_name} ${trainee.last_name}`}</Card.Title>
        <Card.Text>
          {/* <strong>Gender:</strong>
          {` ${trainee.gender}\n`} */}
          <strong>Location:</strong>
          {` ${trainee.city}, ${trainee.state}`}
        </Card.Text>
        <Button variant="primary" onClick={()=> alert('Clicked')}> Learn more</Button>
      </Card.Body>
    </Card>
  </React.Fragment>
  // <div>
  //   {(trainee.first_name.toLowerCase().includes(searchValue)
  //   || trainee.last_name.toLowerCase().includes(searchValue)
  //   || trainee.city.toLowerCase().includes(searchValue)
  //   || !searchValue) ? (
  //     <div className="traineesList">
  //       <span>{trainee.first_name}</span>
  //       <span>{trainee.last_name}</span>
  //       <img className="traineePhoto" src={trainee.photo_url} alt="PhotoOfTrainee" />
  //       <span>{trainee.city}</span>
  //       <span>{trainee.email}</span>
  //       <span>{trainee.zip}</span>
  //       <span>{trainee.gender}</span>
  //       <span>{trainee.user_name}</span>
  //       <br />
  //     </div>
  //     ) : null}
  // </div>
);

export default TraineeList;
