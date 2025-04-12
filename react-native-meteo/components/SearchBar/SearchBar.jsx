
import { TextInput } from 'react-native';
import { searchBarStyles } from './SearchBar.style';

export function SearchBar({ onSubmit }) {
  return (
    <TextInput
      placeholder='Type a city... Ex: Atlanta'
      style={searchBarStyles.input}
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
    />
  )
}
