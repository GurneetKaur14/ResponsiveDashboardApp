//Import react and necessary components
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Import custom components and utilities
import BaseWidget from './BaseWidget';
import {theme} from '../../styles/theme';
import {isTablet} from '../../utils/responsive';

//StatisticWidget component
const StatisticWidget = ({
    title,
    value,
    subtitle,
    icon,
    iconColor,
    trend,
    trendValue,
    onPress,
}) => {
// Detect if device is a tablet to adjust text sizes and spacing
const isTab = isTablet();
   
// Determine if trend is positive or negative
const isPositiveTrend = trend === 'up';

// Pick the appropriate color for trend indicator (green = up, red = down)
const trendColor = isPositiveTrend
    ? theme.colors.semantic.success
    : theme.colors.semantic.error;

return (
 <BaseWidget
    title={title}
    icon={icon}
    iconColor={iconColor}
    onPress={onPress}
    showArrow={!!onPress}>

  <View style={styles.statisticContainer}>
    {/* Main Value */}
    <Text style={[styles.value, isTab && styles.tabletValue]}>
    {value}
    </Text>

    {/* Subtitle */}
    {subtitle && (
    <Text style={[styles.subtitle, isTab && styles.tabletSubtitle]}>
    {subtitle}
    </Text>
    )}

    {/* Trend Indicator */}
    {trend && trendValue && (
    <View style={styles.trendContainer}>
    <Icon
    name={trend === 'up' ? 'trending-up' : 'trending-down'}
    size={isTab ? 18 : 16}
    color={trendColor}
    style={styles.trendIcon}
    />

    <Text style={[styles.trendValue, {color: trendColor}]}>
    {trendValue}
    </Text>
    </View>
    )}
    </View>
    </BaseWidget>
    );
};

//Styles
const styles = StyleSheet.create({
// Wrapper for value, subtitle, and trend
  statisticContainer: {
     alignItems: 'center',
},

// Main numeric/statistical value
value: {
    fontSize: theme.typography.h1,
    fontWeight: 'bold',
    color: theme.colors.neutral.gray800,
    marginBottom: theme.spacing.xs,
},

tabletValue: {
    fontSize: theme.typography.h1 * 1.2,
},

//Subtitle text below value
subtitle: {
    fontSize: theme.typography.caption,
    color: theme.colors.neutral.gray600,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
},
//Large subtitle for tablets
tabletSubtitle: {
   fontSize: theme.typography.body,
},
 // Trend section layout (arrow + text)
trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
},

// Space between trend arrow and trend text
trendIcon: {
    marginRight: theme.spacing.xs,
},
  // Trend value styling (bold text)
trendValue: {
    fontSize: theme.typography.caption,
    fontWeight: 'bold',
},
});

//Export component for reuse
export default StatisticWidget;