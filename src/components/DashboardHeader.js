// Import core React and React Native components
import React from 'react';
import {
View,
Text,
TouchableOpacity,
StatusBar,
StyleSheet,
Platform,
} from 'react-native';
// Import vector icons for the header buttons
import Icon from 'react-native-vector-icons/MaterialIcons';
//Import app theme and responsive utilities
import {theme} from '../styles/theme';
import {wp, hp, isTablet, getAdaptivePadding} from '../utils/responsive';

// DASHBOARD HEADER COMPONENT
const DashboardHeader = ({
    title = 'Dashboard',
    subtitle,
    showMenu = true,
    showNotifications = true,
    onMenuPress,
    onNotificationPress,
    onProfilePress,
}) => {

    //Detect if the device is a tablet to adjust sizes
const isTab = isTablet();

return (
<>
    <StatusBar
  backgroundColor={theme.colors.primary.main}
  barStyle="light-content"
/>


    <View style={[styles.container, isTab && styles.tabletContainer]}>

    {/* Left Section */}
    <View style={styles.leftSection}>
    {showMenu && (

    <TouchableOpacity
        style={styles.iconButton}
        onPress={onMenuPress}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="Open menu">
    <Icon
        name="menu"
        size={isTab ? 28 : 24}
        color={theme.colors.primary.contrast}
    />
    </TouchableOpacity>
    )}

    {/* Title and subtitle */}
    <View style={styles.titleContainer}>
        <Text style={[styles.title, isTab && styles.tabletTitle]}>
            {title}
        </Text>
    {subtitle && (
    <Text style={[styles.subtitle, isTab && styles.tabletSubtitle]}>
       {subtitle}
    </Text>
    )}
    </View>
    </View>

    {/* Right Section */}
    <View style={styles.rightSection}>

       {/* Notifications Icon (optional) */} 
    {showNotifications && (
    <TouchableOpacity
        style={styles.iconButton}
        onPress={onNotificationPress}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="View notifications">
    <Icon
        name="notifications"
        size={isTab ? 28 : 24}
        color={theme.colors.primary.contrast}
    />
    {/* Notification badge */}
    <View style={styles.notificationBadge}>
      <Text style={styles.badgeText}>3</Text>
    </View>
    </TouchableOpacity>
    )}
    {/* Profile Avatar Icon */}
    <TouchableOpacity
        style={styles.profileButton}
        onPress={onProfilePress}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="Open profile">
    <View style={styles.profileAvatar}>
    <Icon
        name="person"
        size={isTab ? 24 : 20}
        color={theme.colors.primary.main}
    />
       </View>
      </TouchableOpacity>
    </View>
   </View>
  </>
 );
};

    //Styles
    const styles = StyleSheet.create({
        //Main header container
    container: {
        backgroundColor: theme.colors.primary.main,
        paddingHorizontal: getAdaptivePadding(),
        paddingTop: Platform.OS === 'ios' ? hp('6%') : hp('5%'),
        paddingBottom: theme.spacing.md,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...theme.shadows.medium,
    },
     // Adjust padding for tablets
    tabletContainer: {
        paddingHorizontal: theme.spacing.xl,
        paddingTop: hp('4%'),
        },

     //Left section: menu + title   
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    // Right section: notifications + profile
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        padding: theme.spacing.sm,
        marginRight: theme.spacing.sm,
        position: 'relative',
    },

    titleContainer: {
       marginLeft: theme.spacing.sm,
    },

    title: {
        fontSize: theme.typography.h3,
        fontWeight: 'bold',
        color: theme.colors.primary.contrast,
    },
    tabletTitle: {
        fontSize: theme.typography.h2,
    },
    subtitle: {
        fontSize: theme.typography.caption,
        color: theme.colors.primary.contrast,
        opacity: 0.8,
        marginTop: 2,
    },
    tabletSubtitle: {
       fontSize: theme.typography.body,
    },

    profileButton: {
       marginLeft: theme.spacing.sm,
    },

    //Circular avator icon
    profileAvatar: {
        width: isTablet() ? 44 : 40,
        height: isTablet() ? 44 : 40,
        borderRadius: isTablet() ? 22 : 20,
        backgroundColor: theme.colors.primary.contrast,
        alignItems: 'center',
        justifyContent: 'center',
        ...theme.shadows.small,
    },

   //Notification badge
    notificationBadge: {
        position: 'absolute',
        top: 4,
        right: 4,
        backgroundColor: theme.colors.accent.main,
        borderRadius: 10,
        minWidth: 18,
        height: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: theme.colors.primary.main,
    },
    badgeText: {
        fontSize: 10,
        color: theme.colors.accent.contrast,
        fontWeight: 'bold',
      },
    });

export default DashboardHeader;