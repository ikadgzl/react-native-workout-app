import { useState } from 'react';
import { Modal as RNModal, StyleSheet, View } from 'react-native';
import { PressableText } from './styled/PressableText';

interface ActivatorProps {
  handleOpen: () => void;
}

interface ModalProps {
  activator?: React.FunctionComponent<ActivatorProps>;
  children?: React.ReactNode;
}

export function Modal({ activator: Activator, children }: ModalProps) {
  const [modalActivated, setModalActivated] = useState<boolean>(false);

  return (
    <View>
      {Activator ? <Activator handleOpen={() => setModalActivated(true)} /> : <PressableText onPress={() => setModalActivated(true)} text='See...' />}

      <RNModal visible={modalActivated} animationType='fade'>
        <View style={styles.modal}>
          <View style={styles.contentView}>{children}</View>
          <PressableText onPress={() => setModalActivated(false)} text='Close' />
        </View>
      </RNModal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  contentView: {
    marginBottom: 12
  }
});
