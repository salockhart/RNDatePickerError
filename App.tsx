import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import {Button, View} from 'react-native';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Button title="Show" onPress={() => setVisible(true)} />
      </View>
      {visible && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          onChange={(event, newDate) => {
            console.log(newDate);
            setVisible(false);
          }}
        />
      )}
    </>
  );
};

export default App;
