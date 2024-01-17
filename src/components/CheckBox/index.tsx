import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { styles } from "../CheckBox/style"

export function Checkbox() {
    const [checked, setChecked] = useState(false);
    return (
        <Pressable
            style={[styles.checkboxBase, checked && styles.checkboxChecked]}
            onPress={() => setChecked(!checked)}>
            {checked && <Feather name="check" size={12} color="white" />}
        </Pressable>
    );
}