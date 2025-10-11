//Import React and React Native components
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Import custom themes and responsive utilities
import {theme} from '../../styles/theme';
import {isTablet} from '../../utils/responsive';

//BaseWidget component
const BaseWidget = ({
    title,
    icon,
    iconColor,
    children,
    onPress,
    style,
    headerStyle,
    showArrow = false,
}) => {
    //Detect if the device is a tablet to adjust layout and font sizes
const isTab = isTablet();

//Core widget layout
const content = (
<View style={[styles.container, isTab && styles.tabletContainer, style]}>
{/* Widget Header */}
 <View style={[styles.header, headerStyle]}>
   <View style={styles.headerLeft}>
    {icon && (
        <Icon
            name={icon}
            size={isTab ? 24 : 20}
            color={iconColor || theme.colors.primary.main}
            style={styles.headerIcon}
        />
        )}
        <Text style={[styles.title, isTab && styles.tabletTitle]}>
           {title}
        </Text>
    </View>

        {showArrow && (
        <Icon
            name="chevron-right"
            size={isTab ? 24 : 20}
            color={theme.colors.neutral.gray500}
        />
        )}
        </View>

        {/* Widget Content */}
        <View style={styles.content}>
           {children}
        </View>
        </View>
);

//If widget is clickable, wrap content in TouchableOpacity
if (onPress) {
  return (
   <TouchableOpacity
        onPress={onPress}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel={`${title} widget`}>
        {content}
   </TouchableOpacity>
 );
}
//Otherwise, just render the static content
  return content;
};

//Stylesheet for BaseWidget
const styles = StyleSheet.create({
    //Base container style
container: {
    ...theme.card,
    marginBottom: theme.spacing.md,
},
//Extra padding for tablet screens
tabletContainer: {
    padding: theme.spacing.lg,
},

header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
},

headerLeft: {
flexDirection: 'row',
alignItems: 'center',
flex: 1,
},

headerIcon: {
   marginRight: theme.spacing.sm,
},

title: {
    fontSize: theme.typography.h4,
    fontWeight: 'bold',
    color: theme.colors.neutral.gray800,
    flex: 1,
},

tabletTitle: {
    fontSize: theme.typography.h3,
},

content: {
   flex: 1,
  },
});

//Export component for reuse
export default BaseWidget;