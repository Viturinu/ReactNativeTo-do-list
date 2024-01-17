import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../CheckBox/style"

export function Checkbox() {
    const [checked, setChecked] = useState(false);
    return (
        <Pressable
            style={[styles.checkboxBase, checked && styles.checkboxChecked]}
            onPress={() => setChecked(!checked)}>
            {checked && <Ionicons name="checkbox" size={4} color="#5E60CE" />}
        </Pressable>
    );
}