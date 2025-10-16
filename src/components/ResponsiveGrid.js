// Import React and React Native components
import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

// Import custom responsive utilities
import {
  getGridColumns,
  listenForOrientationChange,
  getAdaptivePadding,
  isTablet,
} from '../utils/responsive';

// Import app-wide theme (colors, spacing, typography)
import {theme} from '../styles/theme';

//ResponsiveGrid Component
const ResponsiveGrid = ({
  data = [],
  renderItem,
  numColumns,
  spacing = theme.spacing.sm,
  contentContainerStyle,
}) => {
  // State: current number of columns (based on screen/orientation)
  const [columns, setColumns] = useState(numColumns || getGridColumns());

  useEffect(() => {
    // 🌀 When device orientation changes (portrait ↔ landscape),
    // recalculate how many columns should be displayed
    const subscription = listenForOrientationChange(() => {
      setColumns(numColumns || getGridColumns());
    });

    // Cleanup listener when component unmounts
    return () => subscription?.remove();
  }, [numColumns]);

  //render row
  const renderRow = (rowData, rowIndex) => {
    return (
      <View
        key={rowIndex}
        style={[styles.row, {marginHorizontal: -spacing / 2}]}>
        {rowData.map((item, itemIndex) => {
          if (!item) {
            // Empty placeholder to keep consistent grid alignment
            return <View key={itemIndex} style={[styles.item, {flex: 1}]} />;
          }

          return (
            <View
              key={item.id || itemIndex}
              style={[
                styles.item,
                {
                  flex: 1,
                  marginHorizontal: spacing / 2, 
                  marginBottom: spacing, 
                },
              ]}>
              {renderItem(item, itemIndex)}
            </View>
          );
        })}
      </View>
    );
  };

  //Group data items into rows based on column count.
   
  const groupedData = [];
  for (let i = 0; i < data.length; i += columns) {
    const row = data.slice(i, i + columns);

    // Fill incomplete rows with null to maintain structure
    while (row.length < columns) {
      row.push(null);
    }

    groupedData.push(row);
  }

  // Render the full grid by mapping rows
  return (
    <View style={[styles.container, contentContainerStyle]}>
      {groupedData.map((rowData, rowIndex) => renderRow(rowData, rowIndex))}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  // Outer grid container with adaptive horizontal padding
  container: {
    paddingHorizontal: getAdaptivePadding(),
  },

  // Each row lays out items horizontally
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // Base style for each grid item container
  item: {
    // Add visual styling here if needed
  },
});

// Export the reusable component
export default ResponsiveGrid;
