import {
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useMemo, useCallback } from 'react';
import { useTheme } from '../hooks';
import { RootTheme } from '../../theme';
import { scale, scaleVertical } from '../../theme/scale';
import { Text } from '.';
import Icon from 'react-native-vector-icons/FontAwesome6';

interface AppFormInputProps extends TextInputProps {
  label: string;
  type?: 'Personal-Details-Field' | 'Medical-Details-Field';
  placeholder: string;
}

const AppFormInput: React.FC<AppFormInputProps> = ({
  label,
  type,
  placeholder,
  ...props
}) => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [addedItems, setAddedItems] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState(false);

  const styles = useMemo(
    () => stylesFn({ Colors, Layout, Spacing, Fonts }),
    [Colors, Fonts, Layout, Spacing],
  );

  const handleAddItem = useCallback(() => {
    if (inputValue.trim().length > 0) {
      setAddedItems(prev => [...prev, inputValue.trim()]);
      setInputValue('');
    }
  }, [inputValue]);

  const handleRemoveItem = useCallback((index: number) => {
    setAddedItems(prev => prev.filter((_, i) => i !== index));
    setIsEditing(false);
  }, []);

  const shouldShowSelectedItems = addedItems.length > 0 || !isAdding;

  if (type === 'Medical-Details-Field') {
    return (
      <View style={[styles.mContainer, isAdding && { borderBottomWidth: 0 }]}>
        <View style={styles.mLableAndIconContainer}>
          <Text type="regular" weight="medium">
            {label}
          </Text>
          <View style={styles.iconsContainer}>
            {isEditing && addedItems.length > 0 ? (
              <Icon
                name="check"
                size={scale(14)}
                color={Colors.pureGreen}
                onPress={() => setIsEditing(false)}
              />
            ) : (
              <Icon
                name="pencil"
                size={scale(12)}
                color={Colors.lightGrayPure}
                onPress={() => setIsEditing(true)}
              />
            )}

            <Icon
              name={isAdding ? 'xmark' : 'plus'}
              size={scale(16)}
              color={isAdding ? Colors.redPure : Colors.primaryPure}
              onPress={() => setIsAdding(prev => !prev)}
            />
          </View>
        </View>

        {/* Selected Items or Placeholder */}
        {shouldShowSelectedItems ? (
          addedItems.length === 0 ? (
            <View style={styles.placeholderContainer}>
              <Text type="caption" style={styles.placeholderText}>
                {placeholder}
              </Text>
            </View>
          ) : (
            <View style={[styles.selectedItemContainer, Layout.flexWrap]}>
              {addedItems.map((item, index) => (
                <View key={index} style={styles.selectedItem}>
                  <Text
                    type="caption"
                    weight="semiBold"
                    style={{ ...Colors.textBlack }}
                  >
                    {item}
                  </Text>

                  {isEditing ? (
                    <TouchableOpacity
                      onPress={() => handleRemoveItem(index)}
                      activeOpacity={0.7}
                      style={styles.removeItemIcon}
                    >
                      <Icon
                        name="xmark"
                        size={scale(10)}
                        color={Colors.redPure}
                      />
                    </TouchableOpacity>
                  ) : null}
                </View>
              ))}
            </View>
          )
        ) : null}

        {/* Add Field Section */}
        {isAdding && (
          <View style={styles.AddContainer}>
            <View style={styles.inputFieldContainer}>
              <TextInput
                {...props}
                placeholder={placeholder}
                style={styles.addDetailsInput}
                value={inputValue}
                onChangeText={setInputValue}
                autoFocus
              />
            </View>
            <View style={styles.addButtonContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.addButton}
                onPress={handleAddItem}
              >
                <Text type="caption" style={{ color: Colors.whitePure }}>
                  Add
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Text type="regular" weight="medium">
          {label}
        </Text>
      </View>
      <View style={styles.inputFieldContainer}>
        <TextInput style={styles.inputFieldStyle} {...props} />
      </View>
      <View style={styles.editIconContainer}>
        <Icon name="pencil" size={scale(12)} color={Colors.lightGrayPure} />
      </View>
    </View>
  );
};

const stylesFn = ({ Colors, Fonts, Layout, Spacing }: RootTheme) =>
  StyleSheet.create({
    container: {
      ...Layout.flexRow,
      ...Layout.fullWidth,
      minHeight: scale(52),
      borderBottomWidth: scale(0.8),
      borderBottomColor: Colors.lightGrayPure,
    },
    fieldContainer: {
      flex: 0.3,
      ...Layout.justifyCenter,
      ...Spacing.px1,
    },
    inputFieldContainer: {
      flex: 0.6,
      //   ...Spacing.px1,
      ...Layout.justifyCenter,
    },
    inputFieldStyle: {
      ...Fonts.sz13,
      ...Fonts.font600,
      ...Colors.textBlack,
      ...Spacing.mt1,
      //   minHeight: scale(52),
      lineHeight: scaleVertical(30),
    },
    editIconContainer: {
      flex: 0.1,
      ...Layout.center,
    },
    mContainer: {
      ...Spacing.my2,
      ...Layout.fullWidth,
      minHeight: scale(80),
      borderBottomWidth: scale(0.8),
      borderBottomColor: Colors.lightGrayPure,
    },
    mLableAndIconContainer: {
      minHeight: scale(20),
      ...Spacing.pr3,
      ...Layout.flexRow,
      ...Layout.alignCenter,
      ...Layout.justifyBetween,
      //   backgroundColor: 'yellow',
    },
    iconsContainer: {
      ...Layout.flexRow,
      ...Layout.justifyBetween,
      ...Layout.alignCenter,
      width: scale(50),
      minHeight: scale(20),
      //   backgroundColor: 'red',
    },
    selectedItemContainer: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
      ...Layout.flexGrow,
      ...Spacing.py2,
      minHeight: scale(40),
    },
    selectedItem: {
      ...Spacing.px2,
      ...Spacing.py1,
      ...Spacing.mr2,
      ...Spacing.mb2,
      ...Layout.flexRow,
      ...Layout.alignCenter,
      ...Layout.rounded,
      ...Colors.primaryLight2,
    },
    removeItemIcon: {
      ...Layout.justifyCenter,
      ...Layout.alignEnd,
      width: scale(20),
      height: scaleVertical(16),
    },
    placeholderContainer: {
      ...Layout.fullWidth,
      minHeight: scale(60),
      ...Layout.flexRow,
      ...Layout.alignCenter,
      ...Spacing.px1,
    },
    placeholderText: {
      ...Fonts.sz13,
      ...Fonts.font400,
      color: Colors.lightGrayPure,
    },
    AddContainer: {
      ...Layout.fullWidth,
      height: scale(60),
      ...Layout.flexRow,
      ...Layout.justifyBetween,
      ...Layout.alignCenter,
      borderBottomWidth: scale(0.8),
      borderBottomColor: Colors.lightGrayPure,
    },
    addButtonContainer: {
      width: scale(80),
      height: scaleVertical(60),
      ...Layout.justifyCenter,
      ...Layout.alignCenter,
    },
    addDetailsInput: {
      ...Fonts.sz13,
      ...Fonts.font400,
      ...Colors.textBlack,
      ...Spacing.mt1,
      //   ...Spacing.px1,
      lineHeight: scaleVertical(30),
    },
    addButton: {
      ...Spacing.px6,
      ...Spacing.py1,
      ...Colors.primary,
      ...Layout.rounded2xl,
    },
  });

export default AppFormInput;
