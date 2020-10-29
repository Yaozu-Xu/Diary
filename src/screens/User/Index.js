/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import storage, { firebase } from '@react-native-firebase/storage';
import varibales from '@/assets/style/variables';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  avatar: {
    borderRadius: 50,
  },
  content: {
    color: varibales.lightGray,
  },
});

const UserScreen = ({ navigation }) => {
  const options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const user = useSelector((state) => state.user);
  function onAvatarPressed() {
    ImagePicker.launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        alert('network error');
      } else {
        const reference = storage().ref(`${user.email}.png`);
        const pathToFile = response.path;
        // uploads file
        const res = await reference.putFile(pathToFile);
        if (res.state === 'success') {
          const url = await reference.getDownloadURL();
          await firebase.auth().currentUser.updateProfile({
            photoURL: url,
          });
          alert('上传成功');
        } else {
          alert('上传失败');
        }
      }
    });
  }
  return (
    <>
      <ListItem bottomDivider containerStyle={styles.container}>
        <ListItem.Content>
          <ListItem.Title>头像</ListItem.Title>
        </ListItem.Content>
        <Avatar
          rounded
          size="medium"
          source={{ uri: user.photoURL }}
        />
        <ListItem.Chevron size={26} onPress={() => onAvatarPressed()} />
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>账号</ListItem.Title>
        </ListItem.Content>
        <ListItem.Content>
          <ListItem.Title style={styles.content}>{user.email}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>昵称</ListItem.Title>
        </ListItem.Content>
        <ListItem.Content right>
          <ListItem.Title style={styles.content}>{user.displayName || '未命名'}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron size={26} />
      </ListItem>
    </>
  );
};

export default UserScreen;
