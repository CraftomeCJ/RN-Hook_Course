//Learn Snippets for Productivity
//note JavaScript Imports
//imp <== Import a default export
//import moduleName from 'module';

//imd <== Import a named import
//import { destructureModule } from 'module';

//imrc <== Import React and Component
//import React, { Component } from 'react'

//imr <== Import React
// import React from 'react'



//Learn JavaScript Iterations:

//fre ==> forEach
//first.forEach(second => {third})

//fof ==> for of
//for(let first of second) {third}

//fin ==> for in
//for(let first in second) {third}

//Learn JavaScript Functions:

//Anonymous Functions ==> anfn
//(first) => { second }

//Named Functions ==> nfn
//const functionName = (params) => { return params }

//Learn React Lifecycle Methods:

//ComponentDidMount ==> cdm
//componentDidMount = () => { first }


//ComponentDidUpdate ==> cdup
//componentDidUpdate = (prevProps, prevState) => { first }

//ComponentWillUnmount ==> cwum
//componentWillUnmount = () => { first }

//Learn React Components:

//React Class Component ==> rcc
// import React, { Component } from 'react'

// export default class FileName extends Component {
//   render() {
//     return (
//       <div>LearnSnippets</div>
//     )
//   }
// }


// React Class Component with Prop Types ==> rcep
// import PropTypes from 'prop-types'
// import React, { Component } from 'react'

// export class FileNAme extends Component {
//   static propTypes = {}

//   render() {
//     return (
//       <div>LearnSnippets</div>
//     )
//   }
// }

// export default FileName


//React Functional Component ==> rfc
// import React from 'react'

// export default function $1() {
//   return (
//     <div>$0</div0
//   )
// }


//rnfes <== React Native Boilerplate [most frequently use]
import { StyleSheet, Text, View } from 'react-native'

//imr <== Import React
import React from 'react'

const LearnSnippets = () => {  return (
  <View>
    <Text>LearnSnippets</Text>
  </View>
)
}

export default LearnSnippets

const styles = StyleSheet.create({})
