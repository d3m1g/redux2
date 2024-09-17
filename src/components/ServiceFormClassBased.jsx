import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeServiceField, saveService } from '../actions/actionCreators';

class ServiceFormClassBased extends Component {
 handleChange = evt => {
  const { name, value } = evt.target;
  this.props.onChange(name, value);
 }

 handleSubmit = evt => {
  const { item } = this.props;
  evt.preventDefault();
  this.props.onSave(item.id, item.name, item.price);
 }

 render() {
  const { item } = this.props;

  return (
   <form onSubmit={this.handleSubmit}>
    <input name='name' onChange={this.handleChange} value={item.name} />
    <input name='price' onChange={this.handleChange} value={item.price} />
    <button type='submit'>Save</button>
   </form>
  );
 }
}


ServiceFormClassBased.propTypes = {
 item: PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
 }).isRequired,
 onSave: PropTypes.func.isRequired,
 onChange: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
 item: state.serviceForm,
});

const mapDispatchToProps = (dispatch) => {
 return {
  onChange: (name, value) => dispatch(changeServiceField(name, value)),
  onSave: (id, name, price) => dispatch(saveService(id, name, price)),
 }
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceFormClassBased);