import {Alert, Linking} from 'react-native';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';

export type ImageFile = {
  uri: string;
  type: string | undefined;
  name: string;
};

export type MultiMediaUploadResult = {
  id: string;
  path: string | undefined;
  file: ImageFile;
};
const COMPRESS_SIZE = 0.87;

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

export const getMediaFromGallery = async (
  type: 'photo' | 'video' = 'photo',
  square: boolean = false,
): Promise<MultiMediaUploadResult> => {
  let dimensions = {width: 600, height: 1200};
  if (square && type === 'photo') {
    dimensions = {width: 600, height: 600};
  }

  let options: Parameters<typeof ImagePicker.openPicker>[0] = {
    mediaType: type,
  };

  if (type === 'photo') {
    options = {
      ...options,
      width: dimensions.width,
      height: dimensions.height,
      compressImageQuality: COMPRESS_SIZE,
      cropping: true,
    };
  }

  const result = await ImagePicker.openPicker({
    ...options,
  });

  const sourceUrl = 'file://' + result.path;
  const id = (Math.random() + 1).toString(36).substring(7);

  return {
    id: String(id),
    path: result.path,
    file: {
      uri: sourceUrl,
      type: result.mime,
      name: result.filename ?? 'media',
    } as ImageFile,
  };
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
