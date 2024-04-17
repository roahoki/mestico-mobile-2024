// Checkbox.js
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const Checkbox = ({ label }) => {
    const [isChecked, setChecked] = useState(false);

    const toggleCheckbox = () => {
        setChecked(!isChecked);
    };

    return (
        <TouchableOpacity style={styles.row} onPress={toggleCheckbox}>
            <View style={[styles.checkboxBase, isChecked && styles.checkboxChecked]}>
                {isChecked && <View style={styles.checkboxInner} />}
            </View>
            {label && <Text style={styles.label}>{label}</Text>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkboxBase: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#E34D95',
        backgroundColor: 'transparent',
    },
    checkboxChecked: {
        backgroundColor: '#E34D95',
    },
    checkboxInner: {
        width: 12,
        height: 12,
        backgroundColor: 'white',
    },
    label: {
        marginLeft: 8,
        fontSize: 13,
    },
});

export default Checkbox;
