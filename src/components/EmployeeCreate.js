import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { employeeDataSave, resetForm } from '../Actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  componentWillMount() {
    this.props.resetForm();
  }

  onButtonPress() {
      const { name, phone, shift } = this.props;

      this.props.employeeDataSave({ name, phone, shift });
  }

  render() {
    return (
      <View>
        <Card>
          <EmployeeForm {...this.props} />
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Create
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeDataSave, resetForm })(EmployeeCreate);
