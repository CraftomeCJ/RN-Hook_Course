//implement a responsive table component
import React, { Component } from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';


//add <any, any> types to solve ts(2339) error
export default class TableComponent extends Component<any, any> {
  [x: string]: any;
  constructor({props}: {props: any}) {
    super(props);
    this.state = {
      tbHead: ['Header', 'Header'],
      widths: [175, 175]
    }
  }

  render() {
    const state = this.state;
    const data = [];
    for (let i = 0; i < 50; i += 1) {
      const totalRows = [];
      for (let j = 0; j < 9; j += 1) {
        totalRows.push(`${i}${j}`);
      }
      data.push(totalRows);
    }

    return (
      <View
      style={styles.container}
      >
        <ScrollView horizontal={true}>
          <View>
            <Table>
              <Row
              data={state.tbHead}
              widths={state.widths} //bug
              style={styles.headerWrapper}
              textStyle={styles.text}/>
            </Table>
            <ScrollView
            style={styles.dataWrapper}>
              <Table>
                {
                  data.map((totalRows, index) => (
                    <Row
                      key={index}
                      data={totalRows}
                      textStyle={styles.text}
                      widthArr={state.widths}
                      style={[
                        styles.row,
                        index%2 && //bug
                        {backgroundColor: '#ffaafa'}]}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    paddingTop: 25
  },
  headerWrapper: {
    height: 60,
    backgroundColor: '#BAEFBE'
  },
  dataWrapper: {
    flex: 1,
    paddingTop: 8
  },
  text: {
    textAlign: 'center'
  },
  row: {
    height: 60,
    backgroundColor: '#efe'
  }
});
