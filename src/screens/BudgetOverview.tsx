//LEARN Use Interface Props in Functional Components Using TypeScript with React
/* Use Case
Consider a situation where your goal is to display a budget overview table on a web page. For each budget, a row in the table should be rendered to display each budget category, including the amount budgeted, amount spent, and amount remaining in a category. There could be one or more budgets to display in the table. You will create a function component to achieve this.
*/

//Add a New Component
//Create a new component inside your src directory with the name BudgetOverview.tsx and add this code.

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BudgetOverview = () => {
  <div className='Budget-Overview'>
  <table>
    <tbody>
      <tr className='Table-Header'>
        <td>
          <h4>Category</h4>
        </td>
        <td>
          <h4>Budgeted</h4>
        </td>
        <td>
          <h4>Spent</h4>
        </td>
        <td>
          <h4>Remaining</h4>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
}

export default BudgetOverview

const styles = StyleSheet.create({})
