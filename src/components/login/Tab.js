import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Fonts from '../../styles/Fonts';
import Layout from '../common/Layout';

export default function Tab({tabs}) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Layout>
      <View style={styles.container}>
        {tabs.map((tab, index) => {
          const selected = selectedTab === index;
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                setSelectedTab(index);
              }}
              style={{
                ...styles.tab,
                borderBottomWidth: selected ? 2 : 0,
              }}>
              <Text style={selected ? styles.selectedTabText : styles.tabText}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {tabs[selectedTab].view}
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  tab: {
    margin: 10,
    padding: 10,
    borderBottomWidth: 2,
  },
  tabText: {
    fontFamily: Fonts.Regular,
  },
  selectedTabText: {
    fontFamily: Fonts.SemiBold,
  },
});
