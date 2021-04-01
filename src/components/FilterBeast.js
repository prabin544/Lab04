import React from 'react';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/Button';

class FilterBeast extends React.Component {
    onFormSubmit(event) {
        event.preventDefault();
        // console.log("Horn num is :", this.state.num);
        this.props.showFilteredPic(this.state.num)
    }
    onChangeNum(event) {
        this.setState({ num: event.target.value })
    }
    render() {
      return (
        <Form onSubmit={this.onFormSubmit.bind(this)} role="form">
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Search Beast by Number of Horns : </Form.Label>
            <Form.Control as="select" custom onChange={this.onChangeNum.bind(this)}>
              <option value="0">Zero</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">Hundred</option>
            </Form.Control>
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      );
    }
  }

  export default FilterBeast;
