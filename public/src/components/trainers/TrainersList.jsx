/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-fragments */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

const TrainerList = ({ trainer, searchValue, classes }) => {
  const [show, setShow] = useState(false);
  const [showClass, setShowClass] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseClass = () => setShowClass(false);
  const handleShowClass = () => setShowClass(true);
  // eslint-disable-next-line no-console

  return (
    <div>
      <div className="trainers-list">
        <React.Fragment>
          {((trainer.first_name.toLowerCase().includes(searchValue)
          || trainer.last_name.toLowerCase().includes(searchValue)
          || trainer.city.toLowerCase().includes(searchValue))
          ) ? (
            <Card style={{ width: '18rem' }}>
              <a
                target="_blank"
                // href={artist.external_urls.spotify}
                rel="noopener noreferrer"
                className="card-image-link"
              >
                {!(trainer.photo_url.length === 0) ? (
                  <Card.Img
                    variant="top"
                    src={trainer.photo_url}
                    alt=""
                  />
                ) : (
                  <img src="https://images.squarespace-cdn.com/content/v1/56f0daad2eeb8185c4081072/1612054331700-DGU19S5YUCJCESFCP4QO/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/julian+rt+bomber.jpg?format=1000w" alt="" />
                )}
              </a>
              <Card.Body>
                <Card.Title>{`${trainer.first_name} ${trainer.last_name}`}</Card.Title>
                <Card.Text>
                  {/* <strong>Gender:</strong>
                  {` ${trainer.gender}\n`} */}
                  <strong>Location:</strong>
                  {` ${trainer.city}, ${trainer.state}`}
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                  Learn More
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      {trainer.first_name}
                      {trainer.last_name}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {trainer.email}
                    <br />
                    {trainer.state}
                    <br />
                    {trainer.zip}
                    <br />
                    {trainer.gender}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
            </Card>
            ) : null}
        </React.Fragment>
      </div>
      <div className="trainers-class-photos">
        <React.Fragment>
          {classes.class_name.toLowerCase().includes(searchValue) ? (
            <Card style={{ width: '18rem' }}>
              <a
                target="_blank"
                // href={artist.external_urls.spotify}
                rel="noopener noreferrer"
                className="card-image-link"
              >
                {!(classes.photo_url.length === 0) ? (
                  <Card.Img
                    className="trainerPhoto"
                    variant="top"
                    src={classes.photo_url}
                    alt=""
                  />
                ) : (
                  <img src="https://images.squarespace-cdn.com/content/v1/56f0daad2eeb8185c4081072/1612054331700-DGU19S5YUCJCESFCP4QO/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/julian+rt+bomber.jpg?format=1000w" alt="" />
                )}
              </a>
              <Card.Body>
                <Card.Title>{`${classes.class_name}`}</Card.Title>
                <Button variant="primary" onClick={handleShowClass}>
                  Learn More
                </Button>
                <Modal show={showClass} onHide={handleCloseClass}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      {classes.class_name}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {classes.description}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseClass}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
            </Card>
          ) : null}
        </React.Fragment>
      </div>
    </div>
  );
};

export default TrainerList;
