import React from 'react'
import Button from '../forms/Button'
import Item from './Item';
import './styles.scss';

const Checkout = () => {
  return (
    <div className="checkout">
        <h1>
            Checkout
        </h1>
        <div className="cart">
            <table cellPadding="0" cellSpacing="0">
                <tbody>
                    <tr>
                        <td>
                            <table className="checkoutHeader"  cellPadding="10" cellSpacing="0">
                                <tbody>
                                    <tr>
                                        <th>
                                            Product
                                        </th>
                                        <th>
                                            Description
                                        </th>
                                        <th>
                                            Quantity
                                        </th>
                                        <th>
                                            Price
                                        </th>
                                        <th>
                                            Remove
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table cellPadding="0" cellSpacing="0">
                                <tbody>
                                    <tr>
                                        <td>
                                         <Item/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table cellPadding="0" cellSpacing="0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table cellPadding="10" cellSpacing="0">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <h3>
                                                                Total:£ 123
                                                            </h3>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table cellPadding="10" cellSpacing="0">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                        <Button>
                                                            Continue Shopping
                                                        </Button>
                                                        </td>
                                                        <td>
                                                         <Button>
                                                             Checkout
                                                          </Button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Checkout