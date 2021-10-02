import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAllCustomer } from '../../actions/customer/customerAction'
 
function CustomerFrom({ customersData, fetchCustomer }) {
  debugger
    useEffect(() => {
        fetchCustomer()
      }, [])
      
      return customersData.customers.loading ? (
        <h2>Loading</h2>
      ) : customersData.customers.error ? (
        <h2>{customersData.customers.error}</h2>
      ) : (
        <div>
          <h2>Users List</h2>
          <div>
            {customersData.customers &&
              customersData.customers &&
              customersData.customers.map(user => <p>{user.name}</p>)}
          </div>
        </div>
      )
}


const mapStateToProps = state => {
    debugger
    return {
      customersData: state.customers
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchCustomer: () => dispatch(fetchAllCustomer())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomerFrom)
  

