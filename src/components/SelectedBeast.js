import React from 'react';
import Card from 'react-bootstrap/Card';
import { Modal, Button } from "react-bootstrap";

class SelectedBeast extends React.Component {
    render() {
        console.log(this.props)
        return (
          <Modal show={this.props.displayModal} onHide={this.props.hideModal}>
            <Modal.Dialog>
              <Modal.Header />
                <Modal.Body>
                <Card style={{ width: '25rem'}}>
                  <Card.Img src={this.props.img} />
                </Card>
              </Modal.Body>
            </Modal.Dialog>
            <Button variant="primary" onClick={this.props.hideModal}>Close</Button>
          </Modal>
        );
    }
}

export default SelectedBeast;