import React from 'react'

const Item = () => {
  return (
    <table className="cartItem" cellSpacing="0" cellPadding="10">
        <tbody>
            <tr>
                <td>
                img
                </td>
                <td>
                    product name
                </td>
                <td>
                    <span  className="cartBtn">
                        {'<'}
                    </span>
                    <span>
                        Quantity
                    </span>
                    <span  className="cartBtn">
                        {'>'}
                    </span>
                </td>
                <td>
                £ productPrice
                </td>
                <td align="center">
                    <span className="cartBtn remove">
                        X
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
  )
}

export default Item