import {
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import React from 'react';

export default function Task({ navigation }) {
  return (
    <>
      <TopNavigation
        title="Task"
        alignment="center"
        style={{ backgroundColor: 'rgb(51, 102, 255)' }}
        titleStyle={{ color: 'white', fontSize: 18 }}
        leftControl={
          <TopNavigationAction
            icon={style => (
              <Icon {...style} style={{ color: 'white' }} name="plus" />
            )}
            onPress={() => navigation.navigate('QRCode')}
          />
        }
      />
      <Layout
        style={{
          flex: 1,
          justifyContent: 'top',
          alignItems: 'center',
        }}
      >
        {/* <Text>Task</Text> */}
      </Layout>
    </>
  );
}
