import React from 'react';
import {SafeAreaView, TextInput} from 'react-native';

const Index = () => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <div className='flex mb-4'>
    <SafeAreaView>
      <TextInput
        className="w-1/2 border-solid bg-gray-700"
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
    </div>
  );
  
};

export default Index;