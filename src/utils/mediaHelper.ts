import {Alert, Linking} from 'react-native';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';

export const openImagePicker = async (): Promise<ImageOrVideo> => {
  return new Promise((resolve, reject) => {
    ImagePicker.openCamera({
      height: 1200,
      width: 600,
      cropping: true,
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressPreset: 'MediumQuality',
      includeExif: false,
      forceJpg: true,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      includeBase64: true,
      cropperToolbarWidgetColor: '#3498DB',
    })
      .then((image: any) => {
        resolve(image);
      })
      .catch(err => {
        console.log(err);
        reject();
        return;
      });
  });
};

export const onVideoPicker = async ({}) => {
  ImagePicker.openPicker({
    height: 500,
    width: 500,
    cropping: false,
    cropperCircleOverlay: false,
    compressImageMaxWidth: 1000,
    compressImageMaxHeight: 1000,
    compressImageQuality: 1,
    compressPreset: 'MediumQuality',
    includeExif: false,
    cropperStatusBarColor: 'white',
    cropperToolbarColor: 'white',
    cropperActiveWidgetColor: 'white',
    includeBase64: true,
    mediaType: 'video',
    multiple: false,
    cropperToolbarWidgetColor: 'red',
  })
    .then(async (video: ImageOrVideo | any) => {
      const file = {} as any;

      file.name = video?.path.slice(video.path.lastIndexOf('/') + 1);
      file.doc_type = video?.path
        .slice(video.path.lastIndexOf('.') + 1)
        ?.toUpperCase();
    })
    .catch(err => {
      console.log(err);
    });
};

export const showDeniedAlert = () => {
  Alert.alert(
    'Permission Required',
    'Please grant permission to access camera and media library.',
    [{text: 'Cancel'}, {text: 'Settings', onPress: openSettings}],
    {cancelable: false},
  );
};
export const openSettings = () => {
  Linking.openSettings();
};
